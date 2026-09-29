// @ts-nocheck
"use client"

import { Component as ReactComponent, Fragment } from "react"

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

export default class BuildAnimation extends ReactComponent {

constructor(props) {
super(props);
this.durs = [3200, 3000, 4600, 3800, 4200, 3200, 3800, 4000, 4200, 5600];
this.state = { step: 0, open: 0, playing: true };
}
componentDidMount() {
this.schedule();
}
componentWillUnmount() {
clearTimeout(this.timer);
}
schedule() {
clearTimeout(this.timer);
if (!this.state.playing) return;
this.timer = setTimeout(() => {
this.setState({ step: (this.state.step + 1) % 10 }, () => this.schedule());
}, this.durs[this.state.step]);
}
go(i, keepPlaying) {
this.setState({ step: (i + 10) % 10, playing: keepPlaying ? this.state.playing : false }, () => this.schedule());
}
renderVals() {
const titles = ['Personalized design consultation', 'Permit acquisition & processing', 'Excavation & pool shell', 'Plumbing & electrical', 'Waterline tile & coping', 'Equipment: pump, filter, heater', 'Water features & lighting', 'Deck & landscaping', 'Interior finish: plaster', 'Final inspection & first swim'];
const cur = this.state.step;
const on = (k) => (cur === k);
const at = (k) => (cur >= k ? 1 : 0);
const A = (k, anim) => (cur === k ? anim : 'none');
const cams = [[430, 300, 1], [430, 280, 1.08], [560, 240, 1.2], [230, 390, 1.4], [300, 190, 1.75], [140, 455, 1.8], [430, 230, 1.35], [430, 300, 1], [430, 250, 1.3], [430, 270, 1.1]];
const fx = cams[cur][0], fy = cams[cur][1], s = cams[cur][2];
const tx = Math.min(0, Math.max(860 - 860 * s, 430 - s * fx));
const ty = Math.min(0, Math.max(600 - 600 * s, 300 - s * fy));
const faqs = [
['How long does pool construction take in Texas?', 'Most new pool builds in DFW take 8 to 14 weeks from permit approval to final inspection, depending on size, design complexity and weather. You get a realistic timeline at your consultation and updates throughout.'],
['Do I need a permit to build a pool in Dallas or Fort Worth?', 'Yes. Every DFW municipality requires permits for new pool construction. We handle the entire process for you: plan submission, inspections and final sign-off.'],
['What type of pool is best for North Texas soil and climate?', 'Gunite (shotcrete) pools are the most popular choice here because they are engineered to handle expansive clay soils and temperature extremes. Every pool we build is designed for local soil conditions to minimize shifting or cracking.']
];
const light = (i) => (cur === 6 ? 'nb-light .5s ease-out ' + (0.4 + i * 0.16).toFixed(2) + 's both' : cur > 6 ? 'aa-twink 2.4s ease-in-out ' + (i * 0.2).toFixed(1) + 's infinite' : 'none');
const row = (i) => A(7, 'nb-row .5s ease-out ' + (0.4 + i * 0.2).toFixed(1) + 's both');
const plant = (i) => A(7, 'nb-pop .6s cubic-bezier(.3,1.5,.5,1) ' + (1.8 + i * 0.2).toFixed(1) + 's both');
const playing = this.state.playing;
return {
cam: 'translate(' + tx.toFixed(1) + 'px, ' + ty.toFixed(1) + 'px) scale(' + s + ')',
v: {
o01: cur <= 1 ? 1 : 0, o2: at(2), o3: at(3), o4: at(5), o5: at(6), o6: at(7), o9: at(9),
tile: at(4),
tileOff: cur >= 5 ? 0 : 1,
plaster: at(8),
swirl: cur === 8 ? 1 : 0.35,
trowel: 0,
pipe: cur >= 3 ? 0 : 1,
flow: cur >= 3 && cur <= 6 ? 1 : 0,
rebar: on(2) ? 1 : 0,
pile: cur >= 2 && cur <= 6 ? 1 : 0,
exc: on(2) ? 1 : 0,
hose: 0,
ready: on(9) ? 1 : 0,
stamp: on(1) ? 1 : 0,
fallOp: cur >= 9 ? 0.9 : 0.25,
labelInk: '#3B2E22',
drawOff: cur === 0 ? 1 : 0
},
a: {
draw: A(0, 'aa-draw 1.8s ease-in-out .3s forwards'),
draw2: A(0, 'aa-draw 1s ease-in-out 1.8s forwards'),
stamp: A(1, 'aa-stamp .7s cubic-bezier(.3,1.3,.5,1) .5s both'),
pit: A(2, 'nb-grow 1.6s cubic-bezier(.2,.8,.2,1) .6s both'),
exc: A(2, 'nb-drive 1.1s cubic-bezier(.2,.8,.2,1) both'),
pile: A(2, 'nb-grow 2.2s ease-out .9s both'),
rebar: A(2, 'nb-fadein .6s ease 2s both'),
shell: A(2, 'nb-fadein 1s ease 3.2s both'),
tile: A(4, 'aa-draw 1.8s ease-in-out .6s forwards'),
tile2: A(4, 'aa-draw .9s ease-in-out 2.2s forwards'),
cope: A(4, 'nb-fadein .9s ease 2.8s both'),
pad: A(5, 'nb-fadein .5s ease .2s both'),
eq0: A(5, 'nb-drop .7s cubic-bezier(.3,1.4,.5,1) .6s both'),
eq1: A(5, 'nb-drop .7s cubic-bezier(.3,1.4,.5,1) .9s both'),
eq2: A(5, 'nb-drop .7s cubic-bezier(.3,1.4,.5,1) 1.2s both'),
eqLabel: A(5, 'nb-fadein .5s ease 1.8s both'),
falls: A(6, 'nb-drop .7s cubic-bezier(.3,1.4,.5,1) .3s both'),
l0: light(0), l1: light(1), l2: light(2), l3: light(3), l4: light(4), l5: light(5), l6: light(6), l7: light(7), l8: light(8),
lawn: A(7, 'nb-fadein 1s ease both'),
row0: row(0), row1: row(1), row2: row(2), row3: row(3), row4: row(4), row5: row(5),
plant0: plant(0), plant1: plant(1), plant2: plant(2), plant3: plant(3),
plaster: A(8, 'nb-wipe 2.6s cubic-bezier(.5,0,.3,1) .6s both'),
swirl: A(8, 'nb-fadein 1s ease 1.6s both'),
trowel: A(8, 'nb-trowel 2.8s ease-in-out .5s both'),
fill: A(9, 'nb-fillup 2.8s cubic-bezier(.5,0,.3,1) .6s both'),
caus: A(9, 'nb-fadein 1s ease 3.2s both'),
hose: A(9, 'nb-hose 3.8s ease both'),
ready: A(9, 'nb-pop .6s cubic-bezier(.3,1.5,.5,1) 3.6s both')
},
yes: true,
stepNo: cur + 1,
stepPad: cur + 1 < 10 ? '0' + (cur + 1) : String(cur + 1),
stepTitle: titles[cur],
fill: 'calc((100% - 58px) * ' + (cur / 9).toFixed(3) + ')',
playing: playing,
paused: !playing,
playLabel: playing ? 'Pause' : 'Play',
togglePlay: () => this.setState({ playing: !playing }, () => this.schedule()),
prev: () => this.go(cur - 1, true),
next: () => this.go(cur + 1, true),
segs: titles.map((t, i) => ({
n: i + 1,
w: i < cur ? '100%' : (i === cur && !playing ? '100%' : '0%'),
color: i === cur ? '#E8A04C' : '#5CC8D9',
anim: i === cur && playing ? 'nb-bar ' + this.durs[cur] + 'ms linear both' : 'none',
pick: () => this.go(i, false)
})),
steps: titles.map((title, i) => ({
title,
n: i + 1,
active: i === cur,
pressed: i === cur ? 'true' : 'false',
rowBg: i === cur ? 'rgba(92,200,217,0.12)' : 'transparent',
dot: i <= cur ? '#5CC8D9' : '#0B1B2B',
ring: i <= cur ? '#5CC8D9' : 'rgba(246,243,238,0.3)',
num: i <= cur ? '#0B1B2B' : 'rgba(246,243,238,0.65)',
text: i === cur ? '#F6F3EE' : 'rgba(246,243,238,0.72)',
weight: i === cur ? 700 : 500,
pick: () => this.go(i, false)
})),
faqs: faqs.map((f, i) => ({
q: f[0], a: f[1],
open: this.state.open === i,
expanded: this.state.open === i ? 'true' : 'false',
rot: this.state.open === i ? '45deg' : '0deg',
chipBg: this.state.open === i ? '#0B1B2B' : '#F6F3EE',
chipFg: this.state.open === i ? '#F6F3EE' : '#0B1B2B',
toggle: () => this.setState({ open: this.state.open === i ? -1 : i })
}))
};
}

render() {
const v = this.renderVals()
return (
<section className="nb-section" style={css(` background: #0B1B2B; color: #F6F3EE; display: flex; flex-direction: column; gap: 48px`)}>
<div className="nb-head" style={css(`display: flex; justify-content: space-between; align-items: flex-end; gap: 40px`)}>
<div>
<p style={css(`margin: 0 0 16px; font-size: 14px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #5CC8D9`)}>The build, step by step</p>
<h2 style={css(`margin: 0; font-family: 'Fraunces', serif; font-weight: 300; font-size: 60px; letter-spacing: -0.02em`)}>Watch your pool <span style={css(`font-style: italic; color: #E8A04C`)}>come to life.</span></h2>
</div>
<p style={css(`margin: 0; max-width: 400px; font-size: 18px; line-height: 1.6; color: rgba(246,243,238,0.75)`)}>Ten stages, one team. Press play or pick any step to see what happens on site.</p>
</div>

<div className="nb-grid" style={css(`display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; align-items: start`)}>
<div className="nb-list" style={css(`grid-column: span 4; position: relative; display: flex; flex-direction: column`)}>
<div style={css(`position: absolute; top: 29px; bottom: 29px; left: 29px; width: 3px; border-radius: 3px; background: rgba(246,243,238,0.14)`)}></div>
<div style={css(`position: absolute; top: 29px; left: 29px; width: 3px; border-radius: 3px; height: ${v.fill}; background-color: #5CC8D9; background-image: repeating-linear-gradient(180deg, rgba(255,255,255,0.55) 0 12px, transparent 12px 40px); animation: aa-stream 1.4s linear infinite; transition: height .8s cubic-bezier(.2,.8,.2,1)`)}></div>
{(v.steps || []).map((s, _i_s) => (<Fragment key={_i_s}>
<button type="button" onClick={s.pick} className="aa-step" aria-pressed={s.pressed} style={css(`position: relative; display: flex; align-items: center; gap: 18px; min-height: 58px; padding: 0 14px 0 12px; border: none; background: ${s.rowBg}; border-radius: 16px; text-align: left; font: inherit; cursor: pointer; transition: background-color .3s`)}>
<span style={css(`position: relative; width: 36px; height: 36px; flex-shrink: 0; border-radius: 999px; background: ${s.dot}; border: 2px solid ${s.ring}; color: ${s.num}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; transition: all .4s`)}>{s.n}{s.active && (<><span style={css(`position: absolute; top: -2px; left: -2px; width: 36px; height: 36px; border-radius: 999px; border: 2px solid #5CC8D9; animation: aa-ring 1.8s ease-out infinite`)}></span></>)}</span>
<span style={css(`font-size: 17px; font-weight: ${s.weight}; color: ${s.text}; transition: color .3s`)}>{s.title}</span>
</button>
</Fragment>))}
</div>

<div className="nb-stage" style={css(`grid-column: 5 / span 8; display: flex; flex-direction: column; gap: 16px`)}>
<div style={css(`position: relative; aspect-ratio: 860 / 600; border-radius: 24px; overflow: hidden; background: #0F3B5E; box-shadow: 0 30px 70px rgba(0,0,0,0.45)`)}>
<svg viewBox="0 0 860 600" style={css(`display: block; width: 100%; height: 100%`)} role="img" aria-label={`Illustration of the pool build at step ${v.stepNo}: ${v.stepTitle}`}>
<defs>
<pattern id="nb-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" /></pattern>
<filter id="nb-dirtf" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="8" /><feColorMatrix type="matrix" values="0 0 0 0 0.3  0 0 0 0 0.2  0 0 0 0 0.1  0 0 0 0.8 -0.2" /></filter>
<filter id="nb-grass" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" /><feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.26  0 0 0 0 0.08  0 0 0 0.9 -0.28" /></filter>
<filter id="nb-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="2" /><feColorMatrix type="matrix" values="0 0 0 0 0.3  0 0 0 0 0.3  0 0 0 0 0.3  0 0 0 0.35 -0.05" /></filter>
<filter id="nb-caus" x="0" y="0" width="100%" height="100%"><feTurbulence type="turbulence" baseFrequency="0.018 0.026" numOctaves="2" seed="3"><animate attributeName="baseFrequency" dur="12s" values="0.018 0.026;0.022 0.03;0.018 0.026" repeatCount="indefinite" /></feTurbulence><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -2.6 0 0 0 1.02" /></filter>
<filter id="nb-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7" /></filter>
<filter id="nb-soft" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
<pattern id="nb-mow" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)"><rect width="30" height="60" fill="rgba(255,255,255,0.045)" /></pattern>
<pattern id="nb-paver" width="64" height="64" patternUnits="userSpaceOnUse"><rect width="64" height="64" fill="#D3C4AA" /><rect x="1" y="1" width="38" height="30" rx="1.5" fill="#EADFCB" /><rect x="41" y="1" width="22" height="30" rx="1.5" fill="#E2D3BA" /><rect x="1" y="33" width="22" height="30" rx="1.5" fill="#F0E7D8" /><rect x="25" y="33" width="38" height="30" rx="1.5" fill="#EADFCB" /></pattern>
<pattern id="nb-rebar" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 8H16M8 0V16" stroke="#B5652E" strokeWidth="1.6" /></pattern>
<pattern id="nb-shingle" width="24" height="12" patternUnits="userSpaceOnUse"><rect width="24" height="12" fill="#474C54" /><path d="M0 11.5H24M12 0V12" stroke="rgba(0,0,0,0.25)" strokeWidth="1" /></pattern>
<radialGradient id="nb-pit" cx="50%" cy="50%" r="60%"><stop offset="0" stopColor="#4A3526" /><stop offset="1" stopColor="#7A5B3E" /></radialGradient>
<linearGradient id="nb-water" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0" stopColor="#72D9E7" /><stop offset=".5" stopColor="#1FA0C2" /><stop offset="1" stopColor="#0A5B82" /></linearGradient>
<pattern id="nb-tilep" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#1C5E8A" /><rect x="0.5" y="0.5" width="3" height="3" fill="#2C7FB8" /><rect x="4.5" y="0.5" width="3" height="3" fill="#48A9DC" /><rect x="0.5" y="4.5" width="3" height="3" fill="#48A9DC" /><rect x="4.5" y="4.5" width="3" height="3" fill="#2C7FB8" /></pattern>
<clipPath id="nb-poolclip"><rect x="256" y="156" width="348" height="188" rx="30" /><circle cx="610" cy="255" r="48" /></clipPath>
<clipPath id="nb-pitclip"><rect x="240" y="140" width="380" height="220" rx="40" /><circle cx="610" cy="255" r="64" /></clipPath>
<clipPath id="nb-deckclip"><rect x="214" y="90" width="524" height="370" rx="24" /></clipPath>
</defs>

<g style={css(`transform: ${v.cam}; transition: transform 1.5s cubic-bezier(.6,0,.2,1)`)}>
<rect x="-400" y="-400" width="1660" height="1400" fill="#0F3B5E" />
<rect x="-400" y="-400" width="1660" height="1400" fill="url(#nb-grid)" />

<g style={css(`opacity: ${v.v.o2}; transition: opacity 1s`)}>
<rect width="860" height="530" fill="#A88A64" /><rect width="860" height="530" filter="url(#nb-dirtf)" />
</g>

<g style={css(`opacity: ${v.v.o3}; transition: opacity .4s`)}>
<path d="M250 300 H 140 V 430 M650 300 V 476 H 210 M250 200 H 92 V 430" fill="none" stroke="#6E5238" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
<path d="M250 300 H 140 V 430" pathLength="1" fill="none" stroke="#2BB3CC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.pipe}; transition: stroke-dashoffset 1.4s ease-in-out .3s`)} />
<path d="M650 300 V 476 H 210" pathLength="1" fill="none" stroke="#2BB3CC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.pipe}; transition: stroke-dashoffset 1.6s ease-in-out .6s`)} />
<path d="M250 200 H 92 V 430" pathLength="1" fill="none" stroke="#E8A04C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.pipe}; transition: stroke-dashoffset 1.4s ease-in-out .9s`)} />
<g style={css(`opacity: ${v.v.flow}; transition: opacity .6s 2s`)}>
<path d="M140 430 V 300 H 250" fill="none" stroke="#E6FBFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 16" style={css(`animation: aa-flowdash 1s linear infinite`)} />
<path d="M210 476 H 650 V 300" fill="none" stroke="#E6FBFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 16" style={css(`animation: aa-flowdash 1s linear infinite`)} />
</g>
</g>

<g style={css(`opacity: ${v.v.o6}; transition: opacity .3s`)}>
<g style={css(`animation: ${v.a.lawn}`)}><rect width="860" height="530" fill="#6B8C53" /><rect width="860" height="530" filter="url(#nb-grass)" /><rect width="860" height="530" fill="url(#nb-mow)" /></g>
<g clipPath="url(#nb-deckclip)">
<rect x="214" y="90" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row0}`)} />
<rect x="214" y="148" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row1}`)} />
<rect x="214" y="206" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row2}`)} />
<rect x="214" y="264" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row3}`)} />
<rect x="214" y="322" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row4}`)} />
<rect x="214" y="380" width="524" height="64" fill="url(#nb-paver)" style={css(`animation: ${v.a.row5}`)} />
</g>
<rect x="214" y="90" width="524" height="370" rx="24" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="2" style={css(`animation: ${v.a.lawn}`)} />
<g className="nb-fx" style={css(`animation: ${v.a.plant0}`)}><circle cx="90" cy="80" r="44" fill="#466B3A" /><circle cx="80" cy="72" r="26" fill="#5A8549" /><circle cx="100" cy="92" r="16" fill="#6C9A58" /></g>
<g className="nb-fx" style={css(`animation: ${v.a.plant1}`)}><circle cx="800" cy="250" r="34" fill="#466B3A" /><circle cx="792" cy="242" r="20" fill="#5A8549" /></g>
<g className="nb-fx" style={css(`animation: ${v.a.plant2}`)}><circle cx="760" cy="80" r="26" fill="#466B3A" /><circle cx="754" cy="74" r="14" fill="#6C9A58" /></g>
<g className="nb-fx" style={css(`animation: ${v.a.plant3}`)}><circle cx="300" cy="490" r="22" fill="#466B3A" /><circle cx="296" cy="486" r="12" fill="#6C9A58" /><circle cx="560" cy="492" r="20" fill="#466B3A" /><circle cx="556" cy="488" r="11" fill="#6C9A58" /></g>
</g>

<rect x="0" y="530" width="860" height="70" fill="url(#nb-shingle)" style={css(`opacity: ${v.v.o2}; transition: opacity 1s`)} />
<rect x="2" y="532" width="856" height="66" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="6 6" style={css(`opacity: ${v.v.o01}; transition: opacity .6s`)} />
<text x="430" y="572" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="14" fontWeight="700" letterSpacing="6" fill="rgba(255,255,255,0.55)">HOUSE</text>

<g style={css(`opacity: ${v.v.o4}; transition: opacity .3s`)}>
<rect x="40" y="420" width="170" height="82" rx="6" fill="#A7A39B" style={css(`animation: ${v.a.pad}`)} />
<rect x="40" y="420" width="170" height="82" rx="6" filter="url(#nb-grain)" style={css(`animation: ${v.a.pad}`)} />
<g className="nb-fx" style={css(`animation: ${v.a.eq0}`)}><rect x="54" y="434" width="38" height="52" rx="6" fill="#2F4B5C" /><circle cx="73" cy="452" r="9" fill="#46687C" /></g>
<g className="nb-fx" style={css(`animation: ${v.a.eq1}`)}><circle cx="124" cy="460" r="22" fill="#E6E2DA" stroke="#2F4B5C" strokeWidth="3" /><circle cx="124" cy="460" r="8" fill="#2F4B5C" /></g>
<g className="nb-fx" style={css(`animation: ${v.a.eq2}`)}><rect x="158" y="434" width="40" height="52" rx="6" fill="#8C3B2A" /><path d="M166 446h24M166 454h24M166 462h24" stroke="rgba(255,255,255,0.3)" strokeWidth="2" /></g>
<text x="125" y="518" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5" fill={v.v.labelInk} style={css(`animation: ${v.a.eqLabel}`)}>PUMP · FILTER · HEATER</text>
</g>

<g style={css(`opacity: ${v.v.o2}; transition: opacity .3s`)}>
<g className="nb-fx" style={css(`animation: ${v.a.pit}`)}>
<rect x="240" y="140" width="380" height="220" rx="40" fill="url(#nb-pit)" /><circle cx="610" cy="255" r="64" fill="url(#nb-pit)" />
<rect x="262" y="160" width="336" height="180" rx="30" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
<rect x="290" y="186" width="280" height="128" rx="22" fill="none" stroke="rgba(0,0,0,0.16)" strokeWidth="2" />
</g>
<g clipPath="url(#nb-pitclip)" style={css(`opacity: ${v.v.rebar}; animation: ${v.a.rebar}`)}><rect x="240" y="140" width="500" height="320" fill="url(#nb-rebar)" /></g>
<g style={css(`animation: ${v.a.shell}`)}>
<rect x="250" y="150" width="360" height="200" rx="36" fill="#C2BCB2" />
<circle cx="610" cy="255" r="56" fill="#C2BCB2" />
<rect x="250" y="150" width="360" height="200" rx="36" filter="url(#nb-grain)" />
<g clipPath="url(#nb-poolclip)"><rect x="250" y="150" width="400" height="250" fill="none" stroke="rgba(40,40,40,0.35)" strokeWidth="26" filter="url(#nb-blur)" /></g>
</g>
</g>

<g clipPath="url(#nb-poolclip)" style={css(`opacity: ${v.v.plaster}`)}>
<rect className="nb-wipe" x="250" y="150" width="480" height="300" fill="#EEF2F1" style={css(`animation: ${v.a.plaster}`)} />
<rect x="250" y="150" width="480" height="300" filter="url(#nb-grain)" opacity=".45" style={css(`animation: ${v.a.plaster}`)} />
<g fill="none" stroke="rgba(150,165,168,0.55)" strokeWidth="2" strokeLinecap="round" style={css(`opacity: ${v.v.swirl}; animation: ${v.a.swirl}`)}>
<path d="M290 200 a22 14 0 1 1 30 10" /><path d="M350 250 a26 16 0 1 1 36 10" /><path d="M420 190 a22 14 0 1 1 30 10" /><path d="M480 270 a26 16 0 1 1 36 10" /><path d="M320 300 a22 14 0 1 1 30 10" /><path d="M540 210 a22 14 0 1 1 30 10" /><path d="M590 340 a18 12 0 1 1 26 8" />
</g>
<g className="nb-trowel" style={css(`opacity: ${v.v.trowel}; animation: ${v.a.trowel}`)}><rect x="250" y="236" width="44" height="22" rx="4" fill="#9AA3A8" /><rect x="266" y="226" width="12" height="14" rx="3" fill="#5A3A20" /></g>
</g>

<g clipPath="url(#nb-poolclip)" style={css(`opacity: ${v.v.o9}`)}>
<rect className="nb-fill" x="250" y="150" width="480" height="300" fill="url(#nb-water)" style={css(`animation: ${v.a.fill}`)} />
<rect x="250" y="150" width="480" height="300" filter="url(#nb-caus)" style={css(`opacity: .32; animation: ${v.a.caus}`)} />
</g>

<g style={css(`opacity: ${v.v.tile}`)}>
<path d="M286 157 H574 A29 29 0 0 1 603 186 V208.5 A47 47 0 1 1 603 301.5 V314 A29 29 0 0 1 574 343 H286 A29 29 0 0 1 257 314 V186 A29 29 0 0 1 286 157 Z" fill="none" stroke="url(#nb-tilep)" strokeWidth="12" pathLength="1" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.tileOff}; animation: ${v.a.tile}`)} />
<path d="M610 201 A54 54 0 0 0 610 309" fill="none" stroke="url(#nb-tilep)" strokeWidth="22" pathLength="1" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.tileOff}; animation: ${v.a.tile2}`)} />
<g style={css(`animation: ${v.a.cope}`)}>
<path d="M286 150 H574 A36 36 0 0 1 610 186 V201 A54 54 0 1 1 610 309 V314 A36 36 0 0 1 574 350 H286 A36 36 0 0 1 250 314 V186 A36 36 0 0 1 286 150 Z" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="18" strokeLinejoin="round" transform="translate(2 3)" />
<path d="M286 150 H574 A36 36 0 0 1 610 186 V201 A54 54 0 1 1 610 309 V314 A36 36 0 0 1 574 350 H286 A36 36 0 0 1 250 314 V186 A36 36 0 0 1 286 150 Z" fill="none" stroke="#EFE8DC" strokeWidth="14" strokeLinejoin="round" />
<path d="M286 150 H574 A36 36 0 0 1 610 186 V201 A54 54 0 1 1 610 309 V314 A36 36 0 0 1 574 350 H286 A36 36 0 0 1 250 314 V186 A36 36 0 0 1 286 150 Z" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="14" strokeDasharray="1.5 18" />
<path d="M610 201 A54 54 0 0 0 610 309" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="14" transform="translate(2 3)" />
<path d="M610 201 A54 54 0 0 0 610 309" fill="none" stroke="#EFE8DC" strokeWidth="12" />
<path d="M610 201 A54 54 0 0 0 610 309" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="12" strokeDasharray="1.5 16" />
</g>
</g>

<g style={css(`opacity: ${v.v.o9}`)}>
<path d="M566 232 A54 54 0 0 0 566 278" fill="none" stroke="#DFFAFF" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 4" style={css(`animation: aa-flowdash .6s linear infinite`)} />
<path d="M548 236 A60 60 0 0 0 548 274" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="2 6" style={css(`animation: aa-flowdash .8s linear infinite`)} />
</g>
<g style={css(`opacity: ${v.v.o5}; transition: opacity .3s`)}>
<g className="nb-fx" style={css(`animation: ${v.a.falls}`)}><rect x="398" y="122" width="64" height="20" rx="3" fill="#A08A70" /><rect x="398" y="122" width="64" height="6" rx="3" fill="#C4B095" /></g>
<g style={css(`opacity: ${v.v.fallOp}; transition: opacity .8s`)}>
<line x1="408" y1="142" x2="408" y2="166" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" style={css(`animation: aa-fall .55s linear infinite`)} />
<line x1="422" y1="142" x2="422" y2="166" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" style={css(`animation: aa-fall .5s linear .1s infinite`)} />
<line x1="438" y1="142" x2="438" y2="166" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" style={css(`animation: aa-fall .55s linear .2s infinite`)} />
<line x1="452" y1="142" x2="452" y2="166" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="5 5" style={css(`animation: aa-fall .5s linear .05s infinite`)} />
</g>
<circle className="nb-fx" cx="300" cy="162" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l0}`)} />
<circle className="nb-fx" cx="360" cy="162" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l1}`)} />
<circle className="nb-fx" cx="500" cy="162" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l2}`)} />
<circle className="nb-fx" cx="560" cy="162" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l3}`)} />
<circle className="nb-fx" cx="598" cy="250" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l4}`)} />
<circle className="nb-fx" cx="640" cy="290" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l5}`)} />
<circle className="nb-fx" cx="430" cy="338" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l6}`)} />
<circle className="nb-fx" cx="300" cy="338" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l7}`)} />
<circle className="nb-fx" cx="262" cy="250" r="5" fill="#C8F8FF" filter="url(#nb-soft)" style={css(`animation: ${v.a.l8}`)} />
</g>

<g style={css(`opacity: ${v.v.hose}; animation: ${v.a.hose}`)}>
<path d="M150 530 C 170 470, 220 420, 270 330" fill="none" stroke="#2E7D4F" strokeWidth="7" strokeLinecap="round" />
<path d="M150 530 C 170 470, 220 420, 270 330" fill="none" stroke="#BFF4FF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 12" style={css(`animation: aa-flowdash .6s linear infinite`)} />
<ellipse className="nb-fx" cx="286" cy="316" rx="26" ry="10" fill="none" stroke="#FFFFFF" strokeWidth="2" style={css(`animation: aa-rip 1.2s ease-out infinite`)} />
<ellipse className="nb-fx" cx="286" cy="316" rx="26" ry="10" fill="none" stroke="#FFFFFF" strokeWidth="2" style={css(`animation: aa-rip 1.2s ease-out .6s infinite`)} />
</g>

<g style={css(`opacity: ${v.v.pile}; transition: opacity 1s`)}>
<g className="nb-fx" style={css(`animation: ${v.a.pile}`)}><circle cx="760" cy="120" r="54" fill="#8C6A45" /><circle cx="740" cy="104" r="34" fill="#9C7A52" /><circle cx="782" cy="136" r="28" fill="#7A5A3A" /><circle cx="752" cy="92" r="16" fill="#AB8A60" /></g>
</g>

<g style={css(`opacity: ${v.v.exc}; transition: opacity .8s`)}>
<g style={css(`animation: ${v.a.exc}`)}>
<g transform="translate(800 300)">
<rect x="-34" y="-44" width="78" height="18" rx="5" fill="#2B2B2B" /><rect x="-34" y="26" width="78" height="18" rx="5" fill="#2B2B2B" />
<path d="M-30 -40h70M-30 -30h70M-30 30h70M-30 40h70" stroke="#4A4A4A" strokeWidth="2" strokeDasharray="3 5" />
<rect x="-28" y="-30" width="60" height="60" rx="8" fill="#F2B01E" />
<rect x="22" y="-26" width="12" height="52" rx="3" fill="#C88F12" />
<rect x="-20" y="-22" width="22" height="20" rx="3" fill="#2F4B5C" />
<g className="nb-arm" style={css(`animation: aa-dig 1.8s ease-in-out infinite alternate`)}>
<rect x="-128" y="-8" width="104" height="16" rx="6" fill="#F2B01E" />
<rect x="-128" y="-3" width="104" height="6" fill="#C88F12" />
<rect x="-148" y="-14" width="24" height="28" rx="4" fill="#3A3A3A" />
</g>
</g>
</g>
</g>

<g style={css(`opacity: ${v.v.o01}; transition: opacity .6s`)}>
<path d="M286 150 H574 A36 36 0 0 1 610 186 V201 A54 54 0 1 1 610 309 V314 A36 36 0 0 1 574 350 H286 A36 36 0 0 1 250 314 V186 A36 36 0 0 1 286 150 Z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" pathLength="1" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.drawOff}; animation: ${v.a.draw}`)} />
<path d="M610 201 A54 54 0 0 0 610 309" fill="none" stroke="#FFFFFF" strokeWidth="2" pathLength="1" strokeDasharray="1" style={css(`stroke-dashoffset: ${v.v.drawOff}; animation: ${v.a.draw2}`)} />
<path d="M250 126H610M250 118v16M610 118v16M226 150V350M218 150h16M218 350h16" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" />
<text x="410" y="256" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="16" fontWeight="700" letterSpacing="6" fill="rgba(255,255,255,0.75)">POOL</text>
<text x="618" y="260" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="12" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.75)">SPA</text>
<rect x="40" y="420" width="170" height="82" rx="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="5 5" />
<text x="125" y="466" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="rgba(255,255,255,0.7)">EQUIPMENT</text>
<rect x="214" y="90" width="524" height="370" rx="24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeDasharray="3 6" />
<text x="230" y="112" fontFamily="Figtree, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="rgba(255,255,255,0.55)">DECK</text>
</g>

