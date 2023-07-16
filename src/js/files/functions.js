/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
/* Проверка мобильного браузера */
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
export function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
// Добавление loaded для HTML после полной загрузки страницы
export function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
// Получение хеша в адресе сайта
export function getHash() {
	if (location.hash) { return location.hash.replace('#', ''); }
}
// Указание хеша в адресе сайта
export function setHash(hash) {
	history.pushState('', '', hash);
}
// Учет плавающей панели на мобильных устройствах при 100vh
export function fullVHfix() {
	const fullScreens = document.querySelectorAll('[data-fullscreen]');
	if (fullScreens.length && isMobile.any()) {
		window.addEventListener('resize', fixHeight);
		function fixHeight() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
		fixHeight();
	}
}
// Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
export let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
export let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
export let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
export let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
// Модуь работы со спойлерами =======================================================================================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
export function spollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});
		// Инициализация слойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});
			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});
			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addEventListener("change", function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(spollerTitle.nextElementSibling, 500);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, 500);
			}
		}
	}
}
// Модуь работы с табами =======================================================================================================================================================================================================================
/*
Для родителя табов пишем атрибут data-tabs
Для родителя заголовков табов пишем атрибут data-tabs-titles
Для родителя блоков табов пишем атрибут data-tabs-body

Если нужно чтобы табы открывались с анимацией 
добавляем к data-tabs data-tabs-animate
По умолчанию, скорость анимации 500ms, 
указать свою скорость можно так: data-tabs-animate="1000"

Если нужно чтобы табы превращались в "спойлеры" на неком размере экранов пишем параметры ширины.
Например: data-tabs="992" - табы будут превращаться в спойлеры на экранах меньше или равно 992px
*/
export function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	let tabsActiveHash = [];

	if (tabs.length > 0) {
		const hash = location.hash.replace('#', '');
		if (hash.startsWith('tab-')) {
			tabsActiveHash = hash.replace('tab-', '').split('-');
		}
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener("click", setTabsAction);
			initTabs(tabsBlock);
		});

		// Получение табов с медиа запросами
		const tabsMedia = Array.from(tabs).filter(function (item, index, self) {
			return item.dataset.tabs;
		});
		// Инициализация табов с медиа запросами
		if (tabsMedia.length > 0) {
			initMediaTabs(tabsMedia);
		}
	}
	// Инициализация табов с медиа запросами
	function initMediaTabs(tabsMedia) {
		const breakpointsArray = [];
		tabsMedia.forEach(item => {
			const breakpointValue = item.dataset.tabs;

			const tabsBreakpointsObject = {};
			tabsBreakpointsObject.value = breakpointValue;
			tabsBreakpointsObject.item = item;

			breakpointsArray.push(tabsBreakpointsObject);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return `(max-width:${item.value}px),${item.value}`;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const matchMedia = window.matchMedia(paramsArray[0]);
			const mediaBreakpoint = paramsArray[1];

			// Объекты с нужными условиями
			const tabsMediaArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint) {
					return true;
				}
			});

			// Событие
			matchMedia.addEventListener("change", function () {
				setTitlePosition(tabsMediaArray, matchMedia);
			});
			setTitlePosition(tabsMediaArray, matchMedia);
		});
	}
	// Установка позиций заголовков
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			tabsMediaItem = tabsMediaItem.item;
			const tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			const tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			const tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			const tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Работа с контентом
	function initTabs(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		if (tabsActiveHashBlock) {
			const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._tab-active');
			tabsActiveTitle.classList.remove('_tab-active');
		}
		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
					tabsTitles[index].classList.add('_tab-active');
				}
				tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0 ? tabsBlock.dataset.tabsAnimate : 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);

		if (tabsContent.length > 0) {
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('_tab-active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
					}
					location.hash = `tab-${tabsBlockIndex}-${index}`;
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]')) {
			const tabTitle = el.closest('[data-tabs-title]');
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelectorAll('._slide').length) {

				const tabActiveTitle = tabsBlock.querySelector('[data-tabs-title]._tab-active');
				if (tabActiveTitle) {
					tabActiveTitle.classList.remove('_tab-active');
				}

				tabTitle.classList.add('_tab-active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}
}
// Модуь работы с меню (бургер) =======================================================================================================================================================================================================================
export function menuInit() {
	// 	const header = document.querySelector(".header");
	// 	// const catBtn = document.getElementById('catBtn');
	// 	const catBtnCl = document.getElementById('catBtnCl');
	// 	const iconMenu = document.getElementById('iconMenu');
	// 	const menuCatalog = document.querySelector('.menu-catalog');
	// 	const buttonCat = document.querySelectorAll(".button-catalog");
	// 	buttonCat.forEach(buttonCat => {
	// 		if (buttonCat) {
	// 			buttonCat.addEventListener("click", function (e) {
	// 				if (bodyLockStatus) {
	// 					iconMenu.classList.toggle('_active');
	// 					menuCatalog.classList.toggle('_active');
	// 					header.classList.toggle('_before');
	// 					bodyLockToggle();
	// 					// document.documentElement.classList.toggle("menu-open");
	// 				}
	// 			});
	// 		};
	// 		if (catBtnCl) {
	// 			catBtnCl.addEventListener('click', function () {
	// 				iconMenu.classList.remove('_active');
	// 				menuCatalog.classList.remove('_active');
	// 				header.classList.remove('_before');
	// 				// bodyLockToggle();
	// 				bodyUnlock();
	// 			});
	// 		}
	// 	})
	// 	// Модуль закрытия по ESC 
	// 	window.onkeydown = function (event) {
	// 		if (event.keyCode == 27) {
	// 			iconMenu.classList.remove('_active');
	// 			menuCatalog.classList.remove('_active');
	// 			header.classList.remove('_before');
	// 			bodyUnlock();
	// 			console.log('escape click');
	// 		}
	// 	};
}
export function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}
// // Search =====================================================================================================================================
// const lineBlockBlk = document.querySelector(".lineBlock-blk");
// const search = document.querySelector(".search-form");
// const searchInput = document.querySelector(".search-form__input");
// const searchMenu = document.querySelector(".menu-search");
// const searchBtnClosed = document.querySelector(".search-form__btn-closed");
// const headerSearchFxCl = document.querySelector(".header__search-fix-closed");
// const interFacelinkText = document.querySelectorAll(".interface__link-text");

