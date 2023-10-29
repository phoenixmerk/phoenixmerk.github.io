var frame = document.querySelector('.floating-frame');
var isDragging = false;
var offsetX, offsetY;

frame.addEventListener('mousedown', function (e) {
  isDragging = true;
  offsetX = e.clientX - frame.getBoundingClientRect().left;
  offsetY = e.clientY - frame.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function (e) {
  if (isDragging) {
    frame.style.left = e.clientX - offsetX + 'px';
    frame.style.top = e.clientY - offsetY + 'px';
  }
});

document.addEventListener('mouseup', function () {
  isDragging = false;
});
