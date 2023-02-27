// ##################################
// SELECTORS
// ##################################

const openMenuButton = document.querySelector('.navigation__open');
const closeMenuButton = document.querySelector('.navigation__close');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.navigation__link');

// ##################################
// FUNCTIONS
// ##################################

const showHideMenu = function () {
  navigation.classList.toggle('show');
}

const scrollHeader = function () {
  if ( this.scrollY >= 150 ) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
}

// ##################################
// EVENT LISTENERS
// ##################################

openMenuButton.addEventListener('click', showHideMenu );
closeMenuButton.addEventListener('click', showHideMenu );

window.addEventListener('scroll', scrollHeader );

links.forEach( link => {
  link.addEventListener('click', () => navigation.classList.remove('show') );
})

// ##################################
// SCROLL REVEAL
// ##################################

ScrollReveal({ reset: true, duration: 2500, delay: 800 });
ScrollReveal().reveal( document.querySelector('#title'), { distance: '10px', origin: 'top', scale: 1.05, delay: 600 } );
ScrollReveal().reveal( document.querySelector('#button-started'), { scale: 1.05 } );
ScrollReveal().reveal( document.querySelector('#hero-image'), { distance: '10px', origin: 'left', delay: 600 } );
ScrollReveal().reveal( document.querySelector('#hero-image2'), { distance: '10px', origin: 'right', delay: 600 } );
ScrollReveal().reveal( document.querySelector('#features'), { distance: '60px', origin: 'top' } )
ScrollReveal().reveal( document.querySelector('#testimonials'), { distance: '60px', origin: 'top' } )
ScrollReveal().reveal( document.querySelector('#newsletter'), { distance: '60px', origin: 'top' } )
ScrollReveal().reveal( document.querySelector('#about'), { distance: '60px', origin: 'bottom' } )
ScrollReveal().reveal( document.querySelectorAll('.classes__card') );
ScrollReveal().reveal( document.querySelector('.classes__high') );
ScrollReveal().reveal( document.querySelectorAll('.trainers__image') );