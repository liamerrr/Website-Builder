(() => {
  const data = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const el = (tag, props = {}, children = []) => {
    const n = Object.assign(document.createElement(tag), props);
    [].concat(children).forEach((c) => n.append(c));
    return n;
  };

  // --- Einfache Platzhalter füllen
  document.querySelectorAll("[data-bind]").forEach((n) => {
    n.textContent = data[n.dataset.bind] ?? "";
  });
  document.title = `${data.name} – ${data.role}`;
  $("#year").textContent = new Date().getFullYear();
  if (!data.available) $("#availability").remove();

  // --- Über mich
  data.about.forEach((p) => $("#aboutText").append(el("p", { textContent: p })));
  $("#cvLink").href = data.cv;
  data.stats.forEach((s) =>
    $("#stats").append(
      el("div", {}, [el("dd", { textContent: s.value }), el("dt", { textContent: s.label })])
    )
  );
  Object.entries(data.skills).forEach(([group, items]) =>
    $("#skills").append(
      el("div", { className: "skill-group reveal" }, [
        el("h3", { textContent: group }),
        el("ul", { className: "chips" }, items.map((i) => el("li", { textContent: i }))),
      ])
    )
  );

  // --- Projekte
  const grid = $("#projectGrid");
  data.projects.forEach((p) => {
    const media = el("div", { className: "card__media" });
    media.style.setProperty("--c", p.color || "#4f46e5");
    if (p.image) media.append(el("img", { src: p.image, alt: "", loading: "lazy" }));
    else media.append(p.title.split(" ").map((w) => w[0]).join("").slice(0, 2));

    const card = el("a", { className: "card reveal", href: p.link || "#" }, [
      media,
      el("div", { className: "card__body" }, [
        el("div", { className: "card__meta" }, [
          el("span", { textContent: p.category }),
          el("span", { textContent: p.year }),
        ]),
        el("h3", {}, [p.title + " ", el("span", { className: "arrow", textContent: "→" })]),
        el("p", { textContent: p.description }),
        el("ul", { className: "chips" }, p.tags.map((t) => el("li", { textContent: t }))),
      ]),
    ]);
    card.dataset.category = p.category;
    grid.append(card);
  });

  const categories = ["Alle", ...new Set(data.projects.map((p) => p.category))];
  const filters = $("#filters");
  categories.forEach((c, i) => {
    const b = el("button", { className: "filter", type: "button", textContent: c });
    b.setAttribute("aria-pressed", i === 0);
    b.addEventListener("click", () => {
      filters.querySelectorAll(".filter").forEach((f) => f.setAttribute("aria-pressed", f === b));
      grid.querySelectorAll(".card").forEach((card) =>
        card.classList.toggle("hidden", c !== "Alle" && card.dataset.category !== c)
      );
    });
    filters.append(b);
  });

  // --- Werdegang
  data.experience.forEach((e) =>
    $("#timeline").append(
      el("li", { className: "reveal" }, [
        el("span", { className: "period", textContent: e.period }),
        el("h3", { textContent: e.title }),
        el("p", { className: "place", textContent: e.place }),
        el("p", { textContent: e.text }),
      ])
    )
  );

  // --- Kontakt
  const mail = $("#mailLink");
  mail.href = `mailto:${data.email}`;
  mail.textContent = data.email;
  data.socials.forEach((s) =>
    $("#socials").append(
      el("li", {}, [el("a", { href: s.url, textContent: s.label, target: "_blank", rel: "noopener" })])
    )
  );

  const form = $("#contactForm");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let ok = true;
    form.querySelectorAll("input, textarea").forEach((f) => {
      const valid = f.checkValidity() && f.value.trim() !== "";
      f.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    const note = $("#formNote");
    if (!ok) {
      note.textContent = "Bitte fülle alle Felder korrekt aus.";
      return;
    }
    // Ohne Backend: E-Mail-Programm mit vorausgefülltem Text öffnen.
    const f = new FormData(form);
    const body = `${f.get("message")}\n\n– ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
      "Anfrage über Portfolio"
    )}&body=${encodeURIComponent(body)}`;
    note.textContent = "Danke! Dein E-Mail-Programm öffnet sich gleich.";
    form.reset();
  });

  // --- Theme
  const root = document.documentElement;
  $("#themeToggle").addEventListener("click", () => {
    const current =
      root.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // --- Mobile Menü
  const menuBtn = $("#menuToggle");
  const links = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", false);
    }
  });

  // --- Scroll-Effekte
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  const navAnchors = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting)
          navAnchors.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`)
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
})();