// interFacelinkText.forEach(linkText => {
// 	searchInput.addEventListener('click', function () {
// 		search.classList.add("_active");
// 		searchMenu.classList.add("_active");
// 		searchBtnClosed.classList.add("_active");
// 		linkText.classList.add("_none");
// 		// lineBlockBlk.classList.add('_active');
// 		// header.classList.add('_active');
// 		bodyLock();
// 		// bodyLockToggle();
// 	})
// 	searchBtnClosed.addEventListener('click', function () {
// 		search.classList.remove("_active");
// 		searchMenu.classList.remove("_active");
// 		searchBtnClosed.classList.remove("_active");
// 		linkText.classList.remove("_none");
// 		// lineBlockBlk.classList.remove('_active');
// 		// header.classList.remove('_active');
// 		// bodyLockToggle();
// 		bodyUnlock();
// 		window.onkeydown = function (event) {
// 			if (event.keyCode == 27) {
// 				search.classList.remove("_active");
// 				searchMenu.classList.remove("_active");
// 				searchBtnClosed.classList.remove("_active");
// 				linkText.classList.remove("_none");
// 				// lineBlockBlk.classList.remove('_active');
// 				// bodyLockToggle();
// 				bodyUnlock();
// 				console.log('escape click');
// 			}
// 		};
// 	})
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
// const menuLineBlockItem = document.querySelectorAll('.menu-lineBlock__item');
// const lineBlockBlk = document.querySelector('.lineBlock-blk');
// if (document.documentElement.clientWidth > 1024) {
// 	function menuHover() {
// 		for (let i = 0; i < menuLineBlockItem.length; i++) {
// 			menuLineBlockItem[i].addEventListener('mouseenter', (e) => {
// 				let child = menuLineBlockItem[i].getElementsByClassName('sub-list')[0];
// 				child.classList.add('_active');
// 				lineBlockBlk.classList.add('_active');
// 				bodyLockToggle();
// 			})
// 			menuLineBlockItem[i].addEventListener('mouseleave', () => {
// 				let child = menuLineBlockItem[i].getElementsByClassName('sub-list')[0];
// 				child.classList.remove('_active');
// 				lineBlockBlk.classList.remove('_active');
// 				bodyLockToggle();
// 			})
// 		}
// 	}
// 	menuHover();
// }
// // Мои списки =============================================================================================================================================================================================
// const physicalListPerson = document.querySelector('.physical-list-person'); 
// const newListsCard = document.querySelectorAll('.new-lists__card');
// const backBtn = document.getElementById('back-btn');
// const physicalCl = document.getElementById('physical-close');

// newListsCard.forEach((item) => {
// 	item.addEventListener("click", function () {
// 		physicalListPerson.classList.add("_active");
// 		bodyLockToggle();
// 		blackout();
// 	});
// });

// if (backBtn) {
// 	backBtn.addEventListener('click', function () {
// 		physicalListPerson.classList.remove('_active');
// 		bodyLockToggle();
// 		blackout();
// 	});
// }

