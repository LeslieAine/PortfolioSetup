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

