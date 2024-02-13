const menuToggle = document.querySelector('header .menu-toggle input');
const nav = document.querySelector('header nav ul');
const navList = document.querySelectorAll('header nav ul li a');
const input = document.querySelector('header nav input');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

navList.forEach((item) => {
  item.addEventListener('click', function () {
    nav.classList.remove('slide');
    input.checked = false;
  });
});
