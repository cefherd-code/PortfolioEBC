/* The entrance world: an isometric stretch of water with a controllable dolphin.
   Arrow keys / WASD or press-and-drag to swim, Space to jump, swim into the ring to enter. */
(() => {
"use strict";
const cv = document.getElementById("world"); if (!cv) return;
const ctx = cv.getContext("2d");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const COS = .866, SIN = .5, VMAX = 4.2, GAP = .42, R = [.34, .4, .4, .36, .3, .24, .17, .12];
const COL = { text: "#F3F0E8", lime: "#D0F36B", purple: "#C9A7FF", dark: "#8f6fc7" };
const SHADE = ["#141513", "#181a17", "#1d1f1b", "#232620", "#2c3326"];
const LABEL = (typeof NAME === "string" ? NAME : "[YOUR NAME]").split(" ");
const FONT = '800 100px "Bricolage Grotesque", system-ui, sans-serif';
let W, H, S, dpr, T = 0, last = 0, target = null, down = false, hint = 1, entered = false;
const cam = { x: 2, y: 2 }, keys = { up: 0, down: 0, left: 0, right: 0 };
const D = { x: 2, y: 2, h: 0, v: 0, z: 0, vz: 0, rt: 0 };
const seg = R.map((_, i) => ({ x: 2 - i * GAP, y: 2 }));
const ripples = [];

function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr; S = Math.max(34, Math.min(64, Math.min(W, H) / 11));
}
addEventListener("resize", resize); resize();

const wave = (x, y, t) => Math.sin(x * .9 + t * 1.3) * .5 + Math.sin(y * .7 - t * 1.1) * .5 + Math.sin((x + y) * .45 + t * .7) * .4;
const wh = (x, y, t) => wave(x, y, t) * S * .09;
const P = (x, y, z = 0) => [W / 2 + ((x - cam.x) - (y - cam.y)) * COS * S, H / 2 + ((x - cam.x) + (y - cam.y)) * SIN * S - z];
const flatMatrix = (x, y, z, k) => { const [e, f] = P(x, y, z); ctx.setTransform(dpr * COS * S * k, dpr * SIN * S * k, -dpr * COS * S * k, dpr * SIN * S * k, dpr * e, dpr * f); };
const reset = () => ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

/* Floating cubes, seeded so the layout is the same every visit */
let sd = 7; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
const blocks = Array.from({ length: 14 }, (_, i) => {
  const x = -9 + rnd() * 26; let y = -8 + rnd() * 22;
  if (x > -6 && x < 7 && y > -4 && y < 3.5) y += 8;
  return { hx: x, hy: y, x, y, vx: 0, vy: 0, s: .5 + rnd() * .6, top: i % 4 ? COL.text : COL.lime, id: i };
});
const splash = (x, y, s) => ripples.push({ x, y, r: .2, a: 1 }, { x, y, r: .05, a: .8 * s });

function update(dt) {
  const kx = keys.right - keys.left, ky = keys.down - keys.up; let dv = null;
  if (kx || ky) { target = null; const a = kx / COS, b = ky / SIN; dv = { x: (a + b) / 2, y: (b - a) / 2 }; }
  else if (target) { const dx = target.x - D.x, dy = target.y - D.y; if (Math.hypot(dx, dy) < .7) target = null; else dv = { x: dx, y: dy }; }
  if (dv) {
    let da = Math.atan2(dv.y, dv.x) - D.h; da = Math.atan2(Math.sin(da), Math.cos(da));
    D.h += Math.max(-4 * dt, Math.min(4 * dt, da)); D.v = Math.min(VMAX, D.v + 9 * dt);
  } else D.v = Math.max(0, D.v - 5 * dt);
  D.x += Math.cos(D.h) * D.v * dt; D.y += Math.sin(D.h) * D.v * dt;
  if (D.z > 0 || D.vz > 0) { D.vz -= 18 * dt; D.z += D.vz * dt; if (D.z <= 0) { D.z = 0; D.vz = 0; splash(D.x, D.y, 1); } }
  seg[0].x = D.x; seg[0].y = D.y;
  for (let i = 1; i < seg.length; i++) { const p = seg[i - 1], q = seg[i], dx = p.x - q.x, dy = p.y - q.y, l = Math.hypot(dx, dy) || 1; q.x = p.x - dx / l * GAP; q.y = p.y - dy / l * GAP; }
  D.rt -= dt; if (D.v > 1 && !D.z && D.rt <= 0) { ripples.push({ x: D.x, y: D.y, r: .2, a: .7 }); D.rt = .18; }
  for (const r of ripples) { r.r += 2 * dt; r.a -= .8 * dt; }
  while (ripples.length && ripples[0].a <= 0) ripples.shift();
  for (const b of blocks) {
    const dx = b.x - D.x, dy = b.y - D.y, d = Math.hypot(dx, dy) || 1;
    if (d < b.s * .7 + .7 && D.z < .5) { const f = (2 + D.v * 1.2) * dt * 6; b.vx += dx / d * f; b.vy += dy / d * f; }
    b.vx += ((b.hx - b.x) * .4 + Math.sin(T * .4 + b.id) * .1) * dt; b.vy += ((b.hy - b.y) * .4 + Math.cos(T * .35 + b.id) * .1) * dt;
    const damp = Math.pow(.4, dt); b.vx *= damp; b.vy *= damp; b.x += b.vx * dt; b.y += b.vy * dt;
  }
  const k = Math.min(1, dt * 2.5); cam.x += (D.x - cam.x) * k; cam.y += (D.y - cam.y) * k;
  if (Math.hypot(D.x - 2, D.y - 2) > 2) hint = Math.max(0, hint - dt);
  if (!entered && Math.hypot(D.x - 9, D.y - 6) < 1.5) { entered = true; document.querySelector(".enter").click(); }
}

function water(t) {
  const Rg = Math.ceil((W / 2 / (COS * S) + H / 2 / (SIN * S)) / 2) + 2, cx = Math.round(cam.x), cy = Math.round(cam.y), n = 2 * Rg, amp = S * .09, hs = [];
  for (let i = 0; i <= n; i++) { hs[i] = []; for (let j = 0; j <= n; j++) hs[i][j] = wave(cx - Rg + i, cy - Rg + j, t) * amp; }
  ctx.lineWidth = 1; ctx.strokeStyle = "rgba(57,58,51,.55)";
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x = cx - Rg + i, y = cy - Rg + j, h = hs[i][j], avg = (h + hs[i + 1][j] + hs[i + 1][j + 1] + hs[i][j + 1]) / 4;
    ctx.fillStyle = SHADE[Math.max(0, Math.min(4, Math.floor((avg / amp + 1.2) / 2.4 * 5)))];
    ctx.beginPath(); ctx.moveTo(...P(x, y, h)); ctx.lineTo(...P(x + 1, y, hs[i + 1][j])); ctx.lineTo(...P(x + 1, y + 1, hs[i + 1][j + 1])); ctx.lineTo(...P(x, y + 1, hs[i][j + 1])); ctx.closePath(); ctx.fill(); ctx.stroke();
  }
}

