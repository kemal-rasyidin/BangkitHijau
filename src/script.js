// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
  fungsiscroll();
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
  const targetElement = event.target;

  if (!navMenu.contains(targetElement) && !hamburger.contains(targetElement)) {
    navMenu.classList.add('hidden');
    hamburger.classList.remove('hamburger-active');
  }
});

// User Photo
const userPhoto = document.querySelector('#user-photo');
const navUser = document.querySelector('#nav-user');

userPhoto.addEventListener('click', function () {
  navUser.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
  const targetElement = event.target;

  if (!navUser.contains(targetElement) && !userPhoto.contains(targetElement)) {
    navUser.classList.add('hidden');
  }
});

// Events
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.eventsSwiper', {
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 3000,
  });
});

// News
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.newsSwiper', {
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      // 1280: {
      //   slidesPerView: 4,
      // },
    },
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 3000,
  });
});

// Video
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.videoSwiper', {
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      // 1280: {
      //   slidesPerView: 4,
      // },
    },
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 3000,
  });
});

// Story
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.storySwiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    stopOnLastSlide: false,
    speed: 3000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

// FAQ
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach((details) => {
  details.addEventListener('click', () => {
    detailsElements.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.removeAttribute('open');
      }
    });
  });
});

// backtotop
let tombol = document.getElementById('backtotopp');

function fungsiscroll() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    tombol.style.display = 'block';
  } else {
    tombol.style.display = 'none';
  }
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// search berita-acara
function search() {
  var input, filter, swiper, slides, slide, a, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    swiper = document.querySelector('.newsSwiper');
    slides = swiper.getElementsByClassName('swiper-slide');

    for (i = 0; i < slides.length; i++) {
      slide = slides[i];
      a = slide.getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        slide.style.display = '';
      } else {
        slide.style.display = 'none';
      }
    }
}
