let ctx;/*API audio*/

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

/* ─── Mengubah teks Hz ─── */
function setInfo(txt) {/*mengembalikan teks*/
  document.getElementById('info-text').innerHTML =
    '<span class="playing">' + txt + '</span>';
}

/* ─── Efek tombol ─── */
function ripple(el) {
  el.style.position = 'relative';
  el.style.overflow = 'hidden';
  const r = document.createElement('div');
  r.className = 'ripple';
  const s = Math.max(el.offsetWidth, el.offsetHeight);
  r.style.width  = s + 'px';
  r.style.height = s + 'px';
  r.style.left   = ((el.offsetWidth  - s) / 2) + 'px';
  r.style.top    = ((el.offsetHeight - s) / 2) + 'px';
  el.appendChild(r);
  setTimeout(() => r.remove(), 580);
}

function hitAnim(el) {
  el.classList.add('hit');
  setTimeout(() => el.classList.remove('hit'), 180);
  ripple(el);
}

/* ============================================================
   SYNTHESIZER FUNCTIONS
   Mensimulasikan harmonik inharmonic khas instrumen perunggu
   ============================================================ */

/**
 * playGong — Gong Ageng & Kempul
 * @param {number} freq   - frekuensi dasar (Hz)
 * @param {number} decay  - durasi dengung (detik)
 * @param {number} vol    - volume (0–1)
 */
function playGong(freq, decay, vol) {
  const ac     = getCtx();
  const master = ac.createGain();
  master.connect(ac.destination);
  master.gain.setValueAtTime(vol, ac.currentTime);
  master.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + decay);

  // Partial inharmonic — ciri khas logam perunggu
  [1, 2.03, 3.1, 4.5, 6.2].forEach((mult, i) => {
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g);
    g.connect(master);
    osc.type            = 'sine';
    osc.frequency.value = freq * mult;
    const d = decay / (1 + i * 0.35);
    g.gain.setValueAtTime(0.7 / (i + 1), ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
    osc.start();
    osc.stop(ac.currentTime + d + 0.1);
  });

  // Attack transient — suara pukulan pemukul
  const noise = ac.createOscillator();
  const ng    = ac.createGain();
  noise.connect(ng);
  ng.connect(master);
  noise.type = 'sawtooth';
  noise.frequency.setValueAtTime(freq * 2, ac.currentTime);
  noise.frequency.exponentialRampToValueAtTime(freq * 0.8, ac.currentTime + 0.4);
  ng.gain.setValueAtTime(0.2, ac.currentTime);
  ng.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.4);
  noise.start();
  noise.stop(ac.currentTime + 0.45);
}

/**
 * playSaron — Saron Barung (bilah perunggu)
 * @param {number} freq - frekuensi nada (Hz)
 * @param {string} name - nama nada untuk info bar
 */
function playSaron(freq, name) {
  const ac     = getCtx();
  const decay  = 1.9;
  const master = ac.createGain();
  master.connect(ac.destination);
  master.gain.setValueAtTime(0.75, ac.currentTime);
  master.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + decay);

  [1, 2.05, 3.2, 4.6, 6.1].forEach((m, i) => {
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g);
    g.connect(master);
    osc.type            = i === 0 ? 'triangle' : 'sine';
    osc.frequency.value = freq * m;
    const d = decay / (1 + i * 0.55);
    g.gain.setValueAtTime(0.85 / (i + 1), ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
    osc.start();
    osc.stop(ac.currentTime + d + 0.05);
  });

  setInfo('Saron Barung — ' + name + ' (' + Math.round(freq) + ' Hz)');
}

/**
 * playBonang — Bonang Barung (pencon perunggu, oktaf atas)
 * @param {number} freq - frekuensi nada (Hz)
 * @param {string} name - nama nada untuk info bar
 */
function playBonang(freq, name) {
  const ac     = getCtx();
  const decay  = 2.3;
  const master = ac.createGain();
  master.connect(ac.destination);
  master.gain.setValueAtTime(0.65, ac.currentTime);
  master.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + decay);

  [1, 2.02, 3.15, 4.4, 5.8].forEach((m, i) => {
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g);
    g.connect(master);
    osc.type            = 'sine';
    osc.frequency.value = freq * m;
    const d = (decay * 0.85) / (1 + i * 0.4);
    g.gain.setValueAtTime(0.7 / (i + 1), ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
    osc.start();
    osc.stop(ac.currentTime + d + 0.05);
  });

  setInfo('Bonang Barung — ' + name + ' (' + Math.round(freq) + ' Hz)');
}

