const crossButton = document.querySelector('.overlay-cross-button');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navHamIcon = document.querySelector('.navigate');
const mobileMenuLinks = document.querySelectorAll('.list-item > a');

function hideMobileMenu() {
  requestAnimationFrame(() => {
    mobileMenuOverlay.style.left = '100%';
    mobileMenuOverlay.style.display = 'none';
  });
}

navHamIcon.addEventListener('click', () => {
  mobileMenuOverlay.style.left = '0%';
  mobileMenuOverlay.style.display = 'flex';
});

crossButton.addEventListener('click', () => {
  hideMobileMenu();
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    hideMobileMenu();
  });
});

// const navBtn = document.querySelector('nav button');
// const overlay = document.querySelector('.mobile-menu-overlay');
// const navList = document.querySelectorAll('.overlay-list a');
// const menuButton = document.querySelector('#menu');

// navBtn.addEventListener('click', () => {
//   overlay.classList.toggle('mobile-menu-overlay1');
//   menuButton.classList.toggle('navigate');
//   menuButton.classList.toggle('overlay-cross-button');
// });

// navList.forEach((a) => {
//   a.addEventListener('click', () => {
//     if (overlay.classList.contains('mobile-menu-overlay1')) {
//       overlay.classList.value = 'mobile-menu-overlay';
//       menuButton.classList.value = 'overlay-cross-button';
//     }
//   });
// });
