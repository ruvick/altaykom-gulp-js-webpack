// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
import { bodyLockStatus, bodyLockToggle } from "./functions.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// Скрипт будет срабатывать, когда весь контент на странице загрузится
// window.onload = function () {

// Input file
function getFileName() {
	var file = document.getElementById('myfile').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-name').innerHTML = '' + file;

	var file = document.getElementById('myfiles').value;
	file = file.replace(/\\/g, '/').split('/').pop();
	document.getElementById('file-names').innerHTML = '' + file;
}
// Меню корзины при наведении в шапке ======================================================================================================================================================================
// let linkBascet = document.querySelectorAll('.interface__link_bascet');
// let headerMulticorzine = document.querySelector('.header__multicorzine');

// for (let i = 0; i < linkBascet.length; i++) {
// 	linkBascet[i].addEventListener('mouseenter', (e) => {
// 		headerMulticorzine.style.display = 'flex';
// 	})
// 	linkBascet[i].addEventListener('mouseleave', () => {
// 		headerMulticorzine.style.display = 'none';
// 	})
// }

// Меню Мой кабинет =======================================================================================================================================================================================
// let interfacelinkEnter = document.querySelectorAll('.interface__link_enter');
// let headerMenuCabinet = document.querySelector('.header__menu-cabinet');

// for (let i = 0; i < interfacelinkEnter.length; i++) {
// 	interfacelinkEnter[i].addEventListener('mouseenter', (e) => {
// 		headerMenuCabinet.style.display = 'block';
// 	})
// 	headerMenuCabinet.addEventListener('mouseleave', () => {
// 		headerMenuCabinet.style.display = 'none';
// 	})
// }

// Меню Мой кабинет =======================================================================================================================================================================================
// let interfaceLinkLgPerson = document.querySelectorAll('.interface__link_lg-person');
// let headerCabinetLegPerson = document.querySelector('.header__cabinet-leg-person');

// for (let i = 0; i < interfaceLinkLgPerson.length; i++) {
// 	interfaceLinkLgPerson[i].addEventListener('mouseenter', (e) => {
// 		headerCabinetLegPerson.style.display = 'block';
// 	})
// 	headerCabinetLegPerson.addEventListener('mouseleave', () => {
// 		headerCabinetLegPerson.style.display = 'none';
// 	})
// }

// Переключение корзины в карточке товаров ======================================================================================================================================================================
const interAddingBascetBtn = document.querySelectorAll('.interactive-adding-bascet__button');

interAddingBascetBtn.forEach((btn, index) => {
	btn.addEventListener('click', () => {

		if (btn) {
			let interAddingBascet = btn.closest('.interactive-adding-bascet');

			if (!!interAddingBascet) {
				interAddingBascet.classList.add('none');
			}

			let interContainer = btn.closest('.card-product__interactive-adding');

			if (!!interContainer) {
				let interAddingQuantity = interContainer.querySelector('.interactive-adding-quantity');

				if (interAddingQuantity) {
					interAddingQuantity.classList.add('active');
				}
			}
		}
	})
})
// Переключение вида списка товаров ======================================================================================================================================================================
const productsViewToggle = document.querySelectorAll('.swith-control__btn');

if (productsViewToggle.length > 0) {
	productsViewToggle.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			let btns = document.querySelectorAll('.swith-control__btn');

			btns.forEach((b) => {
				if (b == btn) {
					b.classList.add('active');
				} else {
					b.classList.remove('active');
				}
			});

			let catalogEntity = document.querySelectorAll('.catEntity');
			let view = btn.getAttribute('data-view');

			if (catalogEntity.length > 0) {
				catalogEntity.forEach((ce) => {
					if (view == ce.getAttribute('data-view')) {
						ce.classList.add('active');
					} else {
						ce.classList.remove('active');
					}
				});
			}
		});
	});
}
// // Menu Catalog ======================================================================================================================================================================
// if (document.documentElement.clientWidth > 768) {
// 	const catalogMenuItems = document.querySelectorAll('.menu-catalog__body .menu-lineBlock__item');

// 	if (catalogMenuItems.length > 0) {
// 		catalogMenuItems.forEach((item, index) => {
// 			item.addEventListener('mouseenter', () => {
// 				let wrappers = document.querySelectorAll('.menu-catalog__sub-menu__wrapper');
// 				let id = item.getAttribute('data-id');

// 				if (wrappers.length > 0) {
// 					wrappers.forEach((w) => {
// 						if (id == w.getAttribute('data-id')) {
// 							w.classList.add('active');
// 						} else {
// 							w.classList.remove('active'); 
// 						}
// 					});
// 				}
// 			});
// 		});
// 	}
// } else {
// 	const catalogMenuItems = document.querySelectorAll('.menu-lineBlock__item svg');

