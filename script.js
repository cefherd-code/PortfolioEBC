/* =========================================================
   EDIT YOUR CONTENT HERE. The page builds itself from this.
   Anything in [BRACKETS] is a placeholder to replace.
   ========================================================= */
/* ★ YOUR NAME: change the text between the quotes. It updates every page, the dolphin world and the footer. */
const NAME = "Efherd Catequista";

const CONTACT = [
  { label: "Email",    url: "mailto: cefherd@gmaail.com" },
  { label: "GitHub",   url: "https://github.com/cefherd-code" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/catequista-efherd-b-28a3523a5" }
];

const PROFILE_IMAGE = "images/profilepic.jpg";
const ABOUT_IMAGE   = "images/view.jpg";

const PROJECTS = [
  {
    name: "DialyCare: Dialysis Scheduling and Notification Application",
    short: "DialyCare",
    category: "Academic Software Design",
    summary: "A design for managing dialysis schedules and notifying patients and their companions.",
    tech: ["Flutter", "Firebase", "Cloud Firestore,Figma,Canva"],
    role: "Project Manager & Database Administrator",
    status: "Academic Design Project, In Development",
    image: "images/view.jpg",
    size: "wide", accent: "var(--accent)", github: "", demo: "",
    overview: "An academic software design project focused on dialysis schedule management and patient/companion notifications. The proposed application is intended to help dialysis centers coordinate schedules and share appointment and pickup information with patients and their designated companions.",
    problem: "DialyCare was conceptualized to address the challenges dialysis centers may experience in managing patient schedules and communicating appointment updates to patients and their designated relatives or companions. Since dialysis sessions can last several hours, coordinating schedules and arranging patient pickup can require repeated calls and text messages, making communication and coordination more time-consuming.The motivation behind DialyCare is to develop an application that helps dialysis centers organize patient schedules and provide timely notifications about appointment status and pickup coordination. By making schedule information more accessible to patients and their designated companions, the project aims to improve communication, reduce coordination difficulties, and make the dialysis scheduling process more convenient for everyone involved.",
    solution: "A mobile experience for patients and companions, plus a desktop-oriented experience for authorized dialysis-center personnel.",
    features: ["Schedule management for dialysis centers (planned)", "Notifications for patients and companions (planned)", "Separate mobile and desktop experiences (planned)"],
    contributions: ["As the Project Manager and Database Administrator for DialyCare, I help facilitate team collaboration, coordinate tasks, and ensure that each member understands their responsibilities throughout the software design process. I help organize project activities, monitor our progress, and guide the team toward our project objectives.As the Database Administrator, I am responsible for planning and organizing the database structure, identifying the information the application needs to store, and designing how data will be organized and related. I also help ensure that the database structure supports DialyCare's features, including patient account management, dialysis scheduling, and notifications."],
    process: "DialyCare allows dialysis centers to manage patient records and dialysis schedules through a desktop application, while patients and their designated relatives or companions can access schedules and receive notifications through a mobile application. The system helps coordinate appointment updates and patient pickup arrangements, making scheduling and communication more organized and convenient.",
    lessons: "Working on DialyCare taught me the importance of teamwork, communication, and proper project organization. As a Project Manager and Database Administrator, I learned how to coordinate responsibilities, manage project requirements, and think carefully about how information should be structured within a system. The project also helped me understand that developing an application is not only about writing code, but also about understanding users' needs, solving real-world problems, and continuously improving the design through collaboration and feedback.",
    shots: [["Mobile screenshot", "Mobileapp.jpg"], ["Desktop screenshot", "destopapp.jpg"], ["Group photo", "gpic.jpg"]]
  },
  { name: "TaraG!", short: "TaraG!", category: "Software Development Project", summary: "TaraG! is a web application designed to help people discover, plan, and book travel and leisure experiences in advance. It provides a platform for exploring destinations such as museums, resorts, amusement parks, nature spots, and staycation accommodations.", tech: ["HTML,CSS,Javascript, Firebase"], role: "Manager", status: "In Development", image: "images/TaraG.png", size: "tall", accent: "var(--accent2)", github: "", demo: "" },
  { name: "CoinFlex", short: "CoinFlex", category: "Project Design", summary: "CoinFlex is a system design project focused on developing a coin-changing machine that offers flexible bill-and-coin exchange options. It is intended to allow users to convert paper bills into coins or exchange accumulated coins for bills, with customizable exchange combinations based on their needs.", tech: ["ESP32, Raspberry Pi,Programming"], role: "Assistant Leader", status: "In Development", image: "images/Coinflex.jpg", size: "sq", accent: "var(--text)", github: "", demo: "" }
  // Copy a block above and paste it here to add a project. Delete one to remove it.
];

const ROLES = [
  { name: "DialyCare", kind: "Software Academic Project", role: "Project Manager & Database Administrator", context: "Dialysis Schedule Management and Patient Notification System", dates: "2026",
    duties: ["Led and coordinated the team during the Software Design project. Helped organize project activities, coordinate team responsibilities, and guide the project toward its design objectives."], tools: "Flutter, Figma, Firebase, Cloud Firestore (proposed)", outcome: " I learned the importance of teamwork, proper planning, and database design in developing a software application. As the Project Manager and Database Administrator, I gained experience in coordinating team members, organizing tasks, and planning a database structure that supports the system's requirements. " },
      { name: "TaraG!", kind: "Software Development Project", role: "Project Manager", context: "Travel and Leisure Booking Platform", dates: "2025",
    duties: [" I coordinated team members, assigned tasks, and monitored their progress to ensure that everyone fulfilled their responsibilities. I helped organize project activities, facilitated communication among members, and guided the team toward completing our project objectives."], tools: "HTML, CSS, JavaScript, Firebase", outcome: "I learned the importance of leadership, teamwork, and effective task management. I realized that managing a project requires clear communication, proper planning, and cooperation to ensure that everyone works toward the same goal. " }
    
];

const INTERESTS = [
  ["Software development", " I enjoy turning creative ideas into practical applications. I like exploring different concepts, designing how an application should look and work, and discovering how programming can transform an idea into something useful."],
  ["Cybersecurity", "Learning about digital security, system protection, and the practices used to safeguard information and technology."],
  ["Logo Design", "Developing distinctive visual identities that represent a brand, project, or concept."],
  ["Graphic Design", "Creating visual compositions that communicate ideas through layout, color, and typography."],
  ["UI/UX Design", "Designing application interfaces with a focus on usability, functionality, and visual appeal."]
];

// level: "Can use" | "Used in academic projects" | "Currently learning"  (edit to match reality)
// level: "Familiar with" | "Used in projects" | "Currently learning"  (edit to match reality; verify each one)
const SKILLS = [
  { group: "Programming and development", items: [["Dart", "Used in projects"], ["JavaScript", "Currently learning"]] },
  { group: "Web technologies", items: [["HTML", "Familiar with"], ["CSS", "Familiar with"]] },
  { group: "Tools and platforms", items: [["Git and GitHub", "Exploriing"], ["Visual Studio Code", "Familiar with"], ["Flutter", "Used in projects"], ["Firebase and Cloud Firestore", "Used in projects"]] },
  { group: "Software design", items: [["Interface planning", "Exploring"], ["System workflows", "Exploring"]] },
  { group: "Cybersecurity learning", items: [["Security fundamentals", "Currently learning"]] }
];

/* ===================== Shared code (runs on every page) ===================== */
const PAGES = [["#overview","Overview"],["#about","About"],["#projects","Projects"],["#experience","Experience"],["#interests","Interests"],["#expertise","Expertise"],["#contact","Contact"]];
const $ = (s, r = document) => r.querySelector(s);
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const num = (i) => String(i + 1).padStart(2, "0");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Image with a labeled placeholder if the file is missing (no broken images)
function figure(src, label, shape, eager) {
  const box = el(`<div class="fig fig--${shape}"><div class="ph mono"><b>[${esc(label)}]</b>Replace: ${esc(src)}</div></div>`);
  const img = new Image();
  img.alt = label; img.loading = eager ? "eager" : "lazy";
  img.onload = () => { const ph = box.querySelector(".ph"); if (ph) ph.remove(); if (shape !== "portrait") box.classList.add("fit"); box.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(3)); };
  img.onerror = () => img.remove();           // missing file: keep the labeled placeholder
  box.prepend(img);                           // attach first so lazy loading can start
  img.src = src;
  return box;
}
const swap = (sel, make) => { const n = $(sel); if (n) n.replaceWith(make()); };
swap("#profile-fig", () => figure(PROFILE_IMAGE, "YOUR PROFILE IMAGE", "portrait", true));
swap("#ov-fig", () => figure(PROFILE_IMAGE, "YOUR PROFILE IMAGE", "portrait", true));
swap("#about-fig", () => figure(ABOUT_IMAGE, "SECONDARY IMAGE", "tall"));

