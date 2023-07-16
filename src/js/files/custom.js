import { bodyLockStatus, bodyLockToggle, bodyUnlock, bodyLock } from "./functions.js";

const form__viewpass = document.querySelectorAll(".form__viewpass");

form__viewpass.forEach(elem => {

	elem.onclick = (e) => {
		e.preventDefault()
		let inputType = elem.classList.contains('active') ? "password" : 'text';
		elem.previousSibling.previousSibling.setAttribute("type", inputType);
		elem.classList.toggle('active');
	}
})

function bodyLockMain() {
	let body = document.querySelector("body");

	let lock_padding = document.querySelectorAll("[data-lp]");

	for (let index = 0; index < lock_padding.length; index++) {
		const el = lock_padding[index];
		el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	}
	body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	document.documentElement.classList.add("lock");

	console.log("bloked")
}

function bodyUnlockMain() {
	let body = document.querySelector("body");
	let lock_padding = document.querySelectorAll("[data-lp]");

	for (let index = 0; index < lock_padding.length; index++) {
		const el = lock_padding[index];
		el.style.paddingRight = '0px';
	}

	body.style.paddingRight = '0px';
	document.documentElement.classList.remove("lock");

	console.log("UN_bloked")
}

let showedWindow = ""

// Каталог
const header = document.querySelector('.header');
const catBtnAll = document.getElementById('catBtn');
const catBtnCl = document.getElementById('catBtnCl');
const headerMenuCatalog = document.getElementById('header-menu-catalog');
const iconMenu = document.getElementById('iconMenu');
const shadow = document.querySelector('.shadow');

function toggleCatalog() {

	if (showedWindow == "searchFormInput") toggleSearch()

	headerMenuCatalog.classList.toggle("_active");
	iconMenu.classList.toggle('_active');
	shadow.classList.toggle('_active');
	header.classList.toggle('_active');
	showedWindow = (headerMenuCatalog.classList.contains("_active")) ? "headerMenuCatalog" : ""
	console.log("Открыто: " + showedWindow)

	if (showedWindow == "headerMenuCatalog")
		bodyLockMain()
	else
		bodyUnlockMain()
}

catBtnAll.onclick = (e) => {
	e.preventDefault()
	toggleCatalog()
}

catBtnCl.onclick = (e) => {
	e.preventDefault()
	toggleCatalog()
}


// if (catBtnCl) {
// 	catBtnCl.addEventListener('click', function () {
// 		iconMenu.classList.remove('_active');
// 		headerMenuCatalog.classList.remove('_active');
// 		header.classList.remove('_active');
// 	});
// }

// MainMobMenu =====================================================================================================================================
const MainMobMenu = document.querySelector('.main-mob-menu');
const MainMobMenuCl = document.querySelector('.main-mob-menu__close');
const headerMenuBurger = document.querySelector('.header__menu-burger');
const btnCatMob = document.getElementById('btnCatMob');

if (headerMenuBurger) {
	headerMenuBurger.addEventListener('click', function () {
		MainMobMenu.classList.add('_active');

	});
}
if (MainMobMenuCl) {
	MainMobMenuCl.addEventListener('click', function () {
		MainMobMenu.classList.remove('_active');
		shadow.classList.remove('_active');
	});
}
if (btnCatMob) {
	btnCatMob.addEventListener('click', function () {
		MainMobMenu.classList.remove('_active');
		iconMenu.classList.add('_active');
		headerMenuCatalog.classList.add("_active");
	});
}
// Поиск ==========================================================================================================================
const searchFormInput = document.getElementById('searchFormInput');
const search = document.querySelector(".search-form");
const searchMenu = document.querySelector(".menu-search");
const searchBtnClosed = document.querySelector(".search-form__btn-closed");

const interFacelinkText = document.querySelectorAll(".interface__link-text");

