// @ts-nocheck
"use client"

import { Component as ReactComponent, Fragment } from "react"
import * as THREE from "three"

// Parse a CSS declaration string into a React style object.
const css = (s) => {
  const o = {}
  for (const d of s.split(";")) {
    const i = d.indexOf(":")
    if (i < 0) continue
    const k = d.slice(0, i).trim()
    if (!k) continue
    o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = d.slice(i + 1).trim()
  }
  return o
}

export default class YardDesigner extends ReactComponent {

constructor(props) {
super(props);
this.catalog = {
spa: { label: 'Spa · round', w: 96, h: 96, z: 10, rad: '999px', snap: 'out', icon: 'M15 4a11 11 0 1 0 0.01 0M15 8a7 7 0 1 0 0.01 0' },
spaSq: { label: 'Spa · square', w: 96, h: 96, z: 10, rad: '10px', snap: 'out', icon: 'M4 4h22v22H4zM8 8h14v14H8z' },
spaRect: { label: 'Spa · rect', w: 136, h: 88, z: 10, rad: '10px', snap: 'out', icon: 'M2 7h26v16H2zM6 11h18v8H6z' },
steps: { label: 'Entry steps', w: 132, h: 66, z: 0, rad: '0', flat: true, snap: 'in', icon: 'M2 8h26A13 13 0 0 1 2 8zM8 8h14A7 7 0 0 1 8 8z' },
ledge: { label: 'Tanning ledge', w: 130, h: 84, z: 0, rad: '10px', flat: true, snap: 'in', icon: 'M2 7h26v16H2zM7 10h5v10H7zM15 10h5v10h-5z' },
firebowl: { label: 'Fire bowl', w: 44, h: 44, z: 26, rad: '999px', icon: 'M15 4a11 11 0 1 0 0.01 0M15 9c3 3 3 7 0 9-3-2-3-6 0-9z' },
fountain: { label: 'Fountain', w: 44, h: 44, z: 14, rad: '999px', icon: 'M15 4a11 11 0 1 0 0.01 0M9 15a6 6 0 0 1 12 0M15 15V8' },
sheer: { label: 'Waterfall', w: 72, h: 28, z: 26, rad: '3px', snap: 'edge', icon: 'M3 8h24v5H3zM7 13v10M12 13v10M18 13v10M23 13v10' },
pergola: { label: 'Pergola', w: 190, h: 130, z: 84, rad: '4px', icon: 'M3 7h24M3 23h24M7 4v22M12 4v22M18 4v22M23 4v22' },
bench: { label: 'Bench', w: 84, h: 28, z: 12, rad: '3px', icon: 'M3 11h24v8H3zM3 15h24' },
loungers: { label: 'Loungers', w: 72, h: 64, z: 10, rad: '8px', icon: 'M5 4h8v22H5zM17 4h8v22h-8zM5 10h8M17 10h8' },
umbrella: { label: 'Umbrella', w: 72, h: 72, z: 70, rad: '999px', icon: 'M15 3l8.5 3.5L27 15l-3.5 8.5L15 27l-8.5-3.5L3 15l3.5-8.5zM15 3v24M3 15h24' },
firepit: { label: 'Fire pit', w: 132, h: 132, z: 10, rad: '999px', icon: 'M15 9a6 6 0 1 0 0.01 0M12 2h6v4h-6zM12 24h6v4h-6zM2 12h4v6H2zM24 12h4v6h-4z' },
kitchen: { label: 'Kitchen', w: 150, h: 72, z: 30, rad: '4px', icon: 'M3 6h24v8H3zM20 14v12h7V14M8 8h8v4H8z' },
palm: { label: 'Palm', w: 96, h: 96, z: 110, rad: '999px', icon: 'M15 15L15 3M15 15l10-6M15 15l10 6M15 15v12M15 15L5 21M15 15L5 9' },
shrub: { label: 'Shrub', w: 52, h: 52, z: 26, rad: '999px', icon: 'M10 12a6 6 0 1 1 10 0a6 6 0 1 1-2 10a6 6 0 1 1-8-2a6 6 0 0 1 0-8z' },
dining: { label: 'Dining', w: 104, h: 104, z: 24, rad: '999px', icon: 'M15 9a6 6 0 1 0 0.01 0M12 2h6v4h-6zM12 24h6v4h-6zM2 12h4v6H2zM24 12h4v6h-4z' }
};
this.poleDefs = {
pergola: [[6, 12, '#5A3A20', 8], [184, 12, '#5A3A20', 8], [6, 118, '#5A3A20', 8], [184, 118, '#5A3A20', 8]],
umbrella: [[36, 36, '#8A6A4A', 4]],
palm: [[48, 48, '#7A5A3A', 9]],
firebowl: [[22, 22, '#8C7A66', 30]],
kitchen: [[75, 17, '#B9AF9F', 146], [133, 36, '#B9AF9F', 30]],
sheer: [[36, 6, '#8E7860', 70]],
dining: [[52, 52, '#6E5238', 6]],
shrub: [[26, 26, '#466B3A', 40]],
bench: [[42, 14, '#5E4028', 80]],
fountain: [[22, 22, '#A89780', 40]]
};
this.presets = {
rect: { label: 'Rectangle', smooth: false, icon: 'M3 3h28v16H3z', pts: [[240, 150], [660, 150], [660, 400], [240, 400]] },
lshape: { label: 'L-shape', smooth: false, icon: 'M3 3h28v9H17v7H3z', pts: [[240, 150], [660, 150], [660, 290], [450, 290], [450, 400], [240, 400]] },
roman: { label: 'Roman', smooth: true, icon: 'M9 3h16a8 8 0 0 1 0 16H9A8 8 0 0 1 9 3z', pts: [[320, 150], [450, 150], [580, 150], [640, 180], [664, 275], [640, 370], [580, 400], [450, 400], [320, 400], [260, 370], [236, 275], [260, 180]] },
kidney: { label: 'Kidney', smooth: true, icon: 'M5 6c6-5 20-4 25 2s-3 12-9 9-7 3-12 2S0 11 5 6z', pts: [[272, 168], [390, 142], [520, 150], [622, 176], [668, 252], [638, 334], [552, 372], [472, 338], [390, 360], [292, 378], [240, 322], [236, 232]] },
lagoon: { label: 'Lagoon', smooth: true, icon: 'M6 5c5-4 8 2 13-1s11 2 11 8-5 4-7 7-9 3-13 0S1 9 6 5z', pts: [[290, 140], [382, 168], [472, 134], [592, 150], [664, 210], [646, 296], [676, 360], [572, 388], [452, 358], [342, 392], [248, 344], [260, 238]] }
};
this.nextId = 40;
this.deckRect = [[156, 84], [764, 84], [790, 110], [790, 564], [130, 564], [130, 110]];
this.state = this.initial();
this.state.items = this.conformAll(this.state.items, this.state.pts, this.state.smooth);
this.drag = null;
}
initial() {
return {
shape: 'kidney',
pts: this.presets.kidney.pts.map((p) => p.slice()),
smooth: true,
mode: 'move',
draft: [],
sel: null,
light: 'day',
deck: 'travertine',
water: 'tahoe',
coping: 'travertine',
view: 'top',
spin: 162,
tilt: 56,
zoom: 46,
auto: false,
items: [
{ id: 1, type: 'spaSq', x: 716, y: 396, r: 0, s: 1 },
{ id: 2, type: 'firebowl', x: 330, y: 114, r: 0, s: 1 },
{ id: 3, type: 'firebowl', x: 570, y: 114, r: 0, s: 1 },
{ id: 4, type: 'pergola', x: 262, y: 482, r: 0, s: 1 },
{ id: 5, type: 'loungers', x: 520, y: 478, r: 0, s: 1 },
{ id: 6, type: 'umbrella', x: 610, y: 470, r: 0, s: 1 },
{ id: 7, type: 'palm', x: 72, y: 76, r: 0, s: 1 },
{ id: 8, type: 'shrub', x: 840, y: 110, r: 0, s: 1 },
{ id: 9, type: 'shrub', x: 846, y: 470, r: 0, s: 1 },
{ id: 10, type: 'palm', x: 830, y: 290, r: 20, s: 1 },
{ id: 11, type: 'steps', x: 300, y: 196, r: 0, s: 1, snap: true, wx: 290, wy: 170 }
]
};
}
pt(e) {
const r = this.stage.getBoundingClientRect();
const k = 900 / r.width;
return { x: Math.max(0, Math.min(900, (e.clientX - r.left) * k)), y: Math.max(0, Math.min(640, (e.clientY - r.top) * k)) };
}
catmull(pts) {
const f = (v) => Math.round(v * 10) / 10;
const n = pts.length;
let d = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
for (let i = 0; i < n; i++) {
const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
d += ' C' + f(p1[0] + (p2[0] - p0[0]) / 6) + ' ' + f(p1[1] + (p2[1] - p0[1]) / 6) + ' ' + f(p2[0] - (p3[0] - p1[0]) / 6) + ' ' + f(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + f(p2[0]) + ' ' + f(p2[1]);
}
return d + ' Z';
}
rounded(pts, rad) {
const f = (v) => Math.round(v * 10) / 10;
const n = pts.length;
let d = '';
for (let i = 0; i < n; i++) {
const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
const la = Math.hypot(a[0] - p[0], a[1] - p[1]) || 1, lb = Math.hypot(b[0] - p[0], b[1] - p[1]) || 1;
const r = Math.min(rad, la / 2, lb / 2);
const s = [p[0] + (a[0] - p[0]) / la * r, p[1] + (a[1] - p[1]) / la * r];
const t = [p[0] + (b[0] - p[0]) / lb * r, p[1] + (b[1] - p[1]) / lb * r];
d += (i === 0 ? 'M' : ' L') + f(s[0]) + ' ' + f(s[1]) + ' Q' + f(p[0]) + ' ' + f(p[1]) + ' ' + f(t[0]) + ' ' + f(t[1]);
}
return d + ' Z';
}
resampleLoop(raw) {
if (raw.length < 8) return [];
const pts = raw.slice();
const start = pts[0];
while (pts.length > 8 && Math.hypot(pts[pts.length - 1][0] - start[0], pts[pts.length - 1][1] - start[1]) < 28) pts.pop();
const loop = pts.concat([start]);
const cum = [0];
for (let i = 1; i < loop.length; i++) cum.push(cum[i - 1] + Math.hypot(loop[i][0] - loop[i - 1][0], loop[i][1] - loop[i - 1][1]));
const total = cum[cum.length - 1];
if (total < 160) return [];
const n = Math.max(8, Math.min(28, Math.round(total / 55)));
const out = [];
let j = 1;
for (let k = 0; k < n; k++) {
const d = total * k / n;
while (j < cum.length - 1 && cum[j] < d) j++;
const t = (d - cum[j - 1]) / ((cum[j] - cum[j - 1]) || 1);
out.push([Math.round(loop[j - 1][0] + (loop[j][0] - loop[j - 1][0]) * t), Math.round(loop[j - 1][1] + (loop[j][1] - loop[j - 1][1]) * t)]);
}
return out;
}
simplify(pts, eps) {
if (pts.length < 3) return pts.slice();
const a = pts[0], b = pts[pts.length - 1];
let idx = -1, best = 0;
const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
for (let i = 1; i < pts.length - 1; i++) {
const d = L < 1.5 ? Math.hypot(pts[i][0] - a[0], pts[i][1] - a[1]) : Math.abs((b[0] - a[0]) * (a[1] - pts[i][1]) - (a[0] - pts[i][0]) * (b[1] - a[1])) / L;
if (d > best) { best = d; idx = i; }
}
if (best > eps) {
const l = this.simplify(pts.slice(0, idx + 1), eps), r = this.simplify(pts.slice(idx), eps);
return l.slice(0, -1).concat(r);
}
return [a, b];
}
flush() {
this.raf = null;
if (this.pending) { this.setState(this.pending); this.pending = null; }
}
queue(patch) {
this.pending = Object.assign(this.pending || {}, patch);
if (!this.raf) this.raf = requestAnimationFrame(() => this.flush());
}
add(type) {
const id = ++this.nextId;
const items = this.state.items.concat([{ id, type, x: 450 + Math.round((Math.random() - 0.5) * 120), y: 470 + Math.round((Math.random() - 0.5) * 40), r: 0, s: 1 }]);
this.setState({ items, sel: id, view: 'top', auto: false, mode: this.state.mode === 'draw' ? 'draw' : 'move' });
}
patchSel(fn) {
this.setState({ items: this.state.items.map((it) => (it.id === this.state.sel ? fn(it) : it)) });
}
start3d() {
const T = THREE;
const canvas = this.canvasEl || document.querySelector('canvas[data-yard3d]');
if (!T || !canvas || this.r3) return;
const renderer = new T.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(900, 640, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = T.PCFSoftShadowMap;
renderer.toneMapping = T.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
const scene = new T.Scene();
const camera = new T.PerspectiveCamera(38, 900 / 640, 0.1, 500);
const hemi = new T.HemisphereLight(0xcfe8ff, 0x6b8c53, 0.9);
const sun = new T.DirectionalLight(0xfff4e0, 2.6);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = -32; sc.right = 32; sc.top = 32; sc.bottom = -32; sc.near = 1; sc.far = 160;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(hemi, sun, sun.target);
const poolLights = [new T.PointLight(0x6fe9ff, 0, 22, 2), new T.PointLight(0x6fe9ff, 0, 22, 2)];
poolLights.forEach((l) => scene.add(l));
this.r3 = { T, renderer, scene, camera, hemi, sun, poolLights, mats: {}, tex: {}, design: null, statics: null, clock: new T.Clock(), flames: [], waters: [], fireLights: [], glowLights: [], windows: [] };
this.r3.statics = this.buildStatics3d();
scene.add(this.r3.statics);
this.build3d();
this.applyLight3d();
this.placeCamera3d();
const tick = () => {
if (!this.r3) return;
const r = this.r3;
const t = r.clock.getElapsedTime();
r.waters.forEach((m) => { m.uniforms.uTime.value = t; });
if (r.tex.caustic) { r.tex.caustic.offset.set(t * 0.012, t * 0.008); }
r.flames.forEach((f, i) => { const k = 1 + Math.sin(t * 13 + i * 2.1) * 0.08 + Math.sin(t * 7.3 + i) * 0.06; f.scale.set(k, 1 + Math.sin(t * 11 + i) * 0.14, k); });
r.fireLights.forEach((l, i) => { l.intensity = l.userData.base * (1 + Math.sin(t * 17 + i) * 0.12); });
if (this.state.auto) { this.autoA = (this.autoA || 0) + 0.12; this.placeCamera3d(this.autoA); }
r.renderer.render(r.scene, r.camera);
r.raf = requestAnimationFrame(tick);
};
this.r3.raf = requestAnimationFrame(tick);
}
stop3d() {
const r = this.r3;
if (!r) return;
cancelAnimationFrame(r.raf);
const kill = (o) => o && o.traverse((n) => { if (n.geometry) n.geometry.dispose(); });
kill(r.design); kill(r.statics);
Object.values(r.mats).forEach((m) => m.dispose && m.dispose());
Object.values(r.tex).forEach((t) => t.dispose && t.dispose());
r.renderer.dispose();
this.r3 = null;
}
w3(x, y) {
return [(x - 450) / 20, (y - 320) / 20];
}
canvasTex(size, draw, repeat, key) {
const T = this.r3.T;
if (key && this.r3.tex[key]) return this.r3.tex[key];
const c = document.createElement('canvas');
c.width = size; c.height = size;
const g = c.getContext('2d');
draw(g, size);
const t = new T.CanvasTexture(c);
t.colorSpace = T.SRGBColorSpace;
t.wrapS = t.wrapT = T.RepeatWrapping;
t.anisotropy = 8;
if (repeat) t.repeat.set(repeat, repeat);
if (key) this.r3.tex[key] = t;
return t;
}
rand(seed) {
let s = seed || 1;
return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}
speckle(g, n, colors, rMax, rnd) {
for (let i = 0; i < n; i++) { g.fillStyle = colors[Math.floor(rnd() * colors.length)]; g.globalAlpha = 0.25 + rnd() * 0.5; const r = 0.5 + rnd() * rMax; g.fillRect(rnd() * g.canvas.width, rnd() * g.canvas.height, r, r); }
g.globalAlpha = 1;
}
mat(key, make) {
if (!this.r3.mats[key]) this.r3.mats[key] = make();
return this.r3.mats[key];
}
std(key, color, rough, extra) {
const T = this.r3.T;
return this.mat(key, () => new T.MeshStandardMaterial(Object.assign({ color, roughness: rough == null ? 0.8 : rough, metalness: 0 }, extra || {})));
}
deckTex(kind) {
const rnd = this.rand(kind === 'flagstone' ? 7 : kind === 'concrete' ? 13 : 3);
if (kind === 'flagstone') return this.canvasTex(1024, (g, S) => {
g.fillStyle = '#7D6750'; g.fillRect(0, 0, S, S);
const N = 7, cell = S / N, P = [];
for (let j = 0; j <= N; j++) { P[j] = []; for (let i = 0; i <= N; i++) { const edge = i === 0 || j === 0 || i === N || j === N; P[j][i] = [i * cell + (edge ? 0 : (rnd() - 0.5) * cell * 0.55), j * cell + (edge ? 0 : (rnd() - 0.5) * cell * 0.55)]; } }
for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
const tones = ['#C9AE88', '#BFA17A', '#D1B893', '#B99B74', '#CDB38D', '#C4A780', '#B08F6A'];
g.fillStyle = tones[Math.floor(rnd() * tones.length)];
const q = [P[j][i], P[j][i + 1], P[j + 1][i + 1], P[j + 1][i]];
const cx = (q[0][0] + q[2][0]) / 2, cy = (q[0][1] + q[2][1]) / 2;
g.beginPath(); q.forEach((p, k) => { const x = cx + (p[0] - cx) * 0.93, y = cy + (p[1] - cy) * 0.93; if (k) g.lineTo(x, y); else g.moveTo(x, y); }); g.closePath(); g.fill();
}
this.speckle(g, 26000, ['#8C7355', '#E2CDA8', '#A5896A'], 2.2, rnd);
}, 0.12, 'deck-flagstone');
if (kind === 'concrete') return this.canvasTex(1024, (g, S) => {
g.fillStyle = '#D9D5CD'; g.fillRect(0, 0, S, S);
for (let i = 0; i < 1400; i++) { g.fillStyle = rnd() > 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(190,184,172,0.35)'; g.beginPath(); g.ellipse(rnd() * S, rnd() * S, 3 + rnd() * 14, 2 + rnd() * 9, rnd() * 3, 0, 7); g.fill(); }
this.speckle(g, 30000, ['#B7B2A9', '#EEEBE5', '#9E998F'], 1.6, rnd);
g.strokeStyle = 'rgba(80,70,60,0.35)'; g.lineWidth = 3;
for (let k = 0; k <= S; k += S / 4) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, S); g.stroke(); g.beginPath(); g.moveTo(0, k); g.lineTo(S, k); g.stroke(); }
}, 0.1, 'deck-concrete');
return this.canvasTex(1024, (g, S) => {
g.fillStyle = '#C9B89C'; g.fillRect(0, 0, S, S);
const u = S / 8;
const tiles = [[0, 0, 2, 2], [2, 0, 2, 1], [2, 1, 1, 1], [3, 1, 1, 1], [0, 2, 1, 2], [1, 2, 2, 2], [3, 2, 1, 2]];
const tones = ['#E8DCC6', '#E1D2B8', '#EEE4D2', '#DCCBAE', '#E4D7BF', '#EADFCB', '#DED0B5', '#E6D9C1'];
for (let oy = 0; oy < 2; oy++) for (let ox = 0; ox < 2; ox++) tiles.forEach((t) => {
g.fillStyle = tones[Math.floor(rnd() * tones.length)];
g.fillRect((ox * 4 + t[0]) * u + 2, (oy * 4 + t[1]) * u + 2, t[2] * u - 4, t[3] * u - 4);
});
this.speckle(g, 30000, ['#BFAE90', '#F4ECDD', '#A89878'], 1.8, rnd);
for (let i = 0; i < 260; i++) { g.strokeStyle = 'rgba(170,150,120,0.25)'; g.lineWidth = 0.8; const x = rnd() * S, y = rnd() * S; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - 0.5) * 40, y + (rnd() - 0.5) * 8); g.stroke(); }
}, 0.14, 'deck-travertine');
}
buildStatics3d() {
const T = this.r3.T;
const G = new T.Group();
const rnd = this.rand(5);
const grass = this.canvasTex(1024, (g, S) => {
g.fillStyle = '#4F7A38'; g.fillRect(0, 0, S, S);
for (let i = 0; i < 90; i++) { g.fillStyle = rnd() > 0.5 ? 'rgba(120,150,60,0.18)' : 'rgba(40,80,30,0.18)'; g.beginPath(); g.arc(rnd() * S, rnd() * S, 30 + rnd() * 90, 0, 7); g.fill(); }
for (let i = 0; i < 90000; i++) { const x = rnd() * S, y = rnd() * S; g.strokeStyle = ['#5E8A42', '#3F6A2C', '#77A052', '#4C7A36', '#6B9848'][Math.floor(rnd() * 5)]; g.globalAlpha = 0.6; g.lineWidth = 1; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (rnd() - 0.5) * 3, y - 3 - rnd() * 4); g.stroke(); }
g.globalAlpha = 1;
}, 0.06, 'grass');
const lawnShape = new T.Shape();
lawnShape.moveTo(-80, -80); lawnShape.lineTo(80, -80); lawnShape.lineTo(80, 80); lawnShape.lineTo(-80, 80); lawnShape.closePath();
lawnShape.holes.push(this.path3(this.deckRect));
const lawn = new T.Mesh(this.flat(new T.ShapeGeometry(lawnShape), -0.02), new T.MeshStandardMaterial({ map: grass, roughness: 1 }));
lawn.receiveShadow = true;
G.add(lawn);
const fenceTex = this.canvasTex(256, (g, S) => {
for (let x = 0; x < S; x += 16) { g.fillStyle = ['#8A6140', '#9A6E47', '#835A3A', '#A0754D'][Math.floor(rnd() * 4)]; g.fillRect(x, 0, 15, S); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x + 15, 0, 1, S); }
this.speckle(g, 4000, ['#6B4A2E', '#B08660'], 1.5, rnd);
}, 1, 'fence');
const fh = 3.4;
const [x0, z0] = this.w3(8, 8), [x1, z1] = this.w3(892, 554);
const seg = (ax, az, bx, bz) => {
const len = Math.hypot(bx - ax, bz - az);
const tex = fenceTex.clone(); tex.needsUpdate = true; tex.repeat.set(len / 4, 1);
const m = new T.Mesh(new T.BoxGeometry(len, fh, 0.15), new T.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
m.position.set((ax + bx) / 2, fh / 2, (az + bz) / 2);
m.rotation.y = -Math.atan2(bz - az, bx - ax);
m.castShadow = true; m.receiveShadow = true;
G.add(m);
for (let k = 0; k <= Math.floor(len / 4); k++) { const f = k / Math.max(1, Math.floor(len / 4)); const post = new T.Mesh(new T.BoxGeometry(0.3, fh + 0.3, 0.3), this.std('post', 0x5f4128, 0.9)); post.position.set(ax + (bx - ax) * f, (fh + 0.3) / 2, az + (bz - az) * f); post.castShadow = true; G.add(post); }
};
seg(x0, z0, x1, z0); seg(x0, z0, x0, z1); seg(x1, z0, x1, z1);
const [hx0, hz0] = this.w3(0, 556), [hx1, hz1] = this.w3(900, 700);
const house = new T.Group();
const wallMat = this.std('stucco', 0xe6dccb, 0.95);
const body = new T.Mesh(new T.BoxGeometry(hx1 - hx0, 6.2, hz1 - hz0), wallMat);
body.position.set((hx0 + hx1) / 2, 3.1, (hz0 + hz1) / 2); body.castShadow = true; body.receiveShadow = true;
house.add(body);
const roofMat = this.std('roof', 0x4a4f57, 0.85);
// Hip roof: a four-sided pyramid squashed to the house footprint.
const roofGeo = new T.ConeGeometry(1, 1, 4, 1);
roofGeo.rotateY(Math.PI / 4);
const roof = new T.Mesh(roofGeo, roofMat);
roof.scale.set(((hx1 - hx0) + 1.2) / Math.SQRT2, 2.6, ((hz1 - hz0) + 1.2) / Math.SQRT2);
roof.position.set((hx0 + hx1) / 2, 6.2 + 1.3, (hz0 + hz1) / 2); roof.castShadow = true;
house.add(roof);
const glass = this.std('glass', 0x9fb8c6, 0.15, { metalness: 0.2, emissive: 0xffc27a, emissiveIntensity: 0 });
this.r3.windows = [glass];
const trim = this.std('trim', 0xf6f1e7, 0.6);
[[-14, 3.2, 4.4, 2.6], [14, 3.2, 4.4, 2.6], [0, 2.3, 5.4, 4.2]].forEach((w) => {
const fr = new T.Mesh(new T.BoxGeometry(w[2] + 0.4, w[3] + 0.4, 0.12), trim); fr.position.set(w[0], w[1], hz0 - 0.02); house.add(fr);
const gl = new T.Mesh(new T.BoxGeometry(w[2], w[3], 0.14), glass); gl.position.set(w[0], w[1], hz0 - 0.04); house.add(gl);
});
G.add(house);
return G;
}
offsetPoly(poly, d) {
const n = poly.length, out = [];
for (let i = 0; i < n; i++) {
const a = poly[(i - 1 + n) % n], p = poly[i], b = poly[(i + 1) % n];
let e1x = p[0] - a[0], e1y = p[1] - a[1], e2x = b[0] - p[0], e2y = b[1] - p[1];
const l1 = Math.hypot(e1x, e1y) || 1, l2 = Math.hypot(e2x, e2y) || 1;
e1x /= l1; e1y /= l1; e2x /= l2; e2y /= l2;
let nx = e1y + e2y, ny = -e1x - e2x;
const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
const dot = Math.max(0.35, nx * e1y + ny * -e1x);
out.push([p[0] + nx * d / dot, p[1] + ny * d / dot]);
}
if (this.inside(out[0], poly) === (d > 0)) return out.map((q, i) => [poly[i][0] * 2 - q[0], poly[i][1] * 2 - q[1]]);
return out;
}
shape3(poly) {
const T = this.r3.T;
const s = new T.Shape();
poly.forEach((p, i) => { const w = this.w3(p[0], p[1]); if (i) s.lineTo(w[0], -w[1]); else s.moveTo(w[0], -w[1]); });
s.closePath();
return s;
}
path3(poly) {
const T = this.r3.T;
const s = new T.Path();
poly.forEach((p, i) => { const w = this.w3(p[0], p[1]); if (i) s.lineTo(w[0], -w[1]); else s.moveTo(w[0], -w[1]); });
s.closePath();
return s;
}
flat(geo, y) {
geo.rotateX(-Math.PI / 2);
geo.translate(0, y, 0);
return geo;
}
waterMat(shallow, deep) {
const T = this.r3.T;
const m = new T.ShaderMaterial({
transparent: true,
depthWrite: false,
uniforms: { uTime: { value: 0 }, uShallow: { value: new T.Color(shallow) }, uDeep: { value: new T.Color(deep) }, uSky: { value: new T.Color(0xcfe6f5) }, uSunDir: { value: new T.Vector3(-0.5, 0.8, -0.3).normalize() }, uSunCol: { value: new T.Color(0xffffff) }, uGlow: { value: 0 }, uGlowCol: { value: new T.Color(0x3fd8ff) } },
vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
fragmentShader: [
'uniform float uTime; uniform vec3 uShallow; uniform vec3 uDeep; uniform vec3 uSky; uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uGlow; uniform vec3 uGlowCol; varying vec3 vW;',
'float h(vec2 p){ return sin(p.x*1.3+uTime*1.1)*0.5 + sin(p.y*1.7-uTime*0.9)*0.4 + sin((p.x+p.y)*2.3+uTime*1.7)*0.22 + sin((p.x*3.1-p.y*2.7)+uTime*2.3)*0.14 + sin((p.x*5.3+p.y*4.1)-uTime*3.1)*0.06; }',
'void main(){ vec2 p = vW.xz; float e = 0.05;',
'float hx = (h(p+vec2(e,0.0))-h(p-vec2(e,0.0)))/(2.0*e); float hz = (h(p+vec2(0.0,e))-h(p-vec2(0.0,e)))/(2.0*e);',
'vec3 N = normalize(vec3(-hx*0.07, 1.0, -hz*0.07)); vec3 V = normalize(cameraPosition - vW);',
'float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);',
'vec3 base = mix(uShallow, uDeep, 0.5 + 0.5*sin(p.x*0.08));',
'vec3 R = reflect(-uSunDir, N); float spec = pow(max(dot(R, V), 0.0), 220.0);',
'vec3 col = mix(base, uSky, fres*0.8) + uSunCol*spec*2.2 + uGlowCol*uGlow;',
'gl_FragColor = vec4(col, mix(0.62, 0.95, fres));',
'#include <tonemapping_fragment>',
'#include <colorspace_fragment>',
'}'].join('\n')
});
this.r3.waters.push(m);
return m;
}
build3d() {
const r = this.r3;
if (!r) return;
const T = r.T;
if (r.design) { r.scene.remove(r.design); r.design.traverse((n) => { if (n.geometry) n.geometry.dispose(); if (n.material && n.material.userData && n.material.userData.own) n.material.dispose(); }); }
r.waters.forEach((m) => m.dispose()); r.waters = []; r.flames = [];
r.fireLights.forEach((l) => r.scene.remove(l)); r.fireLights = [];
r.glowLights.forEach((l) => r.scene.remove(l)); r.glowLights = [];
const st = this.state;
const G = new T.Group();
r.design = G;
const pool = this.outline(st.pts, st.smooth);
if (pool.length < 3) { r.scene.add(G); return; }
const waters = { tahoe: [0x7fd8e6, 0x0f6f99], caribbean: [0x9fe8dc, 0x138e97], midnight: [0x5a9cc6, 0x0b3558] };
const copings = { travertine: 0xefe7d8, flagstone: 0xc2a57e, concrete: 0xdad7d1 };
const wc = waters[st.water] || waters.tahoe;
const deckShape = this.shape3(this.deckRect);
deckShape.holes.push(this.path3(pool));
const dtex = this.deckTex(st.deck);
const deckMat = this.mat('deck-' + st.deck, () => new T.MeshStandardMaterial({ map: dtex, roughness: 0.92 }));
const deck = new T.Mesh(this.flat(new T.ExtrudeGeometry(deckShape, { depth: 0.4, bevelEnabled: false }), -0.32), deckMat);
deck.receiveShadow = true; deck.castShadow = true;
G.add(deck);
const outer = this.offsetPoly(pool, 11);
const copeShape = this.shape3(outer);
copeShape.holes.push(this.path3(pool.slice()));
const copeMat = this.mat('cope-' + st.coping, () => new T.MeshStandardMaterial({ color: copings[st.coping] || 0xefe7d8, roughness: 0.75, map: this.canvasTex(256, (g, S) => { const rn = this.rand(9); g.fillStyle = '#ffffff'; g.fillRect(0, 0, S, S); this.speckle(g, 5000, ['#d9d2c4', '#bdb5a5', '#ffffff'], 1.5, rn); g.fillStyle = 'rgba(0,0,0,0.18)'; for (let k = 0; k < S; k += 64) g.fillRect(k, 0, 2, S); }, 0.5, 'cope-grain') }));
const cope = new T.Mesh(this.flat(new T.ExtrudeGeometry(copeShape, { depth: 0.14, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 }), 0.03), copeMat);
cope.castShadow = true; cope.receiveShadow = true;
G.add(cope);
const depth = 1.7;
const wallTex = this.canvasTex(256, (g, S) => {
const rn = this.rand(4);
g.fillStyle = '#E4EEF0'; g.fillRect(0, 0, S, S);
this.speckle(g, 5000, ['#CFDDE0', '#F4FAFA'], 1.3, rn);
const band = Math.round(S * 0.16);
for (let y = 0; y < band; y += 8) for (let x = 0; x < S; x += 8) { g.fillStyle = ['#2B5F80', '#3D6F8E', '#5A8FAE', '#34688A'][Math.floor(rn() * 4)]; g.fillRect(x + 0.5, y + 0.5, 7, 7); }
g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, band, S, 2);
}, 1, 'wall');
const pos = [], uv = [], idx = [];
let acc = 0;
const wp = pool.map((p) => this.w3(p[0], p[1]));
for (let i = 0; i <= wp.length; i++) {
const p = wp[i % wp.length];
if (i) acc += Math.hypot(p[0] - wp[(i - 1) % wp.length][0], p[1] - wp[(i - 1) % wp.length][1]);
pos.push(p[0], 0.06, p[1], p[0], -depth, p[1]);
uv.push(acc / 3, 1, acc / 3, 0);
if (i) { const b = i * 2; idx.push(b - 2, b - 1, b, b - 1, b + 1, b); }
}
const wallGeo = new T.BufferGeometry();
wallGeo.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
wallGeo.setAttribute('uv', new T.Float32BufferAttribute(uv, 2));
wallGeo.setIndex(idx); wallGeo.computeVertexNormals();
const walls = new T.Mesh(wallGeo, this.mat('wall', () => new T.MeshStandardMaterial({ map: wallTex, roughness: 0.6, side: T.DoubleSide })));
walls.receiveShadow = true;
G.add(walls);
if (!r.tex.caustic) {
r.tex.caustic = this.canvasTex(256, (g, S) => {
const rn = this.rand(21), P = [];
for (let i = 0; i < 26; i++) P.push([rn() * S, rn() * S]);
const img = g.createImageData(S, S);
for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
let d1 = 1e9, d2 = 1e9;
P.forEach((p) => { let dx = Math.abs(x - p[0]); let dy = Math.abs(y - p[1]); dx = Math.min(dx, S - dx); dy = Math.min(dy, S - dy); const d = dx * dx + dy * dy; if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; });
const e = Math.sqrt(d2) - Math.sqrt(d1);
const v = Math.max(0, 1 - e / 7) * 255;
const o = (y * S + x) * 4; img.data[o] = v; img.data[o + 1] = v; img.data[o + 2] = v; img.data[o + 3] = 255;
}
g.putImageData(img, 0, 0);
}, 0.22, null);
}
const floorTex = this.canvasTex(512, (g, S) => { const rn = this.rand(8); g.fillStyle = '#E6F0F1'; g.fillRect(0, 0, S, S); this.speckle(g, 16000, ['#D2E0E3', '#F7FBFB', '#C6D6D9'], 1.4, rn); }, 0.2, 'floor');
const floorMat = this.mat('floor', () => new T.MeshStandardMaterial({ map: floorTex, roughness: 0.7, emissive: 0x9ff3ff, emissiveMap: r.tex.caustic, emissiveIntensity: 0.55 }));
const floor = new T.Mesh(this.flat(new T.ShapeGeometry(this.shape3(pool)), -depth), floorMat);
floor.receiveShadow = true;
G.add(floor);
const water = new T.Mesh(this.flat(new T.ShapeGeometry(this.shape3(pool), 12), -0.16), this.waterMat(wc[0], wc[1]));
water.renderOrder = 2;
G.add(water);
let cx = 0, cz = 0; wp.forEach((p) => { cx += p[0]; cz += p[1]; }); cx /= wp.length; cz /= wp.length;
r.poolLights[0].position.set(cx - 3, -0.9, cz); r.poolLights[1].position.set(cx + 3, -0.9, cz);
st.items.forEach((it) => { const o = this.item3(it, wc, copeMat); if (o) G.add(o); });
r.scene.add(G);
this.applyLight3d();
}
item3(it, wc, copeMat) {
const r = this.r3, T = r.T;
const c = this.catalog[it.type];
const W = c.w / 20, D = c.h / 20;
const g = new T.Group();
const [X, Z] = this.w3(it.x, it.y);
g.position.set(X, 0, Z);
g.rotation.y = -(it.r || 0) * Math.PI / 180;
g.scale.setScalar(it.s || 1);
const add = (geo, mat, x, y, z, shadow) => { const m = new T.Mesh(geo, mat); m.position.set(x || 0, y || 0, z || 0); if (shadow !== false) { m.castShadow = true; m.receiveShadow = true; } g.add(m); return m; };
const stone = this.std('stone', 0xb8a58a, 0.9);
const wood = this.std('wood', 0x8a5a36, 0.75);
const woodDark = this.std('woodDark', 0x5a3a20, 0.8);
const cushion = this.std('cushion', 0xf2ece2, 0.95);
const metal = this.std('metal', 0x3a3f45, 0.4, { metalness: 0.6 });
const plaster = this.std('plaster', 0xeef4f4, 0.6);
const leaf = this.std('leaf', 0x4b7439, 0.85);
const leaf2 = this.std('leaf2', 0x6a9650, 0.85);
const flameMat = this.mat('flame', () => new T.MeshBasicMaterial({ color: 0xffb547, transparent: true, opacity: 0.9 }));
const fire = (x, y, z, s) => {
const f = add(new T.ConeGeometry(0.35 * s, 1.1 * s, 12), flameMat, x, y + 0.55 * s, z, false); r.flames.push(f);
const l = new T.PointLight(0xff9a3c, 0, 14 * s, 2); l.userData.base = 6; l.position.set(0, y + 1, 0); g.add(l); r.fireLights.push(l);
};
const spaBody = (shape, w, d) => {
const h = 0.9;
if (shape === 'round') {
add(new T.CylinderGeometry(w / 2, w / 2, h, 48), stone, 0, h / 2, 0);
add(new T.CylinderGeometry(w / 2 + 0.12, w / 2 + 0.12, 0.14, 48), copeMat, 0, h + 0.07, 0);
const wa = add(new T.CircleGeometry(w / 2 - 0.38, 48), this.waterMat(wc[0], wc[1]), 0, h + 0.15, 0, false); wa.rotation.x = -Math.PI / 2; wa.renderOrder = 3;
} else {
add(new T.BoxGeometry(w, h, d), stone, 0, h / 2, 0);
add(new T.BoxGeometry(w + 0.24, 0.14, 0.5), copeMat, 0, h + 0.07, -d / 2 + 0.13);
add(new T.BoxGeometry(w + 0.24, 0.14, 0.5), copeMat, 0, h + 0.07, d / 2 - 0.13);
add(new T.BoxGeometry(0.5, 0.14, d), copeMat, -w / 2 + 0.13, h + 0.07, 0);
add(new T.BoxGeometry(0.5, 0.14, d), copeMat, w / 2 - 0.13, h + 0.07, 0);
const wa = add(new T.PlaneGeometry(w - 0.8, d - 0.8), this.waterMat(wc[0], wc[1]), 0, h + 0.1, 0, false); wa.rotation.x = -Math.PI / 2; wa.renderOrder = 3;
}
const l = new T.PointLight(0x6fe9ff, 0, 8, 2); l.position.set(0, h - 0.2, 0); l.userData.base = 8; g.add(l); r.glowLights.push(l);
};
switch (it.type) {
case 'spa': spaBody('round', W); break;
case 'spaSq': spaBody('sq', W, D); break;
case 'spaRect': spaBody('sq', W, D); break;
case 'steps': {
[[3.3, -1.2], [2.3, -0.8], [1.3, -0.42]].forEach(([rad, top]) => {
const hgt = top + 1.7;
const m = add(new T.CylinderGeometry(rad, rad, hgt, 40, 1, false, -Math.PI / 2, Math.PI), plaster, 0, -1.7 + hgt / 2, -D / 2, false); m.receiveShadow = true;
});
break;
}
case 'ledge': {
add(new T.BoxGeometry(W, 1.35, D), plaster, 0, -1.02, 0, false).receiveShadow = true;
[-1.6, 0.4].forEach((x) => { add(new T.BoxGeometry(1.4, 0.25, 2.8), cushion, x, -0.22, 0.1); });
break;
}
case 'firebowl':
add(new T.CylinderGeometry(0.75, 0.9, 1.4, 20), stone, 0, 0.7, 0);
add(new T.CylinderGeometry(1.1, 0.7, 0.55, 28), this.std('copper', 0x8c5a36, 0.45, { metalness: 0.5 }), 0, 1.68, 0);
fire(0, 1.8, 0, 0.9);
break;
case 'fountain':
add(new T.CylinderGeometry(1.0, 1.1, 0.6, 28), stone, 0, 0.3, 0);
{ const wa = add(new T.CircleGeometry(0.8, 28), this.waterMat(wc[0], wc[1]), 0, 0.62, 0, false); wa.rotation.x = -Math.PI / 2; }
add(new T.CylinderGeometry(0.06, 0.12, 1.4, 8), this.mat('jet', () => new T.MeshBasicMaterial({ color: 0xdff9ff, transparent: true, opacity: 0.7 })), 0, 1.3, 0, false);
break;
case 'sheer':
add(new T.BoxGeometry(W, 1.5, 0.6), stone, 0, 0.75, -D / 2 + 0.3);
add(new T.BoxGeometry(W + 0.2, 0.12, 0.8), copeMat, 0, 1.56, -D / 2 + 0.3);
add(new T.PlaneGeometry(W * 0.8, 1.5), this.mat('sheet', () => new T.MeshBasicMaterial({ color: 0xe8fbff, transparent: true, opacity: 0.55, side: T.DoubleSide })), 0, 0.4, -D / 2 + 0.66, false).rotation.x = 0.2;
break;
case 'pergola': {
const H = 5.2;
[[-W / 2 + 0.3, -D / 2 + 0.6], [W / 2 - 0.3, -D / 2 + 0.6], [-W / 2 + 0.3, D / 2 - 0.6], [W / 2 - 0.3, D / 2 - 0.6]].forEach(([x, z]) => add(new T.BoxGeometry(0.45, H, 0.45), woodDark, x, H / 2, z));
[-D / 2 + 0.6, D / 2 - 0.6].forEach((z) => add(new T.BoxGeometry(W, 0.5, 0.35), wood, 0, H - 0.1, z));
for (let k = 0; k < 15; k++) add(new T.BoxGeometry(0.25, 0.3, D), wood, -W / 2 + 0.4 + k * (W - 0.8) / 14, H + 0.3, 0);
add(new T.BoxGeometry(W * 0.62, 0.7, 1.4), cushion, 0, 0.45, -D / 4);
add(new T.BoxGeometry(2.2, 0.5, 1.2), woodDark, 0, 0.25, D / 6);
const bulbs = this.mat('bulb', () => new T.MeshBasicMaterial({ color: 0xffd68a }));
for (let k = 0; k < 8; k++) { add(new T.SphereGeometry(0.1, 8, 6), bulbs, -W / 2 + 0.6 + k * (W - 1.2) / 7, H - 0.55, -D / 2 + 0.6, false); add(new T.SphereGeometry(0.1, 8, 6), bulbs, -W / 2 + 0.6 + k * (W - 1.2) / 7, H - 0.55, D / 2 - 0.6, false); }
const l = new T.PointLight(0xffc98a, 0, 12, 2); l.position.set(0, H - 0.8, 0); l.userData.base = 10; g.add(l); r.glowLights.push(l);
break;
}
case 'bench':
add(new T.BoxGeometry(W, 0.18, D), wood, 0, 0.85, 0);
[-W / 2 + 0.4, W / 2 - 0.4].forEach((x) => add(new T.BoxGeometry(0.3, 0.8, D - 0.2), woodDark, x, 0.4, 0));
break;
case 'loungers':
[-0.95, 0.95].forEach((x) => {
add(new T.BoxGeometry(1.4, 0.35, 2.4), cushion, x, 0.45, 0.35);
const back = add(new T.BoxGeometry(1.4, 0.3, 1.1), cushion, x, 0.8, -1.1); back.rotation.x = -0.6;
add(new T.BoxGeometry(1.5, 0.12, 3.1), metal, x, 0.22, 0);
});
break;
case 'umbrella': {
add(new T.CylinderGeometry(0.06, 0.06, 4.2, 10), this.std('pole', 0x8a6a4a, 0.6), 0, 2.1, 0);
add(new T.ConeGeometry(W / 2 + 0.2, 0.9, 8), this.std('canvas', 0xf1e7d6, 0.95, { side: T.DoubleSide }), 0, 4.1, 0);
add(new T.CylinderGeometry(0.5, 0.6, 0.2, 16), metal, 0, 0.1, 0);
break;
}
case 'firepit': {
add(new T.CylinderGeometry(1.35, 1.45, 0.6, 32), stone, 0, 0.3, 0);
add(new T.CylinderGeometry(0.95, 0.95, 0.62, 32), this.std('ash', 0x2b231c, 1), 0, 0.31, 0);
fire(0, 0.55, 0, 1.1);
const chair = this.std('teak', 0xc29a6a, 0.8);
for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; const cg = new T.Group(); cg.position.set(Math.sin(a) * 2.6, 0, Math.cos(a) * 2.6); cg.rotation.y = a + Math.PI; const s1 = new T.Mesh(new T.BoxGeometry(1.4, 0.2, 1.3), chair); s1.position.y = 0.55; const s2 = new T.Mesh(new T.BoxGeometry(1.4, 1.2, 0.2), chair); s2.position.set(0, 1.0, 0.65); s2.rotation.x = -0.35; [s1, s2].forEach((m) => { m.castShadow = true; cg.add(m); }); g.add(cg); }
break;
}
case 'kitchen': {
const top = this.std('granite', 0x5f5a55, 0.35);
add(new T.BoxGeometry(W, 1.8, 1.7), stone, 0, 0.9, -D / 2 + 0.85);
add(new T.BoxGeometry(1.7, 1.8, D), stone, W / 2 - 0.85, 0.9, 0);
add(new T.BoxGeometry(W + 0.2, 0.12, 1.9), top, 0, 1.86, -D / 2 + 0.85);
add(new T.BoxGeometry(1.9, 0.12, D + 0.2), top, W / 2 - 0.85, 1.86, 0);
add(new T.BoxGeometry(2.6, 0.35, 1.2), metal, -0.8, 2.05, -D / 2 + 0.85);
const l = new T.PointLight(0xffc98a, 0, 7, 2); l.position.set(0, 1.4, 0); l.userData.base = 5; g.add(l); r.glowLights.push(l);
break;
}
case 'palm': {
const pts = [];
for (let k = 0; k <= 8; k++) pts.push(new T.Vector3(Math.sin(k * 0.25) * 0.5, k * 0.95, 0));
add(new T.TubeGeometry(new T.CatmullRomCurve3(pts), 24, 0.28, 10, false), this.std('trunk', 0x7a5a3a, 0.95), 0, 0, 0);
for (let k = 0; k < 11; k++) {
const f = new T.Mesh(new T.SphereGeometry(1, 12, 8), k % 2 ? leaf : leaf2);
f.scale.set(0.45, 0.08, 2.4);
const a = k / 11 * Math.PI * 2;
f.position.set(0.5 + Math.sin(a) * 1.8, 7.3 - 0.4, Math.cos(a) * 1.8);
f.rotation.set(0.35 * Math.cos(a), a, -0.35 * Math.sin(a));
f.rotation.order = 'YXZ'; f.rotation.y = a; f.rotation.x = 0.4;
f.castShadow = true; g.add(f);
}
break;
}
case 'shrub': {
const rn = this.rand(it.id * 7 + 3);
for (let k = 0; k < 5; k++) { const s = 0.6 + rn() * 0.6; add(new T.IcosahedronGeometry(s, 1), k % 2 ? leaf : leaf2, (rn() - 0.5) * 1.2, s * 0.8, (rn() - 0.5) * 1.2); }
break;
}
case 'dining': {
add(new T.CylinderGeometry(1.25, 1.25, 0.1, 32), wood, 0, 1.3, 0);
add(new T.CylinderGeometry(0.1, 0.25, 1.3, 10), metal, 0, 0.65, 0);
for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; add(new T.BoxGeometry(1, 0.15, 1), cushion, Math.sin(a) * 2, 0.75, Math.cos(a) * 2); add(new T.BoxGeometry(1, 1, 0.12), cushion, Math.sin(a) * 2.5, 1.2, Math.cos(a) * 2.5).rotation.y = a; }
break;
}
default: return null;
}
return g;
}
applyLight3d() {
const r = this.r3;
if (!r) return;
const T = r.T;
const L = this.state.light;
const cfg = {
day: { sun: [-22, 36, -14], sunC: 0xfff2dc, sunI: 2.7, hs: 0xcfe8ff, hg: 0x6b8c53, hi: 0.9, sky: ['#6FA9DE', '#CFE6F5', '#EEF6FA'], fog: 0xdcecf5, glow: 0, pool: 0, fire: 0.35, lights: 0, win: 0, exp: 1.05 },
dusk: { sun: [-40, 9, -12], sunC: 0xff9656, sunI: 1.9, hs: 0xf6b28a, hg: 0x4a3f55, hi: 0.55, sky: ['#2E2350', '#B8607A', '#F4A266'], fog: 0xd9967a, glow: 0.08, pool: 20, fire: 0.8, lights: 0.6, win: 0.6, exp: 1.1 },
night: { sun: [24, 30, 16], sunC: 0x8fa9ff, sunI: 0.22, hs: 0x1b2a4a, hg: 0x0b0f18, hi: 0.28, sky: ['#02060F', '#0A1830', '#162B48'], fog: 0x0a1426, glow: 0.22, pool: 45, fire: 1.3, lights: 1, win: 1.2, exp: 1.2 }
}[L] || null;
if (!cfg) return;
r.sun.position.set(cfg.sun[0], cfg.sun[1], cfg.sun[2]);
r.sun.color.set(cfg.sunC); r.sun.intensity = cfg.sunI;
r.hemi.color.set(cfg.hs); r.hemi.groundColor.set(cfg.hg); r.hemi.intensity = cfg.hi;
r.renderer.toneMappingExposure = cfg.exp;
if (r.tex.sky) r.tex.sky.dispose();
r.tex.sky = this.canvasTex(512, (g, S) => { const gr = g.createLinearGradient(0, 0, 0, S); gr.addColorStop(0, cfg.sky[0]); gr.addColorStop(0.6, cfg.sky[1]); gr.addColorStop(1, cfg.sky[2]); g.fillStyle = gr; g.fillRect(0, 0, S, S); }, 0, null);
r.tex.sky.wrapS = r.tex.sky.wrapT = T.ClampToEdgeWrapping; r.tex.sky.repeat.set(1, 1);
r.scene.background = r.tex.sky;
r.scene.fog = new T.Fog(cfg.fog, 70, 170);
const sunDir = new T.Vector3(cfg.sun[0], cfg.sun[1], cfg.sun[2]).normalize();
r.waters.forEach((m) => { m.uniforms.uSunDir.value.copy(sunDir); m.uniforms.uSunCol.value.set(cfg.sunC); m.uniforms.uSky.value.set(cfg.sky[2]); m.uniforms.uGlow.value = cfg.glow; });
r.poolLights.forEach((l) => { l.intensity = cfg.pool; });
r.fireLights.forEach((l) => { l.userData.base = 6 * cfg.fire + 1; l.intensity = l.userData.base; });
r.glowLights.forEach((l) => { l.intensity = (l.userData.base || 6) * cfg.lights; });
r.windows.forEach((m) => { m.emissiveIntensity = cfg.win; });
if (r.mats.floor) r.mats.floor.emissiveIntensity = L === 'night' ? 0.25 : 0.55;
}
placeCamera3d(extra) {
const r = this.r3;
if (!r) return;
const st = this.state;
const az = (st.spin + (extra || 0)) * Math.PI / 180, el = Math.max(12, Math.min(80, st.tilt - 20)) * Math.PI / 180;
const d = st.zoom || 46;
r.camera.position.set(Math.sin(az) * Math.cos(el) * d, Math.sin(el) * d, Math.cos(az) * Math.cos(el) * d);
r.camera.lookAt(0, 0, 1.5);
}
componentDidMount() {
if (this.state.view === '3d') this.start3d();
}
componentDidUpdate(pp, ps) {
const st = this.state;
if (st.view !== '3d') { if (this.r3) this.stop3d(); return; }
if (!this.r3) { this.start3d(); return; }
if (st.pts !== ps.pts || st.smooth !== ps.smooth || st.items !== ps.items || st.deck !== ps.deck || st.water !== ps.water || st.coping !== ps.coping) this.build3d();
else if (st.light !== ps.light) this.applyLight3d();
if (st.spin !== ps.spin || st.tilt !== ps.tilt || st.zoom !== ps.zoom) this.placeCamera3d();
}
componentWillUnmount() {
this.stop3d();
}