/**
 * playKenong — Kenong (penanda frase, dengung panjang)
 * @param {number} freq - frekuensi nada (Hz)
 * @param {string} name - nama nada untuk info bar
 */
function playKenong(freq, name) {
  const ac     = getCtx();
  const decay  = 3.8;
  const master = ac.createGain();
  master.connect(ac.destination);
  master.gain.setValueAtTime(0.8, ac.currentTime);
  master.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + decay);

  [1, 2.06, 3.18, 4.5].forEach((m, i) => {
    const osc = ac.createOscillator();
    const g   = ac.createGain();
    osc.connect(g);
    g.connect(master);
    osc.type            = 'sine';
    osc.frequency.value = freq * m;
    const d = (decay * 0.9) / (1 + i * 0.38);
    g.gain.setValueAtTime(0.8 / (i + 1), ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
    osc.start();
    osc.stop(ac.currentTime + d + 0.05);
  });

  setInfo('Kenong — ' + name + ' (' + Math.round(freq) + ' Hz)');
}

/**
 * playKendang — Kendang (drum membran kulit)
 * @param {'low'|'high'} side - 'low' = Dhung (kiri), 'high' = Tak (kanan)
 */
function playKendang(side) {
  const ac    = getCtx();
  const isLow = side === 'low';
  const freq  = isLow ? 78 : 165;
  const decay = isLow ? 0.65 : 0.32;

  const master = ac.createGain();
  master.connect(ac.destination);
  master.gain.setValueAtTime(0.95, ac.currentTime);
  master.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + decay);

  // Komponen tonal — pitch membran
  const osc = ac.createOscillator();
  osc.connect(master);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, ac.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.28, ac.currentTime + decay * 0.6);
  osc.start();
  osc.stop(ac.currentTime + decay);

  // Noise burst — tekstur kulit membran
  const bufLen = Math.floor(ac.sampleRate * 0.18);
  const buf    = ac.createBuffer(1, bufLen, ac.sampleRate);
  const data   = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufLen);
  }
  const src = ac.createBufferSource();
  src.buffer = buf;
  const ng = ac.createGain();
  src.connect(ng);
  ng.connect(master);
  ng.gain.setValueAtTime(isLow ? 0.5 : 0.65, ac.currentTime);
  ng.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + (isLow ? 0.2 : 0.12));
  src.start();

  setInfo('Kendang — ' + (isLow ? 'Dhung (bas, sisi kiri)' : 'Tak (treble, sisi kanan)'));
}

/* ============================================================
   BUILD UI — membangun instrumen secara dinamis
   ============================================================ */

/* ── DATA INSTRUMEN ── */

const gongData = [
  { name: 'Gong Ageng', freq: 55,  decay: 13,  vol: 0.92, size: 82 },
  { name: 'Kempul 5',   freq: 82,  decay: 7,   vol: 0.75, size: 66 },
  { name: 'Kempul 6',   freq: 92,  decay: 7,   vol: 0.75, size: 66 },
  { name: 'Kempul 1',   freq: 110, decay: 5.5, vol: 0.70, size: 58 },
];

const saronColors = [
  '#b03a2e', '#a04010', '#806020',
  '#2a7a3a', '#1a6a50', '#1a4a8a', '#6a2090',
];

const saronNotes = [
  { name: 'Ji (1)',  freq: 260, label: 'Ji'  },
  { name: 'Ro (2)',  freq: 293, label: 'Ro'  },
  { name: 'Lu (3)',  freq: 329, label: 'Lu'  },
  { name: 'Pat (4)', freq: 371, label: 'Pat' },
  { name: 'Ma (5)',  freq: 415, label: 'Ma'  },
  { name: 'Nem (6)', freq: 466, label: 'Nem' },
  { name: 'Pi (7)',  freq: 522, label: 'Pi'  },
];

const bonangNotes = [
  { name: 'Ji (1)',   freq: 520  },
  { name: 'Ro (2)',   freq: 586  },
  { name: 'Lu (3)',   freq: 658  },
  { name: 'Pat (4)',  freq: 742  },
  { name: 'Ma (5)',   freq: 830  },
  { name: 'Nem (6)', freq: 932  },
  { name: 'Pi (7)',  freq: 1044 },
  { name: "Ji' (1')", freq: 1170 },
];

const kenongData = [
  { name: 'Kenong Ji (1)',  freq: 130 },
  { name: 'Kenong Lu (3)',  freq: 164 },
  { name: 'Kenong Ma (5)', freq: 207 },
];