function flat(txt, x, y, size, col, side, depth, z, align) {
  const u = size / 100; ctx.font = FONT; ctx.textAlign = align || "left";
  for (let k = Math.round(depth / 2) * 2; k >= 0; k -= 2) {
    flatMatrix(x, y, z + k, u); ctx.fillStyle = k ? side : col; ctx.fillText(txt, 0, 0);
  }
}

function cube(b, t) {
  const h = b.s * S * .8, z = wh(b.x, b.y, t) - b.s * S * .15, a = b.s / 2, p = (dx, dy, zz) => P(b.x + dx, b.y + dy, z + zz);
  const face = (pts, c) => { ctx.fillStyle = c; ctx.beginPath(); pts.forEach((q, i) => i ? ctx.lineTo(...q) : ctx.moveTo(...q)); ctx.closePath(); ctx.fill(); };
  face([p(a, -a, 0), p(a, a, 0), p(a, a, h), p(a, -a, h)], "#8c8b84");
  face([p(-a, a, 0), p(a, a, 0), p(a, a, h), p(-a, a, h)], "#6f6e69");
  face([p(-a, -a, h), p(a, -a, h), p(a, a, h), p(-a, a, h)], b.top);
}

function dolphin(t) {
  const amp = D.v / VMAX, n = seg.length, pts = seg.map((s, i) => {
    const z = wh(s.x, s.y, t) + Math.sin(t * 6 - i * .7) * S * .06 * amp + D.z * S;
    return { p: P(s.x, s.y, z + R[i] * S * .5), r: R[i] * S };
  });
  const tl = seg[n - 1], tp = seg[n - 2], dx = tl.x - tp.x, dy = tl.y - tp.y, l = Math.hypot(dx, dy) || 1, f = Math.sin(t * 7) * .1;
  ctx.fillStyle = COL.dark;
  for (const s of [-1, 1]) { const q = P(tl.x + dx / l * .14 - dy / l * s * (.3 + f), tl.y + dy / l * .14 + dx / l * s * (.3 + f), wh(tl.x, tl.y, t) + D.z * S + R[n - 1] * S * .5); ctx.beginPath(); ctx.arc(q[0], q[1], .13 * S, 0, 7); ctx.fill(); }
  ctx.lineWidth = 1; ctx.strokeStyle = COL.dark;
  for (let i = n - 1; i >= 0; i--) {
    const { p, r } = pts[i]; ctx.fillStyle = COL.purple; ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, 7); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "rgba(243,240,232,.35)"; ctx.beginPath(); ctx.arc(p[0] - r * .25, p[1] - r * .35, r * .5, 0, 7); ctx.fill();
  }
  const [fx, fy] = pts[3].p; ctx.fillStyle = COL.dark; ctx.beginPath(); ctx.moveTo(fx - .12 * S, fy - .1 * S); ctx.lineTo(fx - .02 * S, fy - .62 * S); ctx.lineTo(fx + .12 * S, fy - .1 * S); ctx.fill();
  const hx = Math.cos(D.h), hy = Math.sin(D.h), z = wh(D.x, D.y, t) + D.z * S + R[0] * S * .5, b = P(D.x + hx * .42, D.y + hy * .42, z);
  ctx.fillStyle = COL.purple; ctx.beginPath(); ctx.arc(b[0], b[1], .13 * S, 0, 7); ctx.fill(); ctx.stroke();
  ctx.fillStyle = "#141513";
  for (const s of [-1, 1]) { const e = P(D.x + hx * .12 - hy * s * .22, D.y + hy * .12 + hx * s * .22, z + .1 * S); ctx.beginPath(); ctx.arc(e[0], e[1], .045 * S, 0, 7); ctx.fill(); }
}

