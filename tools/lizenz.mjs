#!/usr/bin/env node
/**
 * Genom Pro – Lizenzschlüssel erstellen
 *
 *   node tools/lizenz.mjs einrichten              Erzeugt dein Schlüsselpaar (einmalig) und trägt den
 *                                                 öffentlichen Schlüssel in genom/index.html ein.
 *   node tools/lizenz.mjs neu kunde@mail.de [31]  Erstellt einen Lizenzschlüssel, gültig für 31 Tage.
 *   node tools/lizenz.mjs pruefen GENOM-…         Zeigt, für wen und bis wann ein Schlüssel gilt.
 *
 * Der private Schlüssel liegt in tools/lizenz-privat.jwk. Er steht in .gitignore und darf
 * NIEMALS veröffentlicht werden: Wer ihn hat, kann beliebig viele Lizenzen erzeugen.
 */
import { webcrypto as crypto } from "node:crypto";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const PRIV = join(here, "lizenz-privat.jwk");
const HTML = join(here, "..", "genom", "index.html");
const ALG = { name: "ECDSA", namedCurve: "P-256" }, SIGN = { name: "ECDSA", hash: "SHA-256" };
const b64u = buf => Buffer.from(buf).toString("base64url");

async function einrichten() {
  if (existsSync(PRIV) && !process.argv.includes("--neu")) {
    console.error("Es gibt schon einen privaten Schlüssel (tools/lizenz-privat.jwk).\n" +
      "Mit --neu wird er ersetzt – dann werden ALLE bisher verkauften Lizenzen ungültig.");
    process.exit(1);
  }
  const pair = await crypto.subtle.generateKey(ALG, true, ["sign", "verify"]);
  const priv = await crypto.subtle.exportKey("jwk", pair.privateKey);
  const pub = await crypto.subtle.exportKey("jwk", pair.publicKey);
  writeFileSync(PRIV, JSON.stringify(priv, null, 2), { mode: 0o600 });
  const pubText = JSON.stringify({ kty: pub.kty, crv: pub.crv, x: pub.x, y: pub.y });
  const html = readFileSync(HTML, "utf8");
  const re = /\/\*PUBKEY\*\/.*?\/\*\/PUBKEY\*\//s;
  if (!re.test(html)) throw new Error("Markierung /*PUBKEY*/ in genom/index.html nicht gefunden");
  writeFileSync(HTML, html.replace(re, `/*PUBKEY*/${pubText}/*/PUBKEY*/`));
  console.log("Fertig. Privater Schlüssel: tools/lizenz-privat.jwk (geheim halten, Backup machen!)");
  console.log("Öffentlicher Schlüssel wurde in genom/index.html eingetragen.");
}

async function neu(email, tage = 31) {
  if (!email) { console.error("Bitte E-Mail angeben: node tools/lizenz.mjs neu kunde@mail.de [tage]"); process.exit(1); }
  if (!existsSync(PRIV)) { console.error("Erst einrichten: node tools/lizenz.mjs einrichten"); process.exit(1); }
  const key = await crypto.subtle.importKey("jwk", JSON.parse(readFileSync(PRIV, "utf8")), ALG, false, ["sign"]);
  const bis = Date.now() + Number(tage) * 86400000;
  const payload = new TextEncoder().encode(JSON.stringify({ e: email, x: bis, n: b64u(crypto.getRandomValues(new Uint8Array(6))) }));
  const sig = await crypto.subtle.sign(SIGN, key, payload);
  console.log(`GENOM-${b64u(payload)}.${b64u(sig)}`);
  console.error(`→ gültig für ${email} bis ${new Date(bis).toLocaleDateString("de-DE")}`);
}

async function pruefen(lizenz) {
  const m = String(lizenz || "").match(/^GENOM-([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/);
  if (!m) { console.error("Kein Genom-Lizenzschlüssel."); process.exit(1); }
  const html = readFileSync(HTML, "utf8"), pub = JSON.parse(html.match(/\/\*PUBKEY\*\/(.*?)\/\*\/PUBKEY\*\//s)[1]);
  const key = await crypto.subtle.importKey("jwk", pub, ALG, false, ["verify"]);
  const data = Buffer.from(m[1], "base64url"), ok = await crypto.subtle.verify(SIGN, key, Buffer.from(m[2], "base64url"), data);
  const p = JSON.parse(data.toString("utf8"));
  console.log(ok ? "Signatur gültig" : "Signatur UNGÜLTIG", `· ${p.e} · bis ${new Date(p.x).toLocaleDateString("de-DE")}`, Date.now() > p.x ? "(abgelaufen)" : "");
}

const [cmd, a, b] = process.argv.slice(2);
if (cmd === "einrichten") await einrichten();
else if (cmd === "neu") await neu(a, b);
else if (cmd === "pruefen") await pruefen(a);
else console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0].replace(/^#!.*\n\/\*\*?/, "").replace(/^ \* ?/gm, ""));
