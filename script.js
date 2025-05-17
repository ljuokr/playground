const block = document.getElementById('block');
let isDragging = false;
let offsetX, offsetY;

block.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const feld = document.getElementById('feld');
    const feldRect = feld.getBoundingClientRect();
    let x = e.clientX - feldRect.left - offsetX;
    let y = e.clientY - feldRect.top - offsetY;

    x = Math.max(0, Math.min(x, feld.clientWidth - block.clientWidth));
    y = Math.max(0, Math.min(y, feld.clientHeight - block.clientHeight));

    block.style.left = x + 'px';
    block.style.top = y + 'px';
  }
});