<g transform="rotate(-12 430 250)" style={css(`opacity: ${v.v.stamp}`)}>
<g className="nb-fx" style={css(`animation: ${v.a.stamp}`)}>
<rect x="300" y="206" width="260" height="88" rx="10" fill="rgba(15,59,94,0.7)" stroke="#E8A04C" strokeWidth="4" />
<rect x="308" y="214" width="244" height="72" rx="6" fill="none" stroke="#E8A04C" strokeWidth="1.5" />
<text x="430" y="248" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="26" fontWeight="800" letterSpacing="3" fill="#E8A04C">PERMIT</text>
<text x="430" y="274" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="16" fontWeight="800" letterSpacing="7" fill="#E8A04C">APPROVED</text>
</g>
</g>
</g>

<g style={css(`opacity: ${v.v.ready}`)}>
<g className="nb-fx" style={css(`animation: ${v.a.ready}`)}>
<rect x="640" y="24" width="196" height="46" rx="23" fill="#E8A04C" />
<text x="738" y="53" textAnchor="middle" fontFamily="Figtree, sans-serif" fontSize="16" fontWeight="800" letterSpacing="1.5" fill="#0B1B2B">READY TO SWIM</text>
</g>
</g>
</svg>
<div style={css(`position: absolute; top: 18px; left: 18px; display: flex; align-items: center; gap: 14px; padding: 10px 18px 10px 12px; border-radius: 14px; background: rgba(11,27,43,0.86)`)}>
<span style={css(`font-family: 'Fraunces', serif; font-size: 30px; line-height: 1; color: #E8A04C`)}>{v.stepPad}</span>
<div style={css(`display: flex; flex-direction: column; gap: 2px`)}><span style={css(`font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #5CC8D9`)}>Now building</span><span style={css(`font-family: 'Fraunces', serif; font-size: 19px; line-height: 1.15`)}>{v.stepTitle}</span></div>
</div>
</div>

