const block = document.getElementById('block');
let drag = false, offX = 0, offY = 0;

block.addEventListener('mousedown', e => {
  drag = true;
  offX = e.offsetX;
  offY = e.offsetY;
});

document.addEventListener('mouseup', () => { drag = false; });

document.addEventListener('mousemove', e => {
  if (!drag) return;
  const feld = document.getElementById('feld');
  const r = feld.getBoundingClientRect();
  let x = e.clientX - r.left - offX;
  let y = e.clientY - r.top  - offY;
  x = Math.max(0, Math.min(x, feld.clientWidth  - block.clientWidth));
  y = Math.max(0, Math.min(y, feld.clientHeight - block.clientHeight));
  block.style.left = x + 'px';
  block.style.top  = y + 'px';
});
