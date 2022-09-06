let openBtn = document.querySelector('.header__button');
let rightsideMenu = document.querySelector('.rightside-menu');
let closeBtn = document.querySelector('.rightside-menu__close');

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
	rightsideMenu.classList.add("active");
};

function closeMenu() {
	rightsideMenu.classList.remove("active");
};