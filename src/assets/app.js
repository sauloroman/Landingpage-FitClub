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
const animation = new ScrollReveal({ reset: true, duration: 2500, delay: 800 })

animation.reveal(`.heading-primary`, { distance: '10px', origin: 'top', scale: 1.05, delay: 600 } );
animation.reveal( document.querySelector('#button-started'), { scale: 1.05 } );
animation.reveal(`.hero__image-box`, { distance: '10px', origin: 'bottom', delay: 600 } );
animation.reveal(`.trainers__image`, { distance: '10px', origin: 'bottom', delay: 600 } );
animation.reveal(`.features`, { distance: '60px', origin: 'top' } );
animation.reveal(`.about`, { distance: '60px', origin: 'bottom' } );
animation.reveal(`.classes__card` );
animation.reveal(`.classes__high` );