outline(pts, smooth) {
const out = [];
const n = pts.length;
if (n < 3) return out;
for (let i = 0; i < n; i++) {
const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
if (smooth) {
const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
for (let k = 0; k < 14; k++) {
const t = k / 14, u = 1 - t;
out.push([u * u * u * p1[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * p2[0], u * u * u * p1[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * p2[1]]);
}
} else {
const steps = Math.max(4, Math.round(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 10));
for (let k = 0; k < steps; k++) out.push([p1[0] + (p2[0] - p1[0]) * k / steps, p1[1] + (p2[1] - p1[1]) * k / steps]);
}
}
return out;
}
inside(q, poly) {
let c = false;
for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
const a = poly[i], b = poly[j];
if (((a[1] > q[1]) !== (b[1] > q[1])) && (q[0] < (b[0] - a[0]) * (q[1] - a[1]) / (b[1] - a[1]) + a[0])) c = !c;
}
return c;
}
wall(q, poly) {
let bi = 0, bd = Infinity;
for (let i = 0; i < poly.length; i++) { const d = Math.hypot(poly[i][0] - q[0], poly[i][1] - q[1]); if (d < bd) { bd = d; bi = i; } }
const a = poly[(bi - 2 + poly.length) % poly.length], b = poly[(bi + 2) % poly.length];
let tx = b[0] - a[0], ty = b[1] - a[1];
const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
let nx = -ty, ny = tx;
const pt = poly[bi];
if (!this.inside([pt[0] + nx * 6, pt[1] + ny * 6], poly)) { nx = -nx; ny = -ny; }
return { x: pt[0], y: pt[1], nx, ny, dist: bd, isIn: this.inside(q, poly) };
}
conform(it, q, poly, force) {
const c = this.catalog[it.type];
if (!c.snap || poly.length < 3) return { ...it, x: q[0], y: q[1], snap: false };
const w = this.wall(q, poly);
const near = c.snap === 'in' ? (w.isIn || w.dist < 50) : w.dist < 70;
if (!near && !force && c.snap !== 'in') return { ...it, x: q[0], y: q[1], snap: false };
const sc = it.s || 1;
const off = c.snap === 'in' ? (c.h * sc) / 2 + 2 : c.snap === 'edge' ? 5 : -((c.h * sc) / 2 - 12);
const r = Math.round(Math.atan2(-w.nx, w.ny) * 180 / Math.PI);
return { ...it, x: w.x + w.nx * off, y: w.y + w.ny * off, r, snap: true, wx: w.x, wy: w.y };
}
conformAll(items, pts, smooth) {
const poly = this.outline(pts, smooth);
return items.map((it) => (it.snap ? this.conform(it, [it.wx, it.wy], poly, true) : it));
}
sortItems(list) {
const rank = { pergola: 3, umbrella: 3, palm: 3, shrub: 2 };
return list.slice().sort((a, b) => ((rank[a.type] || 1) - (rank[b.type] || 1)) || (a.id - b.id));
}
mapItem(it, is3d, L, cope, tile) {
const c = this.catalog[it.type];
const is = {};
is[it.type] = true;
const st = this.state;
const poles = is3d ? (this.poleDefs[it.type] || []).map((p) => ({ x: p[0], y: p[1], c: p[2], c2: p[2], w: p[3], ml: -p[3] / 2, w2: Math.min(p[3], 12), ml2: -Math.min(p[3], 12) / 2, h: c.z })) : [];
return {
x: Math.round(it.x), y: Math.round(it.y), r: it.r, s: it.s || 1, w: c.w, h: c.h, ml: -c.w / 2, mt: -c.h / 2, is,
cope: cope.base, tileA: tile.b,
rad: c.rad,
z: is3d ? c.z : 0,
poles,
shadow3d: is3d && !c.flat ? 1 : 0,
flt: is3d || c.flat ? 'none' : 'drop-shadow(5px 8px 5px rgba(0,0,0,' + (L === 'day' ? 0.35 : 0.2) + '))',
selected: it.id === st.sel && !is3d,
selColor: it.snap ? '#E8A04C' : '#FFFFFF',
t3d: is3d ? 'preserve-3d' : 'flat',
grab: (e) => {
e.stopPropagation();
this.stage = e.currentTarget.closest('[data-stage]');
const p = this.pt(e);
this.drag = { kind: 'item', id: it.id, dx: p.x - it.x, dy: p.y - it.y };
try { this.stage.setPointerCapture(e.pointerId); } catch (err) {}
if (this.state.sel !== it.id) this.setState({ sel: it.id });
}
};
}
renderVals() {
const st = this.state;
const is3d = st.view === '3d';
const decks = {
travertine: { label: 'Travertine', a: '#EADFCB', b: '#E2D3BA', c: '#F0E7D8', g: '#D3C4AA' },
flagstone: { label: 'Flagstone', a: '#C9B08E', b: '#B79B77', c: '#D3BD9D', g: '#9C8264' },
concrete: { label: 'Cool deck', a: '#D7D4CE', b: '#CECAC3', c: '#DEDBD5', g: '#BAB5AD' }
};
const waters = {
tahoe: { label: 'Tahoe', a: '#72D9E7', b: '#1FA0C2', c: '#0A5B82', tint: '#1FA0C2', blend: 'soft-light', op: 0.3 },
caribbean: { label: 'Caribbean', a: '#A2EBDF', b: '#39C0BE', c: '#0D808F', tint: '#3CC8C0', blend: 'color', op: 0.45 },
midnight: { label: 'Midnight', a: '#5AA3C8', b: '#1E5C8A', c: '#0A2C4C', tint: '#0A2C4C', blend: 'multiply', op: 0.55 }
};
const copings = {
travertine: { label: 'Travertine', base: '#F1EADF', joint: 'rgba(0,0,0,0.13)', gap: 16, lid: '#E6DDCD' },
flagstone: { label: 'Flagstone', base: '#C4A882', joint: 'rgba(60,40,20,0.3)', gap: 22, lid: '#B79B77' },
concrete: { label: 'Cantilever', base: '#DCD9D3', joint: 'rgba(0,0,0,0.08)', gap: 48, lid: '#CFCBC4' }
};
const lights = [['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night']];
const L = st.light;
const glowK = L === 'night' ? 1 : L === 'dusk' ? 0.6 : 0;
const pts = st.pts;
const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
const poolD = pts.length >= 3 ? (st.smooth ? this.catmull(pts) : this.rounded(pts, 22)) : '';
const drawing = st.mode === 'draw';
const cat = this.catalog;
const cope = copings[st.coping];
const tile = { b: '#5A8FAE' };
const counts = {};
st.items.forEach((it) => { counts[it.type] = (counts[it.type] || 0) + 1; });
const itemWords = Object.keys(counts).map((k) => (counts[k] > 1 ? counts[k] + '× ' : '') + cat[k].label.toLowerCase());
const shapeLabel = st.shape === 'custom' ? 'Custom' : this.presets[st.shape].label;
const sel = st.items.find((it) => it.id === st.sel);
const glows = [];
st.items.forEach((it) => {
const fire = 'radial-gradient(circle, rgba(255,170,70,0.85) 0%, rgba(255,120,40,0.35) 35%, rgba(255,120,40,0) 70%)';
const aqua = 'radial-gradient(circle, rgba(140,240,255,0.8) 0%, rgba(60,200,230,0.3) 40%, rgba(60,200,230,0) 70%)';
const warm = 'radial-gradient(circle, rgba(255,214,140,0.8) 0%, rgba(255,200,120,0.25) 40%, rgba(255,200,120,0) 70%)';
const push = (bg, size, op, dx, dy) => glows.push({ x: it.x + (dx || 0), y: it.y + (dy || 0), size: size * (it.s || 1), half: -size * (it.s || 1) / 2, bg, op });
const fireK = L === 'day' ? 0.25 : glowK;
if (it.type === 'firebowl') push(fire, 130, fireK);
if (it.type === 'firepit') push(fire, 220, fireK);
if (it.type === 'spa' || it.type === 'spaSq' || it.type === 'spaRect') push(aqua, 170, glowK);
if (it.type === 'fountain') push(aqua, 100, glowK);
if (it.type === 'kitchen') push(warm, 200, glowK * 0.8);
if (it.type === 'pergola') { push(warm, 160, glowK, -50, 0); push(warm, 160, glowK, 50, 0); }
if (it.type === 'umbrella') push(warm, 90, glowK * 0.6);
});
const opt = (key, table, extra) => Object.keys(table).map((k) => Object.assign({
label: table[k].label, aria: table[k].label + ' ' + key, on: k === st[key] ? 'true' : 'false',
ring: k === st[key] ? '#E8A04C' : 'transparent',
pick: () => this.setState({ [key]: k })
}, extra(table[k])));
return {
deck: decks[st.deck], water: waters[st.water], cope,
t3d: is3d ? 'preserve-3d' : 'flat',
knockOp: st.deck === 'concrete' ? 0.55 : 0,
deckFill: st.deck === 'concrete' ? 'yd-conc' : st.deck === 'flagstone' ? 'yd-flag' : 'yd-trav',
deckFilter: st.deck === 'concrete' ? 'none' : 'url(#yd-rough)',
deckGrain: st.deck === 'concrete' ? 0.4 : 0.55,
poolD,
poolOp: drawing ? 0.35 : 1,
glint: { cx: Math.round(minX + (maxX - minX) * 0.3), cy: Math.round(minY + (maxY - minY) * 0.28), rx: Math.round((maxX - minX) * 0.22), ry: Math.round((maxY - minY) * 0.12) },
drain: { x1: Math.round(cx - 20), x2: Math.round(cx + 6), y: Math.round(cy + 8) },
skim: { x: Math.round(cx + 40), y: Math.round(minY - 16) },
poolGlow: L === 'night' ? 0.6 : L === 'dusk' ? 0.22 : 0,
ledOp: L === 'night' ? 1 : L === 'dusk' ? 0.55 : 0,
overlayBg: L === 'night' ? 'rgba(4,12,26,0.7)' : L === 'dusk' ? 'linear-gradient(160deg, rgba(255,160,80,0.26), rgba(70,30,90,0.34))' : 'rgba(0,0,0,0)',
skyBg: is3d ? (L === 'night' ? 'linear-gradient(180deg, #030814 0%, #0B1B2B 70%)' : L === 'dusk' ? 'linear-gradient(180deg, #3B2A55 0%, #E58A5A 60%, #F2C08A 100%)' : 'linear-gradient(180deg, #8EC9E8 0%, #D9EEF7 70%)') : '#6B8C53',
canvasRef: (el) => { if (el) this.canvasEl = el; },
show3dCanvas: is3d ? 'block' : 'none',
flatDisplay: is3d ? 'none' : 'block',
zoomIn: () => this.setState({ zoom: Math.max(22, (this.state.zoom || 46) - 6) }),
zoomOut: () => this.setState({ zoom: Math.min(80, (this.state.zoom || 46) + 6) }),
tiltT: is3d ? 'translateY(60px) scale(0.72) rotateX(' + st.tilt + 'deg)' : 'none',
autoAnim: is3d && st.auto ? 'yd-turn 40s linear infinite' : 'none',
spin: is3d ? st.spin : 0,
spinTr: this.drag && this.drag.kind === 'orbit' ? 'none' : 'transform 1.1s cubic-bezier(.5,0,.2,1)',
show3d: is3d ? 'block' : 'none',
fence2d: is3d ? 0 : 1,
lightX: (lights.findIndex((l) => l[0] === L) * 100) + '%',
lightPill: L === 'night' ? '#5CC8D9' : '#E8A04C',
lightBtns: lights.map(([id, label]) => ({ label, on: id === L ? 'true' : 'false', fg: id === L ? '#0B1B2B' : '#F6F3EE', pick: () => this.setState({ light: id }) })),
finishRows: [
{ label: 'Deck', opts: opt('deck', decks, (d) => ({ bg: d.a, ink: '#3B3025' })) },
{ label: 'Water', opts: opt('water', waters, (w) => ({ bg: w.b, ink: '#FFFFFF' })) },
{ label: 'Coping', opts: opt('coping', copings, (c) => ({ bg: c.base, ink: '#3B3025' })) }
],
shapeBtns: Object.keys(this.presets).map((k) => {
const on = k === st.shape && !drawing;
return { label: this.presets[k].label, icon: this.presets[k].icon, dash: 'none', on: on ? 'true' : 'false', bg: on ? 'rgba(232,160,76,0.16)' : 'rgba(246,243,238,0.05)', border: on ? '#E8A04C' : 'rgba(246,243,238,0.12)', iconFill: on ? 'rgba(92,200,217,0.5)' : 'rgba(92,200,217,0.2)', pick: () => { const np = this.presets[k].pts.map((p) => p.slice()); this.setState({ shape: k, pts: np, smooth: this.presets[k].smooth, mode: 'move', draft: [], items: this.conformAll(this.state.items, np, this.presets[k].smooth) }); } };
}).concat([{ label: 'Sketch it', icon: 'M3 15c3-9 8-12 12-8s7 1 9-2 9 1 7 7-10 8-15 6-11 2-13-3z', dash: '3 2', on: drawing ? 'true' : 'false', bg: drawing ? 'rgba(232,160,76,0.16)' : 'rgba(246,243,238,0.05)', border: drawing ? '#E8A04C' : 'rgba(246,243,238,0.12)', iconFill: 'none', pick: () => this.setState({ mode: 'draw', draft: [], sel: null, view: 'top', auto: false }) }]),
editOn: st.mode === 'edit' ? 'true' : 'false',
editBg: st.mode === 'edit' ? 'rgba(92,200,217,0.18)' : 'transparent',
editBorder: st.mode === 'edit' ? '#5CC8D9' : 'rgba(246,243,238,0.2)',
toggleEdit: () => this.setState({ mode: st.mode === 'edit' ? 'move' : 'edit', sel: null, draft: [], view: 'top', auto: false }),
curvedOn: st.smooth ? 'true' : 'false', straightOn: st.smooth ? 'false' : 'true',
curvedBg: st.smooth ? '#F6F3EE' : 'transparent', curvedFg: st.smooth ? '#0B1B2B' : '#F6F3EE',
straightBg: st.smooth ? 'transparent' : '#F6F3EE', straightFg: st.smooth ? '#F6F3EE' : '#0B1B2B',
setCurved: () => this.setState({ smooth: true, items: this.conformAll(this.state.items, this.state.pts, true) }),
setStraight: () => this.setState({ smooth: false, items: this.conformAll(this.state.items, this.state.pts, false) }),
topOn: is3d ? 'false' : 'true', d3On: is3d ? 'true' : 'false',
topBg: is3d ? 'transparent' : '#F6F3EE', topFg: is3d ? '#F6F3EE' : '#0B1B2B',
d3Bg: is3d ? '#E8A04C' : 'transparent', d3Fg: is3d ? '#0B1B2B' : '#F6F3EE',
setTop: () => this.setState({ view: 'top', auto: false }),
set3d: () => this.setState({ view: '3d', sel: null, mode: 'move', draft: [] }),
show3dTools: is3d,
showEditTools: !is3d && !drawing,
autoOn: st.auto ? 'true' : 'false',
autoBg: st.auto ? 'rgba(92,200,217,0.25)' : 'transparent',
toggleAuto: () => { const a = this.autoA || 0; this.autoA = 0; this.setState({ auto: !st.auto, spin: Math.round(st.spin + a) }); },
resetView: () => { this.autoA = 0; this.setState({ spin: 162, tilt: 56, zoom: 46, auto: false }); },
hint: is3d ? 'Live 3D render · drag to orbit · switch to Top view to edit' : drawing ? 'Press and drag to sketch your pool outline. Let go to close it' : st.mode === 'edit' ? 'Drag the handles to reshape your pool · snapped items follow the wall' : 'Drag to move · steps, ledges, spas and waterfalls snap to the pool wall',
barBg: is3d ? 'rgba(232,160,76,0.16)' : drawing ? 'rgba(232,160,76,0.22)' : st.mode === 'edit' ? 'rgba(92,200,217,0.18)' : 'rgba(246,243,238,0.06)',
drawing,
cantFinish: st.draft.length < 3,
finishOp: st.draft.length < 3 ? 0.45 : 1,
finishDraw: () => { if (this.state.draft.length >= 3) this.setState({ pts: this.state.draft, shape: 'custom', mode: 'move', draft: [] }); },
cancelDraw: () => { this.sketch = null; this.drag = null; this.setState({ mode: 'move', draft: [] }); },
clearItems: () => this.setState({ items: [], sel: null }),
reset: () => { const s0 = this.initial(); s0.items = this.conformAll(s0.items, s0.pts, s0.smooth); this.setState(s0); },
stageCursor: is3d ? 'grab' : drawing ? 'crosshair' : 'default',
sketching: drawing,
itemsPE: drawing || is3d ? 'none' : 'auto',
draftD: st.draft.length > 1 ? 'M' + st.draft.map((p) => Math.round(p[0]) + ' ' + Math.round(p[1])).join(' L') : '',
draftDots: st.draft.length ? [{ x: st.draft[0][0], y: st.draft[0][1], size: 16, half: -8, bg: '#E8A04C' }] : [],
handles: st.mode === 'edit' && !is3d ? pts.map((p, i) => ({ x: Math.round(p[0]), y: Math.round(p[1]), grab: (e) => {
e.stopPropagation();
this.stage = e.currentTarget.closest('[data-stage]');
this.drag = { kind: 'vertex', i };
try { this.stage.setPointerCapture(e.pointerId); } catch (err) {}
} })) : [],
items: this.sortItems(st.items.filter((it) => !cat[it.type].flat)).map((it) => this.mapItem(it, is3d, L, cope, tile)),
poolItems: st.items.filter((it) => cat[it.type].flat).map((it) => this.mapItem(it, is3d, L, cope, tile)),
glows,
hasSel: !!sel && !drawing && !is3d,
selX: sel ? Math.round(sel.x) : 0,
selTop: sel ? Math.max(48, Math.round(sel.y - Math.max(cat[sel.type].w, cat[sel.type].h) * (sel.s || 1) / 2 - 14)) : 0,
stop: (e) => e.stopPropagation(),
rotateSel: () => this.patchSel((it) => ({ ...it, r: it.r + 45 })),
growSel: () => this.patchSel((it) => ({ ...it, s: Math.min(1.8, Math.round(((it.s || 1) + 0.15) * 100) / 100) })),
shrinkSel: () => this.patchSel((it) => ({ ...it, s: Math.max(0.55, Math.round(((it.s || 1) - 0.15) * 100) / 100) })),
copySel: () => {
const s = this.state.items.find((it) => it.id === this.state.sel);
if (!s) return;
const id = ++this.nextId;
this.setState({ items: this.state.items.concat([{ ...s, id, x: Math.min(880, s.x + 30), y: Math.min(620, s.y + 30) }]), sel: id });
},
deleteSel: () => this.setState({ items: this.state.items.filter((it) => it.id !== this.state.sel), sel: null }),
palette: Object.keys(cat).map((k) => ({ label: cat[k].label, icon: cat[k].icon, add: () => this.add(k) })),
stageDown: (e) => {
this.stage = e.currentTarget;
if (this.state.view === '3d') {
this.drag = { kind: 'orbit', x: e.clientX, y: e.clientY, spin: this.state.spin, tilt: this.state.tilt };
try { this.stage.setPointerCapture(e.pointerId); } catch (err) {}
if (this.state.auto) this.setState({ auto: false });
return;
}
const p = this.pt(e);
if (this.state.mode === 'draw') {
this.drag = { kind: 'sketch' };
this.sketch = [[p.x, p.y]];
try { this.stage.setPointerCapture(e.pointerId); } catch (err) {}
this.setState({ draft: this.sketch.slice() });
} else if (this.state.sel !== null) {
this.setState({ sel: null });
}
},
stageMove: (e) => {
if (!this.drag || !this.stage) return;
const dr = this.drag;
if (dr.kind === 'orbit') {
this.queue({ spin: Math.round(dr.spin + (e.clientX - dr.x) * 0.35), tilt: Math.max(20, Math.min(72, Math.round(dr.tilt - (e.clientY - dr.y) * 0.2))) });
return;
}
const p = this.pt(e);
if (dr.kind === 'sketch') {
const last = this.sketch[this.sketch.length - 1];
if (Math.hypot(p.x - last[0], p.y - last[1]) > 5) { this.sketch.push([p.x, p.y]); this.queue({ draft: this.sketch.slice() }); }
return;
}
if (dr.kind === 'item') {
if (!this.poly) this.poly = this.outline(this.state.pts, this.state.smooth);
this.queue({ items: this.state.items.map((it) => (it.id === dr.id ? this.conform(it, [p.x - dr.dx, p.y - dr.dy], this.poly) : it)) });
} else if (dr.kind === 'vertex') {
const npts = this.state.pts.map((q, i) => (i === dr.i ? [Math.round(p.x), Math.round(p.y)] : q));
this.queue({ pts: npts, shape: 'custom', items: this.conformAll(this.state.items, npts, this.state.smooth) });
}
},
stageUp: (e) => {
if (this.drag && this.stage) { try { this.stage.releasePointerCapture(e.pointerId); } catch (err) {} }
this.poly = null;
const wasOrbit = this.drag && this.drag.kind === 'orbit';
const wasSketch = this.drag && this.drag.kind === 'sketch';
this.drag = null;
if (wasSketch) {
const pts = this.resampleLoop(this.sketch || []);
this.sketch = null;
if (pts.length >= 6) { const np = pts; this.setState({ pts: np, shape: 'custom', smooth: true, mode: 'move', draft: [], items: this.conformAll(this.state.items, np, true) }); }
else this.setState({ draft: [] });
return;
}
if (wasOrbit) this.forceUpdate();
},
summary: shapeLabel + ' pool · ' + cope.label.toLowerCase() + ' coping · ' + decks[st.deck].label.toLowerCase() + ' deck · ' + waters[st.water].label + ' water' + (itemWords.length ? ' · ' + itemWords.join(', ') : '')
};
}

render() {
const v = this.renderVals()
return (
<div style={css(`width: 1280px; height: 900px; display: flex; gap: 24px; font-family: 'Figtree', system-ui, sans-serif; color: #F6F3EE; background: #0B1B2B`)}>

<div style={css(`width: 356px; flex-shrink: 0; box-sizing: border-box; padding: 22px; border-radius: 24px; background: rgba(246,243,238,0.05); border: 1px solid rgba(246,243,238,0.1); display: flex; flex-direction: column; gap: 20px`)}>
<div style={css(`display: flex; flex-direction: column; gap: 10px`)}>
<span style={css(`font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(246,243,238,0.7)`)}>1 · Pool shape</span>
<div style={css(`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px`)}>
{(v.shapeBtns || []).map((s, _i_s) => (<Fragment key={_i_s}>
<button type="button" onClick={s.pick} aria-pressed={s.on} style={css(`height: 66px; border-radius: 14px; border: 1.5px solid ${s.border}; background: ${s.bg}; color: #F6F3EE; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; transition: all .25s`)}>
<svg width="34" height="22" viewBox="0 0 34 22" aria-hidden="true"><path d={s.icon} fill={s.iconFill} stroke="#F6F3EE" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray={s.dash} /></svg>{s.label}</button>
</Fragment>))}
</div>
<div style={css(`display: flex; gap: 8px`)}>
<button type="button" onClick={v.toggleEdit} aria-pressed={v.editOn} style={css(`flex-grow: 1; height: 44px; border-radius: 12px; border: 1.5px solid ${v.editBorder}; background: ${v.editBg}; color: #F6F3EE; font: inherit; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px`)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>Edit points</button>
<div role="group" aria-label="Pool edges" style={css(`display: flex; padding: 3px; border-radius: 12px; background: rgba(246,243,238,0.08)`)}>
<button type="button" onClick={v.setCurved} aria-pressed={v.curvedOn} style={css(`height: 38px; padding: 0 12px; border: none; border-radius: 9px; background: ${v.curvedBg}; color: ${v.curvedFg}; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer`)}>Curved</button>
<button type="button" onClick={v.setStraight} aria-pressed={v.straightOn} style={css(`height: 38px; padding: 0 12px; border: none; border-radius: 9px; background: ${v.straightBg}; color: ${v.straightFg}; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer`)}>Straight</button>
</div>
</div>
</div>

<div style={css(`display: flex; flex-direction: column; gap: 10px`)}>
<span style={css(`font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(246,243,238,0.7)`)}>2 · Finishes</span>
{(v.finishRows || []).map((row, _i_row) => (<Fragment key={_i_row}>
<div style={css(`display: flex; align-items: center; gap: 10px`)}>
<span style={css(`font-size: 14px; font-weight: 600; color: rgba(246,243,238,0.85); width: 58px; flex-shrink: 0`)}>{row.label}</span>
<div style={css(`display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; flex-grow: 1`)}>
{(row.opts || []).map((o, _i_o) => (<Fragment key={_i_o}>
<button type="button" onClick={o.pick} aria-pressed={o.on} aria-label={o.aria} style={css(`height: 42px; border-radius: 11px; border: 2px solid ${o.ring}; background: ${o.bg}; background-size: 12px 12px; cursor: pointer; font: inherit; font-size: 11.5px; font-weight: 700; color: ${o.ink}; padding: 0 4px`)}>{o.label}</button>
</Fragment>))}
</div>
</div>
</Fragment>))}
</div>

<div style={css(`display: flex; flex-direction: column; gap: 10px`)}>
<span style={css(`font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(246,243,238,0.7)`)}>3 · Lighting</span>
<div role="group" aria-label="Time of day" style={css(`position: relative; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: rgba(246,243,238,0.08); border-radius: 999px; padding: 4px`)}>
<span style={css(`position: absolute; top: 4px; bottom: 4px; left: 4px; width: calc((100% - 8px) / 3); border-radius: 999px; background: ${v.lightPill}; transform: translateX(${v.lightX}); transition: transform .5s cubic-bezier(.3,1.3,.5,1), background-color .5s`)}></span>
{(v.lightBtns || []).map((l, _i_l) => (<Fragment key={_i_l}>
<button type="button" onClick={l.pick} aria-pressed={l.on} style={css(`position: relative; z-index: 1; height: 42px; border: none; background: transparent; color: ${l.fg}; font: inherit; font-size: 14px; font-weight: 700; cursor: pointer; transition: color .3s`)}>{l.label}</button>
</Fragment>))}
</div>
</div>

<div style={css(`margin-top: auto; display: flex; flex-direction: column; gap: 14px; padding-top: 16px; border-top: 1px solid rgba(246,243,238,0.14)`)}>
<p style={css(`margin: 0; font-size: 14.5px; line-height: 1.55; color: rgba(246,243,238,0.8)`)}><span style={css(`font-weight: 700; color: #F6F3EE`)}>Your backyard:</span> {v.summary}</p>
<a href={`/contact?service=new-construction&design=${encodeURIComponent(v.summary)}`} style={css(`display: flex; align-items: center; justify-content: center; gap: 10px; height: 54px; border-radius: 999px; background: #E8A04C; color: #0B1B2B; text-decoration: none; font-weight: 700; font-size: 16px`)}>Send this design with my quote<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
</div>
</div>

<div style={css(`width: 900px; display: flex; flex-direction: column; gap: 12px`)}>
<div style={css(`height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 6px 0 16px; border-radius: 14px; background: ${v.barBg}; transition: background-color .3s`)}>
<span style={css(`font-size: 14.5px; font-weight: 600; color: #F6F3EE`)}>{v.hint}</span>
<div style={css(`display: flex; gap: 6px; align-items: center`)}>
{v.drawing && (<>
<button type="button" onClick={v.cancelDraw} style={css(`height: 36px; padding: 0 14px; border: 1px solid rgba(246,243,238,0.35); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 14px; font-weight: 700; cursor: pointer`)}>Cancel</button>
</>)}
{v.show3dTools && (<>
<button type="button" onClick={v.toggleAuto} aria-pressed={v.autoOn} style={css(`height: 36px; padding: 0 12px; border: 1px solid rgba(246,243,238,0.3); border-radius: 10px; background: ${v.autoBg}; color: #F6F3EE; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer`)}>Auto-rotate</button>
<button type="button" onClick={v.zoomOut} aria-label="Zoom out" style={css(`width: 36px; height: 36px; border: 1px solid rgba(246,243,238,0.3); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 18px; font-weight: 800; cursor: pointer`)}>−</button>
<button type="button" onClick={v.zoomIn} aria-label="Zoom in" style={css(`width: 36px; height: 36px; border: 1px solid rgba(246,243,238,0.3); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 18px; font-weight: 800; cursor: pointer`)}>+</button>
<button type="button" onClick={v.resetView} style={css(`height: 36px; padding: 0 12px; border: 1px solid rgba(246,243,238,0.3); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer`)}>Reset view</button>
</>)}
{v.showEditTools && (<>
<button type="button" onClick={v.clearItems} style={css(`height: 36px; padding: 0 12px; border: 1px solid rgba(246,243,238,0.25); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer`)}>Clear items</button>
<button type="button" onClick={v.reset} style={css(`height: 36px; padding: 0 12px; border: 1px solid rgba(246,243,238,0.25); border-radius: 10px; background: transparent; color: #F6F3EE; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer`)}>Reset</button>
</>)}
<div role="group" aria-label="View" style={css(`display: flex; padding: 3px; border-radius: 11px; background: rgba(246,243,238,0.1); margin-left: 4px`)}>
<button type="button" onClick={v.setTop} aria-pressed={v.topOn} style={css(`height: 34px; padding: 0 12px; border: none; border-radius: 8px; background: ${v.topBg}; color: ${v.topFg}; font: inherit; font-size: 13px; font-weight: 800; cursor: pointer`)}>Top view</button>
<button type="button" onClick={v.set3d} aria-pressed={v.d3On} style={css(`height: 34px; padding: 0 12px; border: none; border-radius: 8px; background: ${v.d3Bg}; color: ${v.d3Fg}; font: inherit; font-size: 13px; font-weight: 800; cursor: pointer`)}>3D view</button>
</div>
</div>
</div>

<div data-stage="yard" onPointerDown={v.stageDown} onPointerMove={v.stageMove} onPointerUp={v.stageUp} onPointerCancel={v.stageUp} style={css(`position: relative; width: 900px; height: 640px; flex-shrink: 0; border-radius: 20px; overflow: hidden; touch-action: none; cursor: ${v.stageCursor}; box-shadow: 0 30px 70px rgba(0,0,0,0.45); user-select: none; background: ${v.skyBg}; perspective: 1500px; perspective-origin: 50% 20%; transition: background .6s`)}>
<canvas ref={v.canvasRef} data-yard3d="1" width="900" height="640" aria-label="3D rendering of your backyard design" style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; display: ${v.show3dCanvas}`)}></canvas>
<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; display: ${v.flatDisplay}`)}>
<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; transform-style: ${v.t3d}; animation: ${v.autoAnim}`)}>
<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; transform-style: ${v.t3d}; transform: rotateZ(${v.spin}deg); transition: ${v.spinTr}`)}>