// 	if (catalogMenuItems.length > 0) {
// 		catalogMenuItems.forEach((item, index) => {
// 			item.addEventListener('click', () => {
// 				let wrappers = document.querySelectorAll('.menu-catalog__body');
// 				let id = item.closest('.menu-lineBlock__item').getAttribute('data-id');

// 				if (wrappers.length > 0) {
// 					wrappers.forEach((w) => {
// 						if (id == w.getAttribute('data-id')) {
// 							w.classList.remove('drop-menu-catalog');
// 						} else {
// 							w.classList.add('drop-menu-catalog');
// 						}
// 					});
// 				}
// 			});
// 		});

// 		const catalogMenuBacks = document.querySelectorAll('.drop-menu-catalog__btn-back');

// 		catalogMenuBacks.forEach((item, index) => {
// 			item.addEventListener('click', () => {
// 				item.closest('.menu-catalog__body').classList.add('drop-menu-catalog');

// 				let item0 = document.querySelector('.menu-catalog__body[data-id="0"]');

// 				item0?.classList.remove('drop-menu-catalog');

// 			});
// 		});
// 	}
// }
// Открытие/закрытие сайдбара ======================================================================================================================================================================
const ManagementFiltersBtn = document.querySelector('.directory-management__filters-btn');
const pageSidebar = document.querySelector('.page__sidebar');
const pageMain = document.querySelector('.page__main');

if (ManagementFiltersBtn) {
	ManagementFiltersBtn.addEventListener('click', function () {
		// ManagementFiltersBtn.classList.togle('active');
		pageSidebar.classList.toggle('hide');
		pageMain.classList.toggle('width');
	});
}
// // Open multicorzine ======================================================================================================================================================================================
// const headerLegalBascetIcon = document.querySelector('.header-legal-bascet-icon');
// const multicorzineLegalEntity = document.querySelector('.multicorzine-legal-entity');
// const multicorClose = document.querySelector('.multicorzine-legal-entity__btn-close');

// if (headerLegalBascetIcon) {
// 	headerLegalBascetIcon.addEventListener('click', function () {
// 		multicorzineLegalEntity.classList.add('_active');
// 		shadow.classList.toggle('_active');
// 		bodyLockToggle()
// 	});
// }
// if (multicorClose) {
// 	multicorClose.addEventListener('click', function () {
// 		multicorzineLegalEntity.classList.remove('_active');
// 		shadow.classList.toggle('_active');
// 		bodyLockToggle()
// 	});
// }
// Range ================================================================================================================================================================================================
const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input => {
	input.addEventListener("input", e => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

		if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minPrice;
				range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});
rangeInput.forEach(input => {
	input.addEventListener("input", e => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);
		if ((maxVal - minVal) < priceGap) {
			if (e.target.className === "range-min") {
				rangeInput[0].value = maxVal - priceGap
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		}
	});
});
// Лайки ================================================================================================================================================================================================
const likeButtons = Array.from(document.querySelectorAll("._like-icon-btn"));
const likeCounts = Array.from(document.querySelectorAll("._like-icon-count"));

likeButtons.forEach((button, index) => {
	button.addEventListener("click", () => {
		button.classList.toggle("is-active");
		const current = Number(likeCounts[index].innerHTML);
		const inc = button.classList.contains("is-active") ? 1 : -1;
		likeCounts[index].innerHTML = current + inc;
	});
});

function hasTouch() {
	return 'ontouchstart' in document.documentElement
		|| navigator.maxTouchPoints > 0
		|| navigator.msMaxTouchPoints > 0;
}
// Отключаем hover на мобилках ==========================================================================================================================================================================
if (hasTouch()) {
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) { }
}

// Кнопка Наверх =========================================================================================================================================================================================
const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		// удалим у кнопки класс btn-up_hide
		this.el.classList.remove('btn-up_hide');
	},
	hide() {
		// добавим к кнопке класс btn-up_hide
		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 400 ? this.show() : this.hide();
		});
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').onclick = () => {
			// переместим в начало страницы
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
btnUp.addEventListener();
// ============================================================================================================================================================================================

// Открытие карточки товара в таблице юрлицо 
const catEntityTableTr = document.querySelector('.catalog-entity-table-tr');
const catEntityTableCard = document.querySelector('.catalog-entity-table-card');

if (catEntityTableTr) {
	catEntityTableTr.addEventListener('click', function () {
		catEntityTableCard.classList.toggle('_active');
	})
}

// Закрытие моб меню при клике вне области меню
// window.addEventListener('click', e => { // при клике в любом месте окна браузера
// 	const target = e.target // находим элемент, на котором был клик
// 	if (!target.closest('.catalog-entity-table-tr')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
// 		catEntityTableCard.classList.remove('_active');
// 	}
// })

