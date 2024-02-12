const menuToggle = document.querySelector('header .menu-toggle input');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