<svg width="900" height="640" viewBox="0 0 900 640" style={css(`position: absolute; top: 0; left: 0; display: block`)} aria-hidden="true">
<defs>
<filter id="yd-grass" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" /><feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.26  0 0 0 0 0.08  0 0 0 0.9 -0.28" /></filter>
<filter id="yd-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="11" /><feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.28  0 0 0 0 0.2  0 0 0 0.5 -0.12" /></filter>
<filter id="yd-caus" x="0" y="0" width="100%" height="100%"><feTurbulence type="turbulence" baseFrequency="0.016 0.024" numOctaves="2" seed="3"><animate attributeName="baseFrequency" dur="14s" values="0.016 0.024;0.02 0.029;0.016 0.024" repeatCount="indefinite" /></feTurbulence><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -2.6 0 0 0 1.02" /></filter>
<filter id="yd-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7" /></filter>
<filter id="yd-blur2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" /></filter>
<pattern id="yd-mow" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)"><rect width="30" height="60" fill="rgba(255,255,255,0.045)" /></pattern>
<pattern id="yd-paver" width="64" height="64" patternUnits="userSpaceOnUse"><rect width="64" height="64" fill={v.deck.g} /><rect x="1" y="1" width="38" height="30" rx="1.5" fill={v.deck.a} /><rect x="41" y="1" width="22" height="30" rx="1.5" fill={v.deck.b} /><rect x="1" y="33" width="22" height="30" rx="1.5" fill={v.deck.c} /><rect x="25" y="33" width="38" height="30" rx="1.5" fill={v.deck.a} /></pattern>
<pattern id="yd-tilep" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#2B5470" /><rect x="0.5" y="0.5" width="3" height="3" fill="#3D6F8E" /><rect x="4.5" y="0.5" width="3" height="3" fill="#5A8FAE" /><rect x="0.5" y="4.5" width="3" height="3" fill="#5A8FAE" /><rect x="4.5" y="4.5" width="3" height="3" fill="#3D6F8E" /></pattern>
<pattern id="yd-wimg" patternUnits="userSpaceOnUse" x="0" y="0" width="900" height="640"><image href="/images/pool16.jpg" x="-760" y="-775" width="1984" height="1488" preserveAspectRatio="none" /></pattern>
<pattern id="yd-conc" width="132" height="132" patternUnits="userSpaceOnUse"><rect width="132" height="132" fill="#D9D5CD" /><path d="M0 0.75H132M0.75 0V132" stroke="rgba(70,60,50,0.28)" strokeWidth="1.5" /><path d="M0 2.2H132M2.2 0V132" stroke="rgba(255,255,255,0.35)" strokeWidth="1" /></pattern>
<filter id="yd-knock" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.085" numOctaves="3" seed="12" /><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.99  0 0 0 0 0.97  0 0 0 2.4 -1.25" /></filter>
<filter id="yd-mottle" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="21" /><feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.42  0 0 0 0 0.38  0 0 0 0.9 -0.35" /></filter>
<pattern id="yd-trav" width="96" height="96" patternUnits="userSpaceOnUse"><rect width="96" height="96" fill="#CDBDA2" /><rect x="1" y="1" width="46" height="46" rx="1" fill="#E8DCC6" /><rect x="49" y="1" width="46" height="22" rx="1" fill="#E1D2B8" /><rect x="49" y="25" width="22" height="22" rx="1" fill="#EEE4D2" /><rect x="73" y="25" width="22" height="22" rx="1" fill="#DCCBAE" /><rect x="1" y="49" width="22" height="46" rx="1" fill="#E4D7BF" /><rect x="25" y="49" width="46" height="46" rx="1" fill="#EADFCB" /><rect x="73" y="49" width="22" height="46" rx="1" fill="#DED0B5" /></pattern>
<pattern id="yd-flag" width="120" height="120" patternUnits="userSpaceOnUse"><rect width="120" height="120" fill="#8E7658" /><polygon points="2,2 46,4 52,34 30,50 3,40" fill="#C9AE88" /><polygon points="50,3 96,2 100,30 56,34" fill="#BFA17A" /><polygon points="99,3 118,2 118,48 102,32" fill="#D1B893" /><polygon points="4,44 30,54 34,86 6,90" fill="#B99B74" /><polygon points="34,52 56,38 100,34 104,70 70,84 38,84" fill="#CDB38D" /><polygon points="104,52 118,52 118,96 106,72" fill="#C4A780" /><polygon points="8,94 36,90 40,118 4,118" fill="#D0B690" /><polygon points="42,88 72,88 100,76 116,100 118,118 44,118" fill="#BFA27B" /></pattern>
<filter id="yd-rough" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="7" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" /></filter>
<filter id="yd-lawn" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="2" result="lo" /><feColorMatrix in="lo" type="matrix" values="0 0 0 0 0.62  0 0 0 0 0.66  0 0 0 0 0.25  0 0 0 1.5 -0.6" result="patch" /><feTurbulence type="fractalNoise" baseFrequency="1.1 0.55" numOctaves="2" seed="9" result="hi" /><feColorMatrix in="hi" type="matrix" values="0 0 0 0 0.08  0 0 0 0 0.2  0 0 0 0 0.04  0 0 0 1.2 -0.38" result="blades" /><feMerge><feMergeNode in="patch" /><feMergeNode in="blades" /></feMerge></filter>
<filter id="yd-spec" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.035" numOctaves="3" seed="4" result="n"><animate attributeName="baseFrequency" dur="16s" values="0.02 0.035;0.025 0.041;0.02 0.035" repeatCount="indefinite" /></feTurbulence><feSpecularLighting in="n" surfaceScale="3" specularConstant="0.9" specularExponent="26" lightingColor="#FFFFFF" result="sp"><feDistantLight azimuth="225" elevation="50" /></feSpecularLighting><feComposite in="sp" in2="SourceAlpha" operator="in" /></filter>
<linearGradient id="yd-water" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0" stopColor={v.water.a} /><stop offset=".5" stopColor={v.water.b} /><stop offset="1" stopColor={v.water.c} /></linearGradient>
<radialGradient id="yd-depth" cx="55%" cy="55%" r="55%"><stop offset="0" stopColor="#022A40" stopOpacity=".28" /><stop offset="1" stopColor="#022A40" stopOpacity="0" /></radialGradient>
<radialGradient id="yd-spa" cx="45%" cy="40%" r="70%"><stop offset="0" stopColor={v.water.a} /><stop offset="1" stopColor={v.water.b} /></radialGradient>
<radialGradient id="yd-flame"><stop offset="0" stopColor="#FFF6CF" /><stop offset=".45" stopColor="#FFB547" /><stop offset="1" stopColor="#E4572E" stopOpacity="0" /></radialGradient>
<radialGradient id="yd-glint" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#FFFFFF" stopOpacity=".45" /><stop offset="1" stopColor="#FFFFFF" stopOpacity="0" /></radialGradient>
<radialGradient id="yd-poolglow" cx="50%" cy="50%" r="60%"><stop offset="0" stopColor="#9BF6FF" stopOpacity=".95" /><stop offset="1" stopColor="#22B8D4" stopOpacity=".3" /></radialGradient>
<linearGradient id="yd-sun" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFF6DC" stopOpacity=".14" /><stop offset=".55" stopColor="#FFF6DC" stopOpacity="0" /><stop offset="1" stopColor="#0B1B2B" stopOpacity=".14" /></linearGradient>
<clipPath id="yd-deckclip"><rect x="130" y="84" width="660" height="480" rx="26" /></clipPath>
<clipPath id="yd-clip"><path d={v.poolD} /></clipPath>
</defs>
<rect width="900" height="640" fill="#5C8243" />
<rect width="900" height="640" fill="#000" filter="url(#yd-lawn)" />
<rect width="900" height="640" fill="url(#yd-mow)" />
<rect x="8" y="8" width="884" height="546" fill="none" stroke="#9A6E47" strokeWidth="5" style={css(`opacity: ${v.fence2d}`)} />
<rect x="8" y="8" width="884" height="546" fill="none" stroke="#6B4A2E" strokeWidth="11" strokeDasharray="11 64" style={css(`opacity: ${v.fence2d}`)} />
<rect x="136" y="92" width="660" height="480" rx="26" fill="rgba(0,0,0,0.18)" filter="url(#yd-blur2)" />
<rect x="130" y="84" width="660" height="480" rx="26" fill={`url(#${v.deckFill})`} filter={v.deckFilter} />
<rect x="130" y="84" width="660" height="480" rx="26" clipPath="url(#yd-deckclip)" filter="url(#yd-grain)" style={css(`opacity: ${v.deckGrain}`)} />
<rect x="130" y="84" width="660" height="480" rx="26" fill="#000" clipPath="url(#yd-deckclip)" filter="url(#yd-mottle)" style={css(`opacity: ${v.knockOp}`)} />
<rect x="130" y="84" width="660" height="480" rx="26" fill="#000" clipPath="url(#yd-deckclip)" filter="url(#yd-knock)" style={css(`opacity: ${v.knockOp}`)} />
<rect x="130" y="84" width="660" height="480" rx="26" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
<rect x="0" y="552" width="900" height="88" fill="#474C54" />
<rect x="0" y="552" width="900" height="6" fill="rgba(0,0,0,0.3)" />