/* Shared navigation + footer (edit PAGES above to change the menu) */
const nav = $("#site-nav");
if (nav) {
  nav.innerHTML = `<a class="nav__brand" href="index.html" title="Back to the entrance">← Entrance</a>
    <button class="nav__toggle" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav id="menu" class="nav__menu" aria-label="Main">${PAGES.map(([h, t], i) =>
      `<a href="${h}"><span>${num(i)}</span>${t}</a>`).join("")}</nav>`;
  const toggle = $(".nav__toggle"), menu = $("#menu");
  const setMenu = (o) => { menu.classList.toggle("open", o); toggle.setAttribute("aria-expanded", o); };
  toggle.onclick = () => setMenu(!menu.classList.contains("open"));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { setMenu(false); } });
}
const foot = $("#site-footer");
if (foot) foot.innerHTML = `<span>© ${new Date().getFullYear()} ${NAME} / ARCHIVE 001</span><nav aria-label="Footer"><a href="index.html">Entrance</a><a href="#overview">Back to top</a></nav>`;

/* Room transition on every internal page link: a lime line sweeps across a dark veil,
   then the next page fades the veil away. */
const veil = $(".veil") || document.body.appendChild(el('<div class="veil" aria-hidden="true"></div>'));
let arriving = false;
try { arriving = sessionStorage.getItem("arrive") === "1"; sessionStorage.removeItem("arrive"); } catch (_) {}
if (arriving && !reduced) { veil.classList.add("on"); requestAnimationFrame(() => requestAnimationFrame(() => veil.classList.remove("on"))); }
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || a.target || a.hasAttribute("download") || reduced || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  const u = new URL(a.href);
  if (u.origin !== location.origin || u.pathname === location.pathname) return;
  e.preventDefault(); document.body.classList.add("leaving");
  try { sessionStorage.setItem("arrive", "1"); } catch (_) {}
  setTimeout(() => { location.href = a.href; }, 450);
});
addEventListener("pageshow", () => document.body.classList.remove("leaving"));

/* ===================== Page-specific rendering ===================== */
const on = (sel, fn) => { const n = $(sel); if (n) fn(n); };

on("#gallery", g => PROJECTS.forEach((p, i) => {
  const b = el(`<button class="piece reveal" aria-label="Open case study: ${esc(p.short)}"></button>`);
  b.append(figure(p.image, `${p.short} PREVIEW`, p.size));
  b.append(el(`<div class="piece__cap"><span class="mono">${num(i)}</span><h3>${esc(p.name)}</h3>
    <p>${esc(p.summary)}</p><div>${p.tech.map(t => `<span class="tag mono">${esc(t)}</span>`).join("")}</div>
    <span class="mono">${esc(p.category)} · ${esc(p.status)}</span></div>`));
  b.style.setProperty("--pc", p.accent || "var(--accent)"); b.onclick = () => openCase(p, i);
  g.append(b);
}));

on("#roles", r => ROLES.forEach((x, i) => r.append(el(`<li class="role">
  <span class="mono">${num(i)} / ${esc(x.kind)}<br>${esc(x.dates)}</span>
  <div><h3>${esc(x.name)}</h3><p class="mono">${esc(x.role)}</p><p>${esc(x.context)}</p></div>
  <div><ul>${x.duties.map(d => `<li>${esc(d)}</li>`).join("")}</ul>
  <p class="mono" style="margin-top:1rem">Tools: ${esc(x.tools)}</p><p>${esc(x.outcome)}</p></div></li>`))));

