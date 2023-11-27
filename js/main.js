const swiper1 = new Swiper('.fairy-tail__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

});

const swiper2 = new Swiper('.trip__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const form = document.getElementById("form");

form.addEventListener('click', function (event) {
  event.preventDefault();
});

const header = document.getElementById('header');
console.log(header)
const tour = document.getElementById('tour');

window.addEventListener('scroll', function () {
  console.log('scroll is run');
  header.classList.add('header--sticky');
  tour.classList.add('tour--with-margin');
});

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition === 0) {
    header.classList.remove('header--sticky');
    tour.classList.remove('tour--with-margin');
  }

});