<g style={css(`opacity: ${v.poolOp}; transition: opacity .3s`)}>
<path d={v.poolD} fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="26" strokeLinejoin="round" filter="url(#yd-blur2)" transform="translate(3 5)" />
<path d={v.poolD} fill="url(#yd-wimg)" />
<path d={v.poolD} fill={v.water.tint} style={css(`mix-blend-mode: ${v.water.blend}; opacity: ${v.water.op}`)} />
<path d={v.poolD} fill="url(#yd-depth)" />
<g clipPath="url(#yd-clip)">
<rect x="0" y="0" width="900" height="640" filter="url(#yd-caus)" opacity=".12" />
<rect x="0" y="0" width="900" height="640" fill="#000" filter="url(#yd-spec)" style={css(`opacity: .28; mix-blend-mode: screen`)} />
<rect x={v.drain.x1} y={v.drain.y} width="14" height="14" rx="3" fill="rgba(2,30,48,0.45)" />
<rect x={v.drain.x2} y={v.drain.y} width="14" height="14" rx="3" fill="rgba(2,30,48,0.45)" />
<path d={v.poolD} fill="none" stroke="rgba(2,30,48,0.5)" strokeWidth="40" filter="url(#yd-blur)" />
<path d={v.poolD} fill="none" stroke="url(#yd-tilep)" strokeWidth="34" strokeLinejoin="round" />
<ellipse cx={v.glint.cx} cy={v.glint.cy} rx={v.glint.rx} ry={v.glint.ry} fill="url(#yd-glint)" />
</g>
</g>
<rect width="900" height="640" fill="url(#yd-sun)" />
</svg>