function toggleSearch() {

	if (showedWindow == "headerMenuCatalog") toggleCatalog()

	searchFormInput.classList.toggle("_active")
	search.classList.toggle("_active");
	searchMenu.classList.toggle("_active");
	searchBtnClosed.classList.toggle("_active");
	shadow.classList.toggle('_active');
	shadow.style.zIndex = '150';
	header.classList.toggle('_before');
	interFacelinkText.forEach(linkText => {
		linkText.classList.toggle("_none");
	})
	showedWindow = (searchFormInput.classList.contains("_active")) ? "searchFormInput" : ""
	console.log("Открыто: " + showedWindow)
	if (showedWindow == "searchFormInput")
		bodyLockMain()
	else
		bodyUnlockMain()
}

searchFormInput.onclick = (e) => {
	e.preventDefault()
	toggleSearch()
}

searchBtnClosed.onclick = (e) => {
	e.preventDefault()
	toggleSearch()
}

if (document.documentElement.clientWidth > 1024) {
	document.addEventListener("DOMContentLoaded", () => {
		window.onkeydown = function (event) {
			console.log(event.keyCode)
			console.log(showedWindow)
			if (event.keyCode == 27) {
				if (showedWindow == "headerMenuCatalog") toggleCatalog()
				if (showedWindow == "searchFormInput") toggleSearch()
				if (showedWindow == "physicalListPerson") toggleMyLists()
				if (showedWindow == "multicorzineLegalEntity") toggleMultyBascet()
			}
		};
	})
}
if (shadow) {
	shadow.addEventListener('click', function () {
		toggleCatalog()
		console.log("shadow")
	});
}
// Menu Catalog ======================================================================================================================================================================
if (document.documentElement.clientWidth > 768) {
	const catalogMenuItems = document.querySelectorAll('.menu-catalog__body .menu-lineBlock__item');

	if (catalogMenuItems.length > 0) {
		catalogMenuItems.forEach((item, index) => {
			item.addEventListener('mouseenter', () => {
				let wrappers = document.querySelectorAll('.menu-catalog__sub-menu__wrapper');
				let id = item.getAttribute('data-id');

				if (wrappers.length > 0) {
					wrappers.forEach((w) => {
						if (id == w.getAttribute('data-id')) {
							w.classList.add('active');
						} else {
							w.classList.remove('active');
						}
					});
				}
			});
		});
	}
} else {
	const catalogMenuItems = document.querySelectorAll('.menu-lineBlock__item svg');

	if (catalogMenuItems.length > 0) {
		catalogMenuItems.forEach((item, index) => {
			item.addEventListener('click', () => {
				let wrappers = document.querySelectorAll('.menu-catalog__body');
				let id = item.closest('.menu-lineBlock__item').getAttribute('data-id');

				if (wrappers.length > 0) {
					wrappers.forEach((w) => {
						if (id == w.getAttribute('data-id')) {
							w.classList.remove('drop-menu-catalog');
						} else {
							w.classList.add('drop-menu-catalog');
						}
					});
				}
			});
		});

		const catalogMenuBacks = document.querySelectorAll('.drop-menu-catalog__btn-back');

		catalogMenuBacks.forEach((item, index) => {
			item.addEventListener('click', () => {
				item.closest('.menu-catalog__body').classList.add('drop-menu-catalog');

				let item0 = document.querySelector('.menu-catalog__body[data-id="0"]');

				item0?.classList.remove('drop-menu-catalog');

			});
			catBtnCl.addEventListener('click', () => {
				item.closest('.menu-catalog__body').classList.add('drop-menu-catalog');

				let item0 = document.querySelector('.menu-catalog__body[data-id="0"]');

				item0?.classList.remove('drop-menu-catalog');

			});
		});
	}
}
// Search =====================================================================================================================================
// const lineBlockBlk = document.querySelector(".lineBlock-blk");
// // const search = document.querySelector(".search-form");
// // const searchInput = document.querySelector(".search-form__input");
// // const searchMenu = document.querySelector(".menu-search");
// // const searchBtnClosed = document.querySelector(".search-form__btn-closed");
// const headerSearchFxCl = document.querySelector(".header__search-fix-closed");
// // const interFacelinkText = document.querySelectorAll(".interface__link-text");

// interFacelinkText.forEach(linkText => {