<div style={css(`display: flex; align-items: center; gap: 12px`)}>
<button type="button" onClick={v.prev} aria-label="Previous step" style={css(`width: 48px; height: 48px; flex-shrink: 0; border-radius: 999px; border: 1px solid rgba(246,243,238,0.25); background: transparent; color: #F6F3EE; cursor: pointer; display: flex; align-items: center; justify-content: center`)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg></button>
<button type="button" onClick={v.togglePlay} aria-label={v.playLabel} style={css(`width: 56px; height: 56px; flex-shrink: 0; border-radius: 999px; border: none; background: #E8A04C; color: #0B1B2B; cursor: pointer; display: flex; align-items: center; justify-content: center`)}>
{v.playing && (<><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg></>)}
{v.paused && (<><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z" /></svg></>)}
</button>
<button type="button" onClick={v.next} aria-label="Next step" style={css(`width: 48px; height: 48px; flex-shrink: 0; border-radius: 999px; border: 1px solid rgba(246,243,238,0.25); background: transparent; color: #F6F3EE; cursor: pointer; display: flex; align-items: center; justify-content: center`)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></button>
<div style={css(`flex-grow: 1; display: grid; grid-template-columns: repeat(10, minmax(0, 1fr)); gap: 5px; padding-left: 8px`)}>
{(v.segs || []).map((g, _i_g) => (<Fragment key={_i_g}>
<button type="button" onClick={g.pick} aria-label={`Go to step ${g.n}`} style={css(`height: 44px; border: none; background: transparent; padding: 0; cursor: pointer; display: flex; align-items: center`)}>
<span style={css(`position: relative; display: block; width: 100%; height: 6px; border-radius: 6px; background: rgba(246,243,238,0.16); overflow: hidden`)}><span style={css(`position: absolute; top: 0; left: 0; bottom: 0; width: ${g.w}; background: ${g.color}; border-radius: 6px; animation: ${g.anim}`)}></span></span>
</button>
</Fragment>))}
</div>
<span style={css(`flex-shrink: 0; font-size: 15px; font-weight: 600; color: rgba(246,243,238,0.7); min-width: 88px; text-align: right`)}>Step {v.stepNo} of 10</span>
</div>
</div>
</div>
</section>
)
}
}
