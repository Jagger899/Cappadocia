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

const swiper = new Swiper('.hotel__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
     0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView:2,
    },
  },
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
// const headerContainer = document.getElementsByClassName('header__container')[0];
const headerContainer = document.getElementById('header__container')
console.log(headerContainer);


window.addEventListener('scroll', function () {
  console.log('scroll is run');
  header.classList.add('header--sticky');
  tour.classList.add('tour--with-margin');
  // headerContainer.style = "padding-top: 50px";
  headerContainer.classList.add('header__container--sticky')
});

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition === 0) {
    header.classList.remove('header--sticky');
    tour.classList.remove('tour--with-margin');
    // headerContainer.style = "padding-top:74px";
    headerContainer.classList.remove('header__container--sticky');
    
  }
});


// if (window.innerWidth < 500) {
//   headerContainer.classList.remove('header__container')
//   headerContainer.classList.add('header__container--on600');
// }

// if (header.classList.contains('header--sticky')) {
//   headerContainer.style = "padding-top:50px";
// } else {
//   headerContainer.style = "padding-top:74px";
// }


// console.log(window.innerWidth)

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuClose = document.getElementById('mobile-menu-close');
console.log(mobileMenu)

mobileMenuOpen.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu--open');
});

mobileMenuClose.addEventListener('click', function () {
  mobileMenu.classList.remove('mobile-menu--open');
  event.preventDefault();
})