function draw(t) {
  reset(); ctx.clearRect(0, 0, W, H); water(t);
  ctx.lineWidth = 1.6 / (S * .8);
  for (const r of ripples) { flatMatrix(r.x, r.y, wh(r.x, r.y, t), 1); ctx.strokeStyle = `rgba(208,243,107,${Math.max(0, r.a * .6)})`; ctx.beginPath(); ctx.arc(0, 0, r.r, 0, 7); ctx.stroke(); }
  const depth = S * .22, nz = S * .12 + wh(-4, -2, t) * .6;
  LABEL.forEach((w, i) => flat(w.toUpperCase(), -4 + i * 3.2, -2.5 + i * 2.3, 2.2, COL.text, "#77766f", depth, nz));
  flat("COMPUTER ENGINEERING STUDENT", -.6, .9, .5, COL.lime, "#7d9a35", depth * .4, nz);
  if (hint > 0) { ctx.globalAlpha = hint; flat("ARROW KEYS OR DRAG TO SWIM / SPACE TO JUMP", .5, 4.8, .34, "#A5A69B", "#4a4b45", 4, nz); ctx.globalAlpha = 1; }
  const pr = 1.7 + Math.sin(t * 2) * .08; flatMatrix(9, 6, wh(9, 6, t) + 2, 1);
  ctx.strokeStyle = COL.lime; ctx.lineWidth = .08; ctx.beginPath(); ctx.arc(0, 0, pr, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(0, 0, pr * .7, 0, 7); ctx.globalAlpha = .4; ctx.stroke(); ctx.globalAlpha = 1;
  flat("ENTER", 9, 6.3, .7, COL.lime, "#7d9a35", 8, 4, "center");
  reset();
  const items = blocks.map(b => ({ d: b.x + b.y, f: () => cube(b, t) }));
  items.push({ d: D.x + D.y, f: () => dolphin(t) });
  items.sort((a, b) => a.d - b.d).forEach(o => o.f());
}

function frame(now) { const dt = Math.min(.05, (now - last) / 1000 || 0); last = now; if (!reduced) T += dt; update(dt); draw(T); requestAnimationFrame(frame); }
requestAnimationFrame(frame);

/* Controls */
const map = { ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down", ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right" };
addEventListener("keydown", e => {
  const k = map[e.code];
  if (k) { keys[k] = 1; e.preventDefault(); }
  else if (e.code === "Space" && document.activeElement === document.body && !D.z) { D.vz = 6.5; splash(D.x, D.y, .6); e.preventDefault(); }
});
addEventListener("keyup", e => { const k = map[e.code]; if (k) keys[k] = 0; });
const aim = e => { const u = (e.clientX - W / 2) / (COS * S), w = (e.clientY - H / 2) / (SIN * S); target = { x: cam.x + (u + w) / 2, y: cam.y + (w - u) / 2 }; };
cv.addEventListener("pointerdown", e => { down = true; cv.setPointerCapture(e.pointerId); aim(e); });
cv.addEventListener("pointermove", e => { if (down) aim(e); });
addEventListener("pointerup", () => { down = false; });
})();