// if (physicalCl) {
// 	physicalCl.addEventListener('click', function () {
// 		physicalListPerson.classList.remove('_active');
// 		bodyLockToggle();
// 		blackout();
// 	});
// }
// Открыть/закрыть catalog в header ==========================================================================================================================
// const header = document.querySelector(".header");
// const catBtn = document.getElementById('catBtn');
// const catBtnCl = document.getElementById('catBtnCl');
// const iconMenu = document.getElementById('iconMenu');
// const menuCatalog = document.querySelector('.menu-catalog');

// if (catBtn) {
// 	catBtn.addEventListener('click', function () { 
// 		iconMenu.classList.toggle('_active');
// 		menuCatalog.classList.toggle('_active');
// 		header.classList.toggle('_before');
// 		// bodyLock();
// 	});
// }
// if (catBtnCl) {
// 	catBtnCl.addEventListener('click', function () {
// 		iconMenu.classList.remove('_active');
// 		menuCatalog.classList.remove('_active');
// 		header.classList.remove('_before');
// 		// bodyUnlock();
// 	});
// }


// catBtn.addEventListener('click', foo);
// function foo() {
// 	if (catBtn) {
// 		iconMenu.classList.toggle('_active');
// 		menuCatalog.classList.toggle('_active');
// 		header.classList.toggle('_before');
// 		bodyLock();
// 	} else {
// 		bodyUnlock();
// 	}

// }

// // MainMobMenu =====================================================================================================================================
// const MainMobMenu = document.querySelector('.main-mob-menu');
// const MainMobMenuCl = document.querySelector('.main-mob-menu__close');
// const headerMenuBurger = document.querySelector('.header__menu-burger');
// const btnCatMob = document.getElementById('btnCatMob');

// if (headerMenuBurger) {
// 	headerMenuBurger.addEventListener('click', function () {
// 		MainMobMenu.classList.add('_active');
// 		bodyLockToggle();
// 	});
// }
// if (MainMobMenuCl) {
// 	MainMobMenuCl.addEventListener('click', function () {
// 		MainMobMenu.classList.remove('_active');
// 		bodyLockToggle();
// 	});
// }
// if (btnCatMob) {
// 	btnCatMob.addEventListener('click', function () {
// 		MainMobMenu.classList.remove('_active');
// 		iconMenu.classList.add('_active');
// 		menuCatalog.classList.add('_active');
// 		header.classList.add('_before');
// 	});
// }
// cat-search ================================================================================================================================================================
// const catEntityInp = document.getElementById('cat-entity-input');
// const catEntityCl = document.getElementById('cat-entity-cl');
// const catEntityMenuSearch = document.getElementById('cat-entity-menu-search');

// if (catEntityInp) {
// 	catEntityInp.addEventListener('click', function () {
// 		catEntityMenuSearch.classList.add('_active');
// 		catEntityCl.classList.add('_active');
// 	});
// }
// if (catEntityCl) {
// 	catEntityCl.addEventListener('click', function () {
// 		catEntityMenuSearch.classList.remove('_active');
// 		catEntityCl.classList.remove('_active');
// 	});
// }
// FiltersMob =========================================================================================================================================================================================
const filterMobFl = document.querySelector('.filter-mob-block__btn_fl');
const filterMobSl = document.querySelector('.filter-mob-block__btn_sl');
const filtersMobCl = document.querySelector('.filters-mob-menu__header-close');
const filtersMobMenu = document.querySelector('.filters-mob-menu');
const selectMobMenu = document.querySelector('.select-mob-menu');
const filtrContrMobFiX = document.querySelector('.filter-controll-mob-fixed');
const menuListItemElems = document.querySelector(".select-mob-menu__list");

if (filterMobFl) {
	filterMobFl.addEventListener('click', function () {
		filtersMobMenu.classList.add('_active');
		filtrContrMobFiX.classList.add('_active');
		bodyLockToggle();
	});
}
if (filtersMobCl) {
	filtersMobCl.addEventListener('click', function () {
		filtersMobMenu.classList.remove('_active');
		filtrContrMobFiX.classList.remove('_active');
		bodyLockToggle();
	});
}
if (filterMobSl) {
	filterMobSl.addEventListener('click', function () {
		selectMobMenu.classList.add('_active');
		blackout();
		bodyLockToggle();
	});
}
if (menuListItemElems) {
	menuListItemElems.addEventListener("click", function () {
		selectMobMenu.classList.remove('_active');
		bodyLockToggle();
		blackout();
	});
}

// document.addEventListener('click', outsideEvtListener);

// function outsideEvtListener(evt) {
// 	if (evt.target === selectMobMenu || selectMobMenu.contains(evt.target)) {
// 		// клик внутри
// 		return;
// 	}
// 	selectMobMenu.classList.remove('_active');
// 	// код для закрытия меню, например el.classList.add('hidden')