<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; clip-path: path('${v.poolD}'); pointer-events: none; opacity: ${v.poolOp}`)}>
{(v.poolItems || []).map((it, _i_it) => (<Fragment key={_i_it}>
<div onPointerDown={it.grab} style={css(`position: absolute; left: ${it.x}px; top: ${it.y}px; width: ${it.w}px; height: ${it.h}px; margin-left: ${it.ml}px; margin-top: ${it.mt}px; transform: rotate(${it.r}deg) scale(${it.s}); transform-style: ${it.t3d}; transition: transform .35s cubic-bezier(.3,1.3,.5,1); cursor: grab; pointer-events: ${v.itemsPE}`)}>
{it.is.steps && (<><svg width="132" height="66" viewBox="0 0 132 66" style={css(`display: block; overflow: visible`)}><path d="M0 0 A66 66 0 0 0 132 0 Z" fill="rgba(255,255,255,0.14)" /><path d="M20 0 A46 46 0 0 0 112 0 Z" fill="rgba(255,255,255,0.18)" /><path d="M40 0 A26 26 0 0 0 92 0 Z" fill="rgba(255,255,255,0.24)" /><path d="M0 0 A66 66 0 0 0 132 0 M20 0 A46 46 0 0 0 112 0 M40 0 A26 26 0 0 0 92 0" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" /><path d="M0 0 A66 66 0 0 0 132 0" fill="none" stroke="rgba(2,30,48,0.25)" strokeWidth="6" transform="translate(0 4)" /></svg></>)}
{it.is.ledge && (<><svg width="130" height="84" viewBox="0 0 130 84" style={css(`display: block`)}><rect x="1" y="1" width="128" height="82" rx="10" fill="rgba(255,255,255,0.28)" stroke={it.tileA} strokeWidth="3" /><rect x="18" y="16" width="30" height="54" rx="7" fill="#F4EFE6" stroke="#CFC5B5" /><rect x="18" y="16" width="30" height="16" rx="7" fill="#E4DACB" /><rect x="58" y="16" width="30" height="54" rx="7" fill="#F4EFE6" stroke="#CFC5B5" /><rect x="58" y="16" width="30" height="16" rx="7" fill="#E4DACB" /><circle cx="108" cy="42" r="6" fill="#8A6A4A" /></svg></>)}
{it.selected && (<><span style={css(`position: absolute; top: -8px; left: -8px; right: -8px; bottom: -8px; border: 2px dashed ${it.selColor}; border-radius: 12px; pointer-events: none`)}></span></>)}
</div>
</Fragment>))}
</div>

<svg width="900" height="640" viewBox="0 0 900 640" style={css(`position: absolute; top: 0; left: 0; pointer-events: none; opacity: ${v.poolOp}`)} aria-hidden="true">
<path d={v.poolD} fill="none" stroke={v.cope.base} strokeWidth="18" strokeLinejoin="round" />
<path d={v.poolD} fill="none" stroke={v.cope.joint} strokeWidth="18" strokeLinejoin="round" strokeDasharray={`1.5 ${v.cope.gap}`} />
<path d={v.poolD} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinejoin="round" transform="translate(-1 -1)" />
<rect x={v.skim.x} y={v.skim.y} width="20" height="14" rx="3" fill={v.cope.lid} stroke="rgba(0,0,0,0.2)" />
</svg>

<div style={css(`position: absolute; top: 8px; left: 8px; width: 884px; height: 44px; transform-origin: 50% 0; transform: rotateX(90deg); background: repeating-linear-gradient(90deg, #9A6E47 0 22px, #8A6140 22px 24px); box-shadow: inset 0 -4px 0 #6B4A2E; display: ${v.show3d}`)}></div>
<div style={css(`position: absolute; top: 8px; left: 8px; width: 546px; height: 44px; transform-origin: 0 0; transform: rotateZ(90deg) rotateX(90deg); background: repeating-linear-gradient(90deg, #9A6E47 0 22px, #8A6140 22px 24px); box-shadow: inset 0 -4px 0 #6B4A2E; display: ${v.show3d}`)}></div>
<div style={css(`position: absolute; top: 8px; left: 892px; width: 546px; height: 44px; transform-origin: 0 0; transform: rotateZ(90deg) rotateX(90deg); background: repeating-linear-gradient(90deg, #9A6E47 0 22px, #8A6140 22px 24px); box-shadow: inset 0 -4px 0 #6B4A2E; display: ${v.show3d}`)}></div>
<div style={css(`position: absolute; top: 552px; left: 0; width: 900px; height: 110px; transform-origin: 50% 0; transform: rotateX(90deg); background: linear-gradient(180deg, #E4DCCD 0%, #D8CFBE 100%); display: ${v.show3d}`)}><div style={css(`position: absolute; left: 380px; top: 26px; width: 140px; height: 84px; background: #3A4450; border: 6px solid #F4EFE6; box-sizing: border-box`)}></div><div style={css(`position: absolute; left: 120px; top: 30px; width: 110px; height: 56px; background: #9FB8C6; border: 6px solid #F4EFE6; box-sizing: border-box`)}></div><div style={css(`position: absolute; left: 670px; top: 30px; width: 110px; height: 56px; background: #9FB8C6; border: 6px solid #F4EFE6; box-sizing: border-box`)}></div></div>
<div style={css(`position: absolute; top: 552px; left: 0; width: 900px; height: 88px; transform: translateZ(110px); background-color: #474C54; background-image: linear-gradient(0deg, rgba(0,0,0,0.25) 1px, transparent 1px); background-size: 100% 12px; box-shadow: 0 -6px 0 #3A3E45; display: ${v.show3d}`)}></div>

<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; transform-style: ${v.t3d}; pointer-events: none`)}>
{(v.items || []).map((it, _i_it) => (<Fragment key={_i_it}>
<div onPointerDown={it.grab} style={css(`position: absolute; left: ${it.x}px; top: ${it.y}px; width: ${it.w}px; height: ${it.h}px; margin-left: ${it.ml}px; margin-top: ${it.mt}px; transform: rotate(${it.r}deg) scale(${it.s}); transform-style: ${it.t3d}; transition: transform .35s cubic-bezier(.3,1.3,.5,1); cursor: grab; pointer-events: ${v.itemsPE}`)}>
<span style={css(`position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: ${it.rad}; background: rgba(0,0,0,0.3); filter: blur(7px); transform: translate(8px, 10px); opacity: ${it.shadow3d}`)}></span>
{(it.poles || []).map((p, _i_p) => (<Fragment key={_i_p}>
<span style={css(`position: absolute; left: ${p.x}px; top: ${p.y}px; width: ${p.w}px; height: ${p.h}px; margin-left: ${p.ml}px; background: ${p.c}; transform-origin: 50% 0; transform: rotateX(90deg)`)}></span>
<span style={css(`position: absolute; left: ${p.x}px; top: ${p.y}px; width: ${p.w2}px; height: ${p.h}px; margin-left: ${p.ml2}px; background: ${p.c2}; transform-origin: 50% 0; transform: rotateZ(90deg) rotateX(90deg)`)}></span>
</Fragment>))}
<div style={css(`position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: translateZ(${it.z}px); filter: ${it.flt}; transition: transform .8s cubic-bezier(.5,0,.2,1)`)}>
{it.is.spa && (<><svg width="96" height="96" viewBox="0 0 96 96" style={css(`display: block`)}><circle cx="48" cy="48" r="42" fill="url(#yd-spa)" /><circle cx="48" cy="48" r="37.5" fill="none" stroke="url(#yd-tilep)" strokeWidth="7" /><circle cx="48" cy="48" r="24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" /><circle cx="36" cy="40" r="4" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.8s ease-out infinite`)} /><circle cx="58" cy="52" r="3.5" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.6s ease-out .4s infinite`)} /><circle cx="46" cy="62" r="3" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 2s ease-out .8s infinite`)} /><circle cx="62" cy="36" r="3" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.7s ease-out 1.1s infinite`)} /><circle cx="48" cy="48" r="42.5" fill="none" stroke={it.cope} strokeWidth="9" /><circle cx="48" cy="48" r="47" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.5" /></svg></>)}
{it.is.spaSq && (<><svg width="96" height="96" viewBox="0 0 96 96" style={css(`display: block`)}><rect x="5" y="5" width="86" height="86" rx="8" fill="url(#yd-spa)" /><rect x="11" y="11" width="74" height="74" rx="5" fill="none" stroke="url(#yd-tilep)" strokeWidth="7" /><rect x="26" y="26" width="44" height="44" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" /><circle cx="34" cy="38" r="4" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.8s ease-out infinite`)} /><circle cx="60" cy="56" r="3.5" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.6s ease-out .5s infinite`)} /><circle cx="46" cy="64" r="3" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 2s ease-out .9s infinite`)} /><rect x="4.5" y="4.5" width="87" height="87" rx="9" fill="none" stroke={it.cope} strokeWidth="9" /><rect x="0.75" y="0.75" width="94.5" height="94.5" rx="12" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.5" /></svg></>)}
{it.is.spaRect && (<><svg width="136" height="88" viewBox="0 0 136 88" style={css(`display: block`)}><rect x="5" y="5" width="126" height="78" rx="8" fill="url(#yd-spa)" /><rect x="11" y="11" width="114" height="66" rx="5" fill="none" stroke="url(#yd-tilep)" strokeWidth="7" /><rect x="26" y="25" width="84" height="38" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" /><circle cx="36" cy="36" r="4" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.8s ease-out infinite`)} /><circle cx="96" cy="52" r="3.5" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 1.6s ease-out .4s infinite`)} /><circle cx="66" cy="58" r="3" fill="#FFFFFF" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-bub 2s ease-out .8s infinite`)} /><rect x="4.5" y="4.5" width="127" height="79" rx="9" fill="none" stroke={it.cope} strokeWidth="9" /><rect x="0.75" y="0.75" width="134.5" height="86.5" rx="12" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.5" /></svg></>)}
{it.is.steps && (<><svg width="84" height="84" viewBox="0 0 84 84" style={css(`display: block`)}><path d="M0 0 H84 A84 84 0 0 1 0 84 Z" fill="rgba(255,255,255,0.16)" /><path d="M0 0 H60 A60 60 0 0 1 0 60 Z" fill="rgba(255,255,255,0.18)" /><path d="M0 0 H36 A36 36 0 0 1 0 36 Z" fill="rgba(255,255,255,0.22)" /><path d="M84 0 A84 84 0 0 1 0 84 M60 0 A60 60 0 0 1 0 60 M36 0 A36 36 0 0 1 0 36" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" /></svg></>)}
{it.is.ledge && (<><svg width="130" height="84" viewBox="0 0 130 84" style={css(`display: block`)}><rect x="1" y="1" width="128" height="82" rx="10" fill="rgba(255,255,255,0.28)" stroke={it.tileA} strokeWidth="3" /><rect x="18" y="16" width="30" height="54" rx="7" fill="#F4EFE6" stroke="#CFC5B5" /><rect x="18" y="16" width="30" height="16" rx="7" fill="#E4DACB" /><rect x="58" y="16" width="30" height="54" rx="7" fill="#F4EFE6" stroke="#CFC5B5" /><rect x="58" y="16" width="30" height="16" rx="7" fill="#E4DACB" /><circle cx="108" cy="42" r="6" fill="#8A6A4A" /></svg></>)}
{it.is.firebowl && (<><svg width="44" height="44" viewBox="0 0 44 44" style={css(`display: block`)}><circle cx="22" cy="22" r="21" fill="#6B5B4A" /><circle cx="22" cy="22" r="21" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="2" /><circle cx="22" cy="22" r="15" fill="#2B231C" /><circle cx="22" cy="22" r="11" fill="url(#yd-flame)" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-flick .9s ease-in-out infinite`)} /></svg></>)}
{it.is.fountain && (<><svg width="44" height="44" viewBox="0 0 44 44" style={css(`display: block`)}><circle cx="22" cy="22" r="21" fill="#BBA990" /><circle cx="22" cy="22" r="21" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="2" /><circle cx="22" cy="22" r="15" fill="url(#yd-spa)" /><circle cx="22" cy="22" r="6" fill="none" stroke="#FFFFFF" strokeWidth="1.5" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-rip 1.4s ease-out infinite`)} /><circle cx="22" cy="22" r="6" fill="none" stroke="#FFFFFF" strokeWidth="1.5" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-rip 1.4s ease-out .7s infinite`)} /><circle cx="22" cy="22" r="3" fill="#FFFFFF" /></svg></>)}
{it.is.sheer && (<><svg width="72" height="28" viewBox="0 0 72 28" style={css(`display: block`)}><rect x="0" y="0" width="72" height="12" rx="2" fill="#A08A70" /><rect x="0" y="0" width="72" height="4" rx="2" fill="#C4B095" /><line x1="10" y1="12" x2="10" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" style={css(`animation: aa-fall .5s linear infinite`)} /><line x1="22" y1="12" x2="22" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" style={css(`animation: aa-fall .55s linear .1s infinite`)} /><line x1="36" y1="12" x2="36" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" style={css(`animation: aa-fall .5s linear .2s infinite`)} /><line x1="50" y1="12" x2="50" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" style={css(`animation: aa-fall .55s linear .05s infinite`)} /><line x1="62" y1="12" x2="62" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" style={css(`animation: aa-fall .5s linear .15s infinite`)} /></svg></>)}
{it.is.pergola && (<><svg width="190" height="130" viewBox="0 0 190 130" style={css(`display: block`)}><rect x="0" y="8" width="190" height="8" fill="#7A4D2C" /><rect x="0" y="114" width="190" height="8" fill="#7A4D2C" /><g fill="#A06D45"><rect x="6" y="0" width="5" height="130" /><rect x="18" y="0" width="5" height="130" /><rect x="30" y="0" width="5" height="130" /><rect x="42" y="0" width="5" height="130" /><rect x="54" y="0" width="5" height="130" /><rect x="66" y="0" width="5" height="130" /><rect x="78" y="0" width="5" height="130" /><rect x="90" y="0" width="5" height="130" /><rect x="102" y="0" width="5" height="130" /><rect x="114" y="0" width="5" height="130" /><rect x="126" y="0" width="5" height="130" /><rect x="138" y="0" width="5" height="130" /><rect x="150" y="0" width="5" height="130" /><rect x="162" y="0" width="5" height="130" /><rect x="174" y="0" width="5" height="130" /></g><g fill="#5A3A20"><rect x="0" y="6" width="12" height="12" /><rect x="178" y="6" width="12" height="12" /><rect x="0" y="112" width="12" height="12" /><rect x="178" y="112" width="12" height="12" /></g></svg></>)}
{it.is.bench && (<><svg width="84" height="28" viewBox="0 0 84 28" style={css(`display: block`)}><rect x="0" y="0" width="84" height="28" rx="3" fill="#5E4028" /><rect x="3" y="3" width="78" height="6" rx="1" fill="#A97A4C" /><rect x="3" y="11" width="78" height="6" rx="1" fill="#A07047" /><rect x="3" y="19" width="78" height="6" rx="1" fill="#A97A4C" /></svg></>)}
{it.is.loungers && (<><svg width="72" height="64" viewBox="0 0 72 64" style={css(`display: block`)}><rect x="2" y="1" width="30" height="62" rx="7" fill="#F2ECE2" stroke="#BDB3A3" strokeWidth="1.5" /><rect x="2" y="1" width="30" height="18" rx="7" fill="#E2D8C8" /><rect x="2" y="30" width="30" height="9" fill="#2BA3B8" /><rect x="40" y="1" width="30" height="62" rx="7" fill="#F2ECE2" stroke="#BDB3A3" strokeWidth="1.5" /><rect x="40" y="1" width="30" height="18" rx="7" fill="#E2D8C8" /><rect x="40" y="36" width="30" height="9" fill="#E8A04C" /></svg></>)}
{it.is.umbrella && (<><svg width="72" height="72" viewBox="0 0 72 72" style={css(`display: block`)}><polygon points="36,1 60.7,11.3 71,36 60.7,60.7 36,71 11.3,60.7 1,36 11.3,11.3" fill="#F3EBDD" /><polygon points="36,36 36,1 60.7,11.3" fill="#E6D8C1" /><polygon points="36,36 71,36 60.7,60.7" fill="#E6D8C1" /><polygon points="36,36 36,71 11.3,60.7" fill="#E6D8C1" /><polygon points="36,36 1,36 11.3,11.3" fill="#E6D8C1" /><polygon points="36,1 60.7,11.3 71,36 60.7,60.7 36,71 11.3,60.7 1,36 11.3,11.3" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" /><circle cx="36" cy="36" r="4" fill="#8A6A4A" /></svg></>)}
{it.is.firepit && (<><svg width="132" height="132" viewBox="0 0 132 132" style={css(`display: block`)}><g><rect x="50" y="4" width="32" height="30" rx="6" fill="#C9A57A" /><rect x="50" y="4" width="32" height="8" rx="3" fill="#A9855B" /></g><g transform="rotate(90 66 66)"><rect x="50" y="4" width="32" height="30" rx="6" fill="#C9A57A" /><rect x="50" y="4" width="32" height="8" rx="3" fill="#A9855B" /></g><g transform="rotate(180 66 66)"><rect x="50" y="4" width="32" height="30" rx="6" fill="#C9A57A" /><rect x="50" y="4" width="32" height="8" rx="3" fill="#A9855B" /></g><g transform="rotate(270 66 66)"><rect x="50" y="4" width="32" height="30" rx="6" fill="#C9A57A" /><rect x="50" y="4" width="32" height="8" rx="3" fill="#A9855B" /></g><circle cx="66" cy="66" r="26" fill="#7A6A58" /><circle cx="66" cy="66" r="26" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="2" strokeDasharray="6 3" /><circle cx="66" cy="66" r="18" fill="#2B231C" /><circle cx="66" cy="66" r="13" fill="url(#yd-flame)" style={css(`transform-box: fill-box; transform-origin: center; animation: aa-flick 1s ease-in-out infinite`)} /></svg></>)}
{it.is.kitchen && (<><svg width="150" height="72" viewBox="0 0 150 72" style={css(`display: block`)}><rect x="0" y="0" width="150" height="34" rx="3" fill="#D1C8BA" stroke="#A99F90" strokeWidth="1.5" /><rect x="116" y="0" width="34" height="72" rx="3" fill="#D1C8BA" stroke="#A99F90" strokeWidth="1.5" /><rect x="40" y="5" width="54" height="24" rx="3" fill="#3A3F45" /><path d="M46 8v18M52 8v18M58 8v18M64 8v18M70 8v18M76 8v18M82 8v18M88 8v18" stroke="#6B7178" strokeWidth="1.5" /><rect x="122" y="42" width="22" height="18" rx="4" fill="#9FB3BD" /><circle cx="12" cy="17" r="5" fill="#8C8C8C" /><circle cx="26" cy="17" r="5" fill="#8C8C8C" /><circle cx="20" cy="50" r="7" fill="#7A5A3C" /><circle cx="44" cy="50" r="7" fill="#7A5A3C" /><circle cx="68" cy="50" r="7" fill="#7A5A3C" /></svg></>)}
{it.is.palm && (<><svg width="96" height="96" viewBox="0 0 96 96" style={css(`display: block`)}><g fill="#4B7439"><ellipse cx="48" cy="22" rx="8" ry="24" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(45 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(90 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(135 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(180 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(225 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(270 48 48)" /><ellipse cx="48" cy="22" rx="8" ry="24" transform="rotate(315 48 48)" /></g><g fill="#6A9650"><ellipse cx="48" cy="28" rx="6" ry="18" transform="rotate(22 48 48)" /><ellipse cx="48" cy="28" rx="6" ry="18" transform="rotate(112 48 48)" /><ellipse cx="48" cy="28" rx="6" ry="18" transform="rotate(202 48 48)" /><ellipse cx="48" cy="28" rx="6" ry="18" transform="rotate(292 48 48)" /></g><circle cx="48" cy="48" r="7" fill="#6B4E2E" /></svg></>)}
{it.is.shrub && (<><svg width="52" height="52" viewBox="0 0 52 52" style={css(`display: block`)}><circle cx="26" cy="26" r="23" fill="#466B3A" /><circle cx="18" cy="20" r="12" fill="#5A8549" /><circle cx="33" cy="29" r="11" fill="#5A8549" /><circle cx="23" cy="34" r="9" fill="#6C9A58" /><circle cx="31" cy="17" r="7" fill="#6C9A58" /></svg></>)}
{it.is.dining && (<><svg width="104" height="104" viewBox="0 0 104 104" style={css(`display: block`)}><rect x="41" y="2" width="22" height="22" rx="4" fill="#DCD0BB" /><rect x="41" y="80" width="22" height="22" rx="4" fill="#DCD0BB" /><rect x="2" y="41" width="22" height="22" rx="4" fill="#DCD0BB" /><rect x="80" y="41" width="22" height="22" rx="4" fill="#DCD0BB" /><circle cx="52" cy="52" r="26" fill="#8A6A4A" /><circle cx="52" cy="52" r="18" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" /></svg></>)}
</div>
{it.selected && (<><span style={css(`position: absolute; top: -8px; left: -8px; right: -8px; bottom: -8px; border: 2px dashed ${it.selColor}; border-radius: 12px; pointer-events: none`)}></span></>)}
</div>
</Fragment>))}
</div>

<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; pointer-events: none; background: ${v.overlayBg}; transition: background .9s`)}></div>

<svg width="900" height="640" viewBox="0 0 900 640" style={css(`position: absolute; top: 0; left: 0; pointer-events: none`)} aria-hidden="true">
<path d={v.poolD} fill="url(#yd-poolglow)" style={css(`opacity: ${v.poolGlow}; transition: opacity .9s`)} />
<path d={v.poolD} fill="none" stroke="#C8F8FF" strokeWidth="8" strokeLinecap="round" strokeDasharray="0.1 44" style={css(`opacity: ${v.ledOp}; transition: opacity .9s; filter: drop-shadow(0 0 6px #7FEFFF)`)} />
<path d={v.draftD} fill="rgba(92,200,217,0.22)" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={css(`filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4))`)} />
</svg>

<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; pointer-events: none`)}>
{(v.glows || []).map((g, _i_g) => (<Fragment key={_i_g}>
<div style={css(`position: absolute; left: ${g.x}px; top: ${g.y}px; width: ${g.size}px; height: ${g.size}px; margin-left: ${g.half}px; margin-top: ${g.half}px; border-radius: 999px; background: ${g.bg}; opacity: ${g.op}; mix-blend-mode: screen; transition: opacity .9s`)}></div>
</Fragment>))}
</div>

<div style={css(`position: absolute; top: 0; left: 0; width: 900px; height: 640px; pointer-events: none`)}>
{(v.handles || []).map((h, _i_h) => (<Fragment key={_i_h}>
<span onPointerDown={h.grab} style={css(`position: absolute; left: ${h.x}px; top: ${h.y}px; width: 22px; height: 22px; margin-left: -11px; margin-top: -11px; border-radius: 999px; background: #0B7285; border: 3px solid #FFFFFF; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.4); cursor: move; pointer-events: auto; touch-action: none`)}></span>
</Fragment>))}
{(v.draftDots || []).map((p, _i_p) => (<Fragment key={_i_p}>
<span style={css(`position: absolute; left: ${p.x}px; top: ${p.y}px; width: ${p.size}px; height: ${p.size}px; margin-left: ${p.half}px; margin-top: ${p.half}px; border-radius: 999px; background: ${p.bg}; border: 2px solid #FFFFFF; box-sizing: border-box`)}></span>
</Fragment>))}
{v.hasSel && (<>
<div onPointerDown={v.stop} style={css(`position: absolute; left: ${v.selX}px; top: ${v.selTop}px; transform: translate(-50%, -100%); display: flex; gap: 2px; padding: 4px; border-radius: 12px; background: #0B1B2B; box-shadow: 0 8px 24px rgba(0,0,0,0.4); pointer-events: auto`)}>
<button type="button" onClick={v.shrinkSel} aria-label="Make smaller" title="Smaller" style={css(`width: 38px; height: 38px; border: none; border-radius: 9px; background: transparent; color: #F6F3EE; cursor: pointer; font: inherit; font-size: 20px; font-weight: 700`)}>−</button>
<button type="button" onClick={v.growSel} aria-label="Make bigger" title="Bigger" style={css(`width: 38px; height: 38px; border: none; border-radius: 9px; background: transparent; color: #F6F3EE; cursor: pointer; font: inherit; font-size: 20px; font-weight: 700`)}>+</button>
<span style={css(`width: 1px; margin: 6px 2px; background: rgba(246,243,238,0.2)`)}></span>
<button type="button" onClick={v.rotateSel} aria-label="Rotate 45 degrees" title="Rotate" style={css(`width: 38px; height: 38px; border: none; border-radius: 9px; background: transparent; color: #F6F3EE; cursor: pointer; display: flex; align-items: center; justify-content: center`)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg></button>
<button type="button" onClick={v.copySel} aria-label="Duplicate" title="Duplicate" style={css(`width: 38px; height: 38px; border: none; border-radius: 9px; background: transparent; color: #F6F3EE; cursor: pointer; display: flex; align-items: center; justify-content: center`)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg></button>
<button type="button" onClick={v.deleteSel} aria-label="Delete" title="Delete" style={css(`width: 38px; height: 38px; border: none; border-radius: 9px; background: transparent; color: #FF9B8A; cursor: pointer; display: flex; align-items: center; justify-content: center`)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" /></svg></button>
</div>
</>)}
</div>
</div>
</div>
</div>
</div>

<div style={css(`display: flex; flex-direction: column; gap: 8px`)}>
<span style={css(`font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(246,243,238,0.7)`)}>4 · Add to your yard <span style={css(`font-weight: 500; letter-spacing: 0; text-transform: none`)}>· click to add, then drag into place in Top view</span></span>
<div style={css(`display: grid; grid-template-columns: repeat(9, minmax(0, 1fr)); gap: 6px`)}>
{(v.palette || []).map((p, _i_p) => (<Fragment key={_i_p}>
<button type="button" onClick={p.add} aria-label={`Add ${p.label}`} style={css(`height: 60px; border-radius: 12px; border: 1px solid rgba(246,243,238,0.14); background: rgba(246,243,238,0.06); color: #F6F3EE; font: inherit; font-size: 11px; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 0 2px`)}>
<svg width="26" height="26" viewBox="0 0 30 30" fill="none" stroke="#5CC8D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={p.icon} /></svg>{p.label}</button>
</Fragment>))}
</div>
</div>
</div>
</div>
)
}
}