on("#interest-list", box => {
  INTERESTS.forEach(([t, d], i) => box.append(el(`<div class="int">
    <button aria-expanded="false" aria-controls="int${i}">${esc(t)}<span class="mono">+</span></button><p id="int${i}">${esc(d)}</p></div>`)));
  box.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", !open); b.querySelector(".mono").textContent = open ? "+" : "−";
  });
});

on("#skill-list", s => SKILLS.forEach(g => s.append(el(`<div><h3>${esc(g.group)}</h3><ul>${
  g.items.map(([n, l]) => `<li><span>${esc(n)}</span><span class="lvl mono">${esc(l)}</span></li>`).join("")}</ul></div>`))));

on("#contact-list", c => CONTACT.forEach(x => c.append(el(`<li><a href="${esc(x.url)}" ${x.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(x.label)}</a></li>`))));

/* Case study dialog (native <dialog>: Esc and focus handled by the browser) */
const dlg = $("#case");
const links = p => [["GitHub", p.github], ["Live demo", p.demo]].filter(([, u]) => u && u.startsWith("http")).map(([l, u]) => `<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${l}</a>`).join(" ");
function openCase(p, i) {
  const list = (a) => `<ul>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const sec = (h, c) => c ? `<h4>${h}</h4>${c}` : "";
  $("#case-body").innerHTML = `<p class="mono">${num(i)} / ${esc(p.category)}</p><h2 id="case-title">${esc(p.name)}</h2>
    <p class="mono">STATUS: ${esc(p.status)}</p>
    ${sec("OVERVIEW", `<p>${esc(p.overview || p.summary)}</p>`)}
    ${sec("PROBLEM OR MOTIVATION", p.problem && `<p>${esc(p.problem)}</p>`)}
    ${sec("PROPOSED SOLUTION", p.solution && `<p>${esc(p.solution)}</p>`)}
    ${sec("KEY FEATURES", p.features && list(p.features))}
    ${sec("MY CONTRIBUTIONS", p.contributions && list(p.contributions))}
    ${sec("TECHNOLOGIES", `<p>${p.tech.map(esc).join(", ")}</p>`)}
    ${sec("PROCESS", p.process && `<p>${esc(p.process)}</p>`)}
    ${sec("LESSONS LEARNED", p.lessons && `<p>${esc(p.lessons)}</p>`)}
    ${links(p)}<div class="figs"></div>`;
  (p.shots || []).forEach(([l, f]) => $("#case-body .figs").append(figure("images/" + f, l.toUpperCase(), "sq")));
  dlg.showModal();
}
if (dlg) {
  $("#case-close").onclick = () => dlg.close();
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
}

/* Gentle reveal for gallery pieces */
const revObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(r => revObs.observe(r));

on("#contact-main", a => { a.href = CONTACT[0].url; });
const navLinks = [...document.querySelectorAll(".nav__menu a")];
if (navLinks.length) {
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) navLinks.forEach(a => {
    const cur = a.hash === "#" + e.target.id; a.classList.toggle("active", cur); a.toggleAttribute("aria-current", cur); }); }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => so.observe(s));
}

/* Fill in the name everywhere from the single NAME above */
document.title = document.title.replace("EFHERD", NAME);
on(".ov__title", t => { const [a, ...b] = NAME.split(" "); t.innerHTML = `${esc(a)}<br>${esc(b.join(" "))}`; });
on(".sr", s => { s.textContent = `${NAME} — Computer Engineering student`; });