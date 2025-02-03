import './scss/style.scss';

const body = document.querySelector('body');
const main = document.querySelector('main');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".header__link");

  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#") && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      document.body.style.opacity = "0"; // Fade out instantly

      setTimeout(() => {
        window.location.href = href;
      }, 500); // Matches transition time
    }
  });
});





function openMobileMenu() {
  console.log('open menu');

  btnOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  btnClose.focus();
}

function closeMobileMenu() {
  console.log('close menu');

  btnOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert');
  btnOpen.focus();
}

function setupNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');

    navContent.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    // is desktop
    console.log('is desktop');

    navContent.removeAttribute('inert');
    main.removeAttribute('inert');

    navContent.style.display = '';
  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);

btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupNav(e);
});

document.addEventListener('keyup', (e) => {
  if (e.key == 'Tab') {
    console.log(document.activeElement);
  }
});


// load-header.js