/* ── RENDER GONG ── */
const gongRow = document.getElementById('gong-row');
gongData.forEach(g => {
  const wrap = document.createElement('div');
  wrap.className = 'gong-wrap';

  const btn = document.createElement('button');
  btn.className    = 'gong-btn';
  btn.style.width  = g.size + 'px';
  btn.style.height = g.size + 'px';
  btn.setAttribute('aria-label', g.name);

  const knob = document.createElement('div');
  knob.className   = 'gong-knob';
  knob.style.width  = Math.round(g.size * 0.27) + 'px';
  knob.style.height = Math.round(g.size * 0.27) + 'px';
  btn.appendChild(knob);

  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    hitAnim(btn);
    playGong(g.freq, g.decay, g.vol);
    setInfo(g.name + ' (' + g.freq + ' Hz) — dengung panjang...');
  });

  const lbl = document.createElement('div');
  lbl.className   = 'gong-label';
  lbl.textContent = g.name;

  wrap.appendChild(btn);
  wrap.appendChild(lbl);
  gongRow.appendChild(wrap);
});

/* ── RENDER SARON ── */
const saronRow = document.getElementById('saron-row');
saronNotes.forEach((n, i) => {
  const btn = document.createElement('button');
  btn.className       = 'saron-btn';
  btn.style.background = saronColors[i];
  btn.setAttribute('aria-label', 'Saron ' + n.name);

  const notch = document.createElement('div');
  notch.className = 'saron-notch';

  const lbl = document.createElement('span');
  lbl.className   = 'saron-note';
  lbl.textContent = n.label;

  btn.appendChild(notch);
  btn.appendChild(lbl);

  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    hitAnim(btn);
    playSaron(n.freq, n.name);
  });

  saronRow.appendChild(btn);
});

/* ── RENDER BONANG ── */
const bonangGrid = document.getElementById('bonang-grid');
bonangNotes.forEach(n => {
  const wrap = document.createElement('div');
  wrap.className = 'bonang-wrap';

  const btn = document.createElement('button');
  btn.className = 'bonang-frame';
  btn.setAttribute('aria-label', 'Bonang ' + n.name);

  const knob = document.createElement('div');
  knob.className = 'bonang-knob';
  btn.appendChild(knob);

  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    hitAnim(btn);
    playBonang(n.freq, n.name);
  });

  const lbl = document.createElement('div');
  lbl.className   = 'bonang-label';
  lbl.textContent = n.name;

  wrap.appendChild(btn);
  wrap.appendChild(lbl);
  bonangGrid.appendChild(wrap);
});

/* ── RENDER KENONG ── */
const bottomRow = document.getElementById('bottom-row');
kenongData.forEach(k => {
  const wrap = document.createElement('div');
  wrap.className = 'bottom-item';

  const btn = document.createElement('button');
  btn.className = 'kenong-frame';
  btn.setAttribute('aria-label', k.name);

  const knob = document.createElement('div');
  knob.className = 'kenong-knob';
  btn.appendChild(knob);

  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    hitAnim(btn);
    playKenong(k.freq, k.name);
  });

  const lbl = document.createElement('div');
  lbl.className   = 'bottom-item-label';
  lbl.textContent = k.name;

  wrap.appendChild(btn);
  wrap.appendChild(lbl);
  bottomRow.appendChild(wrap);
});

/* ── RENDER KENDANG ── */
const kWrap = document.createElement('div');
kWrap.className = 'bottom-item';

const kContainer = document.createElement('div');
kContainer.className = 'kendang-container';

const kBody = document.createElement('button');
kBody.className = 'kendang-body';
kBody.setAttribute('aria-label', 'Kendang — klik kiri Dhung, klik kanan Tak');

const headL = document.createElement('div');
headL.className = 'drum-head drum-head-l';

const headR = document.createElement('div');
headR.className = 'drum-head drum-head-r';

kBody.appendChild(headL);
kBody.appendChild(headR);

kBody.addEventListener('pointerdown', e => {
  e.preventDefault();
  const rect = kBody.getBoundingClientRect();
  const side = e.clientX < rect.left + rect.width / 2 ? 'low' : 'high';
  hitAnim(kBody);
  playKendang(side);
});

const kHint = document.createElement('div');
kHint.className   = 'kendang-hint';
kHint.textContent = 'Kendang — kiri: Dhung | kanan: Tak';

kContainer.appendChild(kBody);
kContainer.appendChild(kHint);
kWrap.appendChild(kContainer);
bottomRow.appendChild(kWrap);
