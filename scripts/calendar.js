const carousel = document.querySelector('.races');
let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosX = e.clientX - carousel.offsetLeft;
  currentTranslateX = getTranslateX(carousel);
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const mouseX = e.clientX - carousel.offsetLeft;
  const diffX = mouseX - startPosX;
  const newTranslateX = currentTranslateX + diffX;

  setTranslateX(carousel, newTranslateX);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function getTranslateX(element) {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
}

function setTranslateX(element, value) {
  element.style.transform = `translateX(${value}px)`;
}