// Actions (делегирование события click)
// document.addEventListener("click", documentActions);

// function documentActions(e) {
// 	const targetElement = e.target;
// 	if (targetElement.classList.contains('next')) {
// 		getProducts(targetElement);
// 		// e.preventDefault();
// 	}
// }

// Load More Products
// async function getProducts(button) {
// 	if (!button.classList.contains('_hold')) {
// 		button.classList.add('_hold');
// 		const file = "json/products.json";
// 		let response = await fetch(file, {
// 			method: "GET"
// 		});
// 		if (response.ok) {
// 			let result = await response.json();
// 			loadProducts(result);
// 			button.classList.remove('_hold');
// 			button.remove();
// 		} else {
// 			alert("Ошибка");
// 		}
// 	}
// }

// function loadProducts(data) {
// 	const productsItems = document.querySelector('.slider-info');

// 	data.products.forEach(item => {
// 		const productId = item.id;
// 		const productUrl = item.url;
// 		const productImage = item.image;
// 		const productTitle = item.title;
// 		const productQuantity = item.quantity;
// 		const productAvail = item.avail;
// 		const productPrice = item.price;
// 		const productPriceOld = item.priceOld;
// 		const producCategory = item.category;
// 		const productStHit = item.stHit;
// 		const productStSale = item.stSale;

// 		let productsTemplate = `
// 			<div data-pid="${productId}" class="main-prod-card__column">
// 			<div class="card-product">
// 				<div class="card-product__img">
// 					<div class="card-product__sticker-block">
// 						<span class="sticker-product">${productStHit}</span>
// 						<!-- <span class="sticker-product sticker-product_red"
// 								>${productStSale}</span
// 							> -->
// 						<button type="button" class="sticker-product-favorite">
// 							<svg class="sticker-product-favorite__icon">
// 								<use xlink:href="#favorites-product"></use>
// 							</svg>
// 						</button>
// 					</div>
// 					<img src="@img/card-product/${productImage}" alt="" />
// 					<div class="sticker-product-rating">
// 						<div class="sticker-product-rating__rating">
// 							<svg class="sticker-product-rating__icon">
// 								<use xlink:href="#rating-product"></use>
// 							</svg>
// 						</div>
// 						<div class="sticker-product-rating__value">5,0</div>
// 					</div>
// 				</div>
// 				<div class="card-product__descp">
// 					<div class="card-product__descp-group">${producCategory}</div>
// 					<a href="${productUrl}" class="card-product__descp-title">
// 						${productTitle}
// 					</a>
// 					<span class="card-product__descp-sticker sticker-product-value">4 кг</span>
// 				</div>
// 				<div class="card-product__interactive">
// 					<div class="card-product__interactive-how interactive-how_green">
// 						${productAvail}
// 					</div>
// 					<div class="card-product__interactive-price">
// 						<div class="card-product__interactive-price-new interactive-price-new_green rub">
// 							${productPrice}
// 						</div>
// 						<div class="card-product__interactive-price-old rub">
// 							${productPriceOld}
// 						</div>
// 					</div>

// 					<div class="card-product__interactive-adding">
// 						<div class="interactive-adding-bascet">
// 							<div class="interactive-adding-bascet__value">
// 								<div class="interactive-adding-bascet__value-quantity">
// 									${productQuantity}
// 								</div>
// 								<div class="interactive-adding-bascet__value-price rub">
// 									${productPrice}
// 								</div>
// 							</div>
// 							<button class="interactive-adding-bascet__button">
// 								<svg class="interactive-adding-bascet__button-icon">
// 									<use xlink:href="#bascet-btn-product"></use>
// 								</svg>
// 							</button>
// 						</div>

// 						<div class="interactive-adding-quantity">
// 							<div class="quantity">
// 								<div class="quantity__button quantity__button_minus _icon-minus"></div>
// 								<div class="quantity__input">
// 									<input class="quantity__input-quantity" autocomplete="off" type="text" name="form[]"
// 										value="1" />
// 									<input class="quantity__input-price rub" autocomplete="off" type="text" name="form[]"
// 										value="670.00" />
// 								</div>
// 								<div class="quantity__button quantity__button_plus _icon-plus"></div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>`;

// 		productsItems.insertAjacentHTML('beforeend', productsTemplate);

// 	});

// }

// Progress-bar ===========================================================================================================================================
// const progressBar = document.querySelector(".progress-bar");

// function updateProgressBar(progress) {
// 	// изменяем ширину прогресс-бара
// 	progressBar.style.width = progress + "%";
// }


// updateProgressBar(50);

