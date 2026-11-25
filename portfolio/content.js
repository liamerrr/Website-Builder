// ============================================================
//  ALLE INHALTE DES PORTFOLIOS – nur diese Datei anpassen.
// ============================================================
window.PORTFOLIO = {
  name: "Max Mustermann",
  initials: "MM",
  role: "Designer & Frontend-Entwickler",
  location: "Berlin, Deutschland",
  available: true, // zeigt „Offen für Projekte“-Badge
  tagline:
    "Ich gestalte und entwickle digitale Erlebnisse, die klar, schnell und schön sind.",
  email: "hallo@example.com",
  cv: "#", // Link zu deinem Lebenslauf (PDF)

  about: [
    "Ich bin ein Designer und Entwickler mit Fokus auf Interfaces, die Menschen gerne benutzen. Seit über 5 Jahren verbinde ich Gestaltung und Code – von der ersten Skizze bis zur fertigen Website.",
    "Wenn ich nicht am Bildschirm sitze, bin ich mit der Kamera unterwegs, koche oder baue an kleinen Nebenprojekten.",
  ],
  stats: [
    { value: "5+", label: "Jahre Erfahrung" },
    { value: "40+", label: "Projekte" },
    { value: "25", label: "Zufriedene Kunden" },
  ],

  skills: {
    Design: ["Figma", "UI/UX", "Branding", "Prototyping", "Design Systems"],
    Entwicklung: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Astro"],
    Tools: ["Git", "Vite", "Shopify", "Webflow", "Notion"],
  },

  // category muss zu einem der Filter passen (wird automatisch erzeugt)
  projects: [
    {
      title: "Nordlicht Café",
      category: "Web",
      year: 2026,
      description: "Website mit Online-Reservierung für ein Café in Hamburg.",
      tags: ["Astro", "CSS", "Branding"],
      color: "#f59e0b",
      link: "#",
    },
    {
      title: "Fokus App",
      category: "App",
      year: 2025,
      description: "Minimalistische Pomodoro-App mit Statistiken und Dark Mode.",
      tags: ["React", "TypeScript", "UI"],
      color: "#6366f1",
      link: "#",
    },
    {
      title: "Wellenform",
      category: "Branding",
      year: 2025,
      description: "Logo, Farbwelt und Typografie für ein Surf-Label.",
      tags: ["Logo", "Identity", "Print"],
      color: "#06b6d4",
      link: "#",
    },
    {
      title: "Atelier Grün",
      category: "Web",
      year: 2024,
      description: "Onlineshop für handgemachte Keramik inklusive CMS.",
      tags: ["Shopify", "Liquid", "UX"],
      color: "#10b981",
      link: "#",
    },
    {
      title: "Stadtlauf 2024",
      category: "Branding",
      year: 2024,
      description: "Kampagnen-Design für einen Charity-Lauf mit 3.000 Teilnehmenden.",
      tags: ["Kampagne", "Social", "Plakat"],
      color: "#ef4444",
      link: "#",
    },
    {
      title: "Budget Buddy",
      category: "App",
      year: 2023,
      description: "Haushaltsbuch-App mit geteilten Konten für WGs.",
      tags: ["Vue", "Firebase", "Charts"],
      color: "#8b5cf6",
      link: "#",
    },
  ],

  experience: [
    {
      period: "2024 – heute",
      title: "Freelance Designer & Developer",
      place: "Selbstständig",
      text: "Websites, Shops und Markenauftritte für kleine Unternehmen und Start-ups.",
    },
    {
      period: "2021 – 2024",
      title: "Frontend-Entwickler",
      place: "Pixelwerk Agentur",
      text: "Umsetzung von Kundenprojekten mit React, Aufbau eines internen Design-Systems.",
    },
    {
      period: "2018 – 2021",
      title: "B.A. Kommunikationsdesign",
      place: "Hochschule für Gestaltung",
      text: "Schwerpunkt Interaction Design. Abschlussarbeit über barrierefreie Interfaces.",
    },
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/" },
    { label: "Dribbble", url: "https://dribbble.com/" },
    { label: "Instagram", url: "https://instagram.com/" },
  ],
};
