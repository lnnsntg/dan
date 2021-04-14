const randomInts = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
   
  const randomColor = function () {
    return `rgb(${randomInts(0, 255)}, ${randomInts(0, 255)}, ${randomInts(
      0,
      255
    )})`;
  };
   
  const navLink = document.querySelector('.nav__Link');
   
  navLink.addEventListener('click', function (e) {
    navLink.style.background = randomColor();
    console.log(randomColor());
  });