// 	// не забыть убрать слушатель событий (не для каждой имплементации требуется)
// 	document.removeEventListener(outsideEvtListener);
// }
// Product Preview =====================================================================================================================================================================================
const prodPrew = document.getElementById('prodPrew');
const prodPrewCl = document.getElementById('prodPrewCl');
const catEntityMbCard = document.querySelector('.catalog-entity-mob__card');

if (catEntityMbCard) {
	catEntityMbCard.addEventListener('click', function () {
		prodPrew.classList.add('_active');
		bodyLockToggle();
	});
}
if (prodPrewCl) {
	prodPrewCl.addEventListener('click', function () {
		prodPrew.classList.remove('_active');
		bodyLockToggle();
	});
}
// MulticorzineMobFxed ==================================================================================================================================================================================
const multicorzineMobFxed = document.getElementById('multicorzineMobFxed');
const MobfixedMenuFt = document.getElementById('MobfixedMenuFt');

if (MobfixedMenuFt) {
	MobfixedMenuFt.addEventListener('click', function () {
		multicorzineMobFxed.classList.toggle('_active');
		bodyLockToggle();
		blackout();
	});
}
// Модуль затемнения =====================================================================================================================================================================================
function blackout() {
	const element = document.querySelector("body");
	element.classList.toggle('_before');
}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-showmore="size/items"
data-showmore-content="размер/кол-во"
data-showmore-button="скорость"
Сниппет (HTML): showmore
*/
export function showMore() {
	const showMoreBlocks = document.querySelectorAll('[data-showmore]');
	if (showMoreBlocks.length) {
		initItems(showMoreBlocks);
		document.addEventListener("click", showMoreActions);
		window.addEventListener("resize", showMoreActions);
	}
	function initItems(showMoreBlocks) {
		showMoreBlocks.forEach(showMoreBlock => {
			initItem(showMoreBlock);
		});
	}
	function initItem(showMoreBlock) {
		const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
		const showMoreButton = showMoreBlock.querySelector('[data-showmore-button]');
		const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
		if (hiddenHeight < getOriginalHeight(showMoreContent)) {
			_slideUp(showMoreContent, 0, hiddenHeight);
			showMoreButton.hidden = false;
		}
	}
	function getHeight(showMoreBlock, showMoreContent) {
		let hiddenHeight = 0;
		const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : 'size';
		if (showMoreType === 'items') {
			const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
			const showMoreItems = showMoreContent.children;
			for (let index = 1; index < showMoreItems.length; index++) {
				const showMoreItem = showMoreItems[index - 1];
				hiddenHeight += showMoreItem.offsetHeight;
				if (index === showMoreTypeValue) break;
			}
		} else {
			const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
			hiddenHeight = showMoreTypeValue;
		}
		return hiddenHeight;
	}
	function getOriginalHeight(showMoreContent) {
		let hiddenHeight = showMoreContent.offsetHeight;
		showMoreContent.style.removeProperty('height');
		let originalHeight = showMoreContent.offsetHeight;
		showMoreContent.style.height = `${hiddenHeight}px`;
		return originalHeight;
	}
	function showMoreActions(e) {
		const targetEvent = e.target;
		const targetType = e.type;
		if (targetType === 'click') {
			if (targetEvent.closest('[data-showmore-button]')) {
				const showMoreButton = targetEvent.closest('[data-showmore-button]');
				const showMoreBlock = showMoreButton.closest('[data-showmore]');
				const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
				const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : '500';
				const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
				if (!showMoreContent.classList.contains('_slide')) {
					showMoreBlock.classList.contains('_showmore-active') ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
					showMoreBlock.classList.toggle('_showmore-active');
				}
			}
		} else if (targetType === 'resize') {
			initItems(showMoreBlocks);
		}
	}
}

// Модуль попапов ===========================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-popup - Атрибут для кнопки, которая вызывает попап
data-close - Атрибут для кнопки, которая закрывает попап
data-youtube - Атрибут для кода youtube
Сниппет (HTML): pl
*/
import { Popup } from "../libs/popup.js";
export const initPopups = (logging = false, init = true) => new Popup({ logging: logging, init: init });

//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

// Получить цифры из строки
export function getDigFromString(item) {
	return parseInt(item.replace(/[^\d]/g, ''))
}
// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
// Убрать класс из всех элементов массива
export function removeClasses(array, className) {
	for (var i = 0; i < array.length; i++) {
		array[i].classList.remove(className);
	}
}
// Уникализация массива
export function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
// Функция получения индекса внутри родителя
export function indexInParent(parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

//================================================================================================================================================================================================================================================================================================================