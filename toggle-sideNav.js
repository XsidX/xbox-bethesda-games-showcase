const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.side-navigation');
const menuLinks = document.querySelectorAll('.menuc-link');


function toggleMobileMenu(element) {
  element.addEventListener('click', () => {
    const visibility = mobileMenu.getAttribute('data-visible')
    if (visibility === 'false') {
      mobileMenu.setAttribute('data-visible', true)
    } else {
      mobileMenu.setAttribute('data-visible', false)
    }
    hamburgerMenu.classList.toggle('menu-close')
    document.body.classList.toggle('no-scroll');
  });
}

toggleMobileMenu(hamburgerMenu);

menuLinks.forEach((link) => {
  toggleMobileMenu(link);
});