// 	headerSearchFxCl.addEventListener('click', function () {
// 		search.classList.remove("_active");
// 		searchMenu.classList.remove("_active");
// 		searchBtnClosed.classList.remove("_active");
// 		linkText.classList.remove("_none");
// 		// lineBlockBlk.classList.remove('_active');
// 		// header.classList.remove('_active');
// 		// bodyLockToggle();
// 		bodyUnlock();
// 	})
// })
// Всплывающие меню при наведении ===================================================================================================================
const menuLineBlockItem = document.querySelectorAll('.menu-lineBlock__item');
const lineBlockBlk = document.querySelector(".lineBlock-blk");
// const lineBlockBlk = document.querySelector('.lineBlock-blk');
if (document.documentElement.clientWidth > 1024) {
	// function menuHover() {
	for (let i = 0; i < menuLineBlockItem.length; i++) {
		menuLineBlockItem[i].addEventListener('mouseenter', (e) => {
			let child = menuLineBlockItem[i].getElementsByClassName('sub-list')[0];
			child.classList.add('_active');
			lineBlockBlk.classList.add('_active');
			// bodyLockToggle();
		})
		menuLineBlockItem[i].addEventListener('mouseleave', () => {
			let child = menuLineBlockItem[i].getElementsByClassName('sub-list')[0];
			child.classList.remove('_active');
			lineBlockBlk.classList.remove('_active');
			// bodyLockToggle();
		})
	}
	// }
	// menuHover();
}
// Open multicorzine ======================================================================================================================================================================================

const headerLegalBascetIcon = document.querySelector('.header-legal-bascet-icon');
const multicorzineLegalEntity = document.querySelector('.physical-list-person');
const multicorClose = document.querySelector('.multicorzine-legal-entity__btn-close');

function toggleMultyBascet() {
	multicorzineLegalEntity.classList.toggle("_active");
	shadow.classList.toggle('_active');

	showedWindow = (multicorzineLegalEntity.classList.contains("_active")) ? "multicorzineLegalEntity" : ""
	console.log("Открыто: " + showedWindow)

	if (showedWindow == "multicorzineLegalEntity")
		bodyLockMain()
	else
		bodyUnlockMain()

}

// function toggleMulticorzine() {

if (headerLegalBascetIcon) {
	headerLegalBascetIcon.addEventListener('click', function () {
		// multicorzineLegalEntity.classList.add('_active');
		// shadow.classList.add('_active');
		// bodyLockToggle()
		toggleMultyBascet()
	});
}
if (multicorClose) {
	multicorClose.addEventListener('click', function () {
		// multicorzineLegalEntity.classList.remove('_active');
		// shadow.classList.remove('_active');
		// bodyLockToggle()
		toggleMultyBascet()
	});
}
// }
// Мои списки =============================================================================================================================================================================================
const physicalListPerson = document.querySelector('.physical-list-person');
const newListsCard = document.querySelectorAll('.new-lists__card');
const backBtn = document.getElementById('back-btn');
const physicalCl = document.getElementById('physical-close');

newListsCard.forEach((item) => {
	item.addEventListener("click", function () {
		// physicalListPerson.classList.add("_active");
		// shadow.classList.add('_active');
		// bodyLockToggle();
		toggleMyLists();
	});
});

function toggleMyLists() {
	physicalListPerson.classList.toggle("_active");
	shadow.classList.toggle('_active');

	showedWindow = (physicalListPerson.classList.contains("_active")) ? "physicalListPerson" : ""
	console.log("Открыто: " + showedWindow)

	if (showedWindow == "physicalListPerson")
		bodyLockMain()
	else
		bodyUnlockMain()

}

if (backBtn) {
	backBtn.addEventListener('click', function () {
		// physicalListPerson.classList.remove('_active');
		// shadow.classList.remove('_active');
		// bodyLockToggle();
		toggleMyLists();
	}
	);
}

if (physicalCl) {
	physicalCl.addEventListener('click', function () {
		// physicalListPerson.classList.remove('_active');
		// shadow.classList.remove('_active');
		// bodyLockToggle();
		toggleMyLists();
	});
}