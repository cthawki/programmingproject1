var i = 0;
var images = ['img/f1.jpg', 'img/f2.jpg', 'img/f3.jpg', 'img/f4.jpg', 'img/f5.jpg', 'img/f6.jpg', 'img/f7.jpg', 'img/f8.jpg', 'img/f9.jpg', 'img/f10.jpg'];
var time = 2200;

function changeImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}

window.onload = changeImage();
