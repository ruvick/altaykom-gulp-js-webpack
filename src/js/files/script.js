// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// Скрипт будет срабатывать, когда весь контент на странице загрузится
// window.onload = function () {

// Меню корзины при наведении в шапке
// let linkBascet = document.querySelectorAll('.interface__link_bascet');
// let headerMulticorzine = document.querySelector('.header__multicorzine');

// for (let i = 0; i < linkBascet.length; i++) {
// 	linkBascet[i].addEventListener('mouseenter', (e) => {
// 		let headerMulticorzine = document.querySelector('.header__multicorzine');
// 		headerMulticorzine.style.display = 'flex';
// 	})
// 	headerMulticorzine.addEventListener('mouseleave', () => {
// 		// let headerMulticorzine = document.querySelector('.header__multicorzine');
// 		headerMulticorzine.style.display = 'none';
// 	})
// }


// Переключение корзины в карточке товаров
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

// window.addEventListener('click', e => { // при клике в любом месте окна браузера
//   const target = e.target // находим элемент, на котором был клик
//   if (!target.closest('.card-product')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
//     // interAddingBascet.classList.remove('none');
//     interAddingQuantity.classList.remove('active');
//     // headsearch.classList.remove('_active')
//   }
// })

// Переключение вида списка товаров
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

// Menu Catalog 
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
		});
	}
}


// Открытие/закрытие сайдбара
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

// Product Preview =================================================================================================================================
const prodPrew = document.getElementById('prodPrew');
const prodPrewCl = document.getElementById('prodPrewCl');
const catEntityMbCard = document.querySelector('.catalog-entity-mob__card');

if (catEntityMbCard) {
	catEntityMbCard.addEventListener('click', function () {
		prodPrew.classList.add('_active');
		// bodyLock();
	});
}
if (prodPrewCl) {
	prodPrewCl.addEventListener('click', function () {
		prodPrew.classList.remove('_active');
		// bodyUnlock();
	});
}

// FiltersMob
const filterMobFl = document.querySelector('.filter-mob-block__btn_fl');
const filterMobSl = document.querySelector('.filter-mob-block__btn_sl');
const filtersMobCl = document.querySelector('.filters-mob-menu__header-close');
const filtersMobMenu = document.querySelector('.filters-mob-menu');
const selectMobMenu = document.querySelector('.select-mob-menu');

if (filterMobFl) {
	filterMobFl.addEventListener('click', function () {
		filtersMobMenu.classList.add('_active');
	});
}
if (filtersMobCl) {
	filtersMobCl.addEventListener('click', function () {
		filtersMobMenu.classList.remove('_active');
	});
}
if (filterMobSl) {
	filterMobSl.addEventListener('click', function () {
		selectMobMenu.classList.add('_active');
	});
}

// MulticorzineMobFxed
const multicorzineMobFxed = document.getElementById('multicorzineMobFxed');
const MobfixedMenuFt = document.getElementById('MobfixedMenuFt');

if (MobfixedMenuFt) {
	MobfixedMenuFt.addEventListener('click', function () {
		multicorzineMobFxed.classList.toggle('_active');
	});
}

// Range 
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


// open multicorzine  
const headerLegalBascetIcon = document.querySelector('.header-legal-bascet-icon');
const multicorzineLegalEntity = document.querySelector('.multicorzine-legal-entity');
const multicorClose = document.querySelector('.multicorzine-legal-entity__btn-close');

if (headerLegalBascetIcon) {
	headerLegalBascetIcon.addEventListener('click', function () {
		multicorzineLegalEntity.classList.add('_active');
	});
}
if (multicorClose) {
	multicorClose.addEventListener('click', function () {
		multicorzineLegalEntity.classList.remove('_active');
	});
}


// Мои списки
const physicalListPerson = document.querySelector('.physical-list-person');
const newListsCard = document.querySelectorAll('.new-lists__card');
const backBtn = document.getElementById('back-btn');
const physicalCl = document.getElementById('physical-close');

newListsCard.forEach((item) => {
	item.addEventListener("click", function () {
		physicalListPerson.classList.add("_active");
	});
});

if (backBtn) {
	backBtn.addEventListener('click', function () {
		physicalListPerson.classList.remove('_active');
	});
}

if (physicalCl) {
	physicalCl.addEventListener('click', function () {
		physicalListPerson.classList.remove('_active');
	});
}


// Лайки
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


	//BURGER
	// if (catBtn) {
	//   catBtn.addEventListener("click", function () {
	//     iconMenu.classList.toggle("active");
	//     body.classList.toggle("_lock");
	//     // menuBody.classList.toggle("active");
	//   });
	// }

	// Закрытие моб меню при клике на якорную ссылку
	// if (menuListItemElems) {
	//   menuListItemElems.addEventListener("click", function () {
	//     iconMenu.classList.toggle("active");
	//     body.classList.toggle("_lock");
	//     // menuBody.classList.toggle("active");
	//   });
	// }

	// Строка поиска на мобилках
	// if (mobsearch) {
	//   mobsearch.addEventListener("click", function () {
	//     headsearch.classList.toggle("_active");
	//   });
	// }


	// Плавная прокрутка
	// const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

	// smotScrollElems.forEach(link => {
	//   link.addEventListener('click', (event) => {
	//     event.preventDefault()
	//     console.log(event);

	//     const id = link.getAttribute('href').substring(1)
	//     console.log('id : ', id);

	//     document.getElementById(id).scrollIntoView({
	//       behavior: 'smooth'
	//     });
	//   })
	// });


	// Кнопка вверх
	// const btnUp = {
	//   el: document.querySelector('.btn-up'),
	//   show() {
	//     // удалим у кнопки класс btn-up_hide
	//     this.el.classList.remove('btn-up_hide');
	//   },
	//   hide() {
	//     // добавим к кнопке класс btn-up_hide
	//     this.el.classList.add('btn-up_hide');
	//   },
	//   addEventListener() {
	//     // при прокрутке содержимого страницы
	//     window.addEventListener('scroll', () => {
	//       // определяем величину прокрутки
	//       const scrollY = window.scrollY || document.documentElement.scrollTop;
	//       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
	//       scrollY > 400 ? this.show() : this.hide();
	//     });
	//     // при нажатии на кнопку .btn-up
	//     document.querySelector('.btn-up').onclick = () => {
	//       // переместим в начало страницы
	//       window.scrollTo({
	//         top: 0,
	//         left: 0,
	//         behavior: 'smooth'
	//       });
	//     }
	//   }
	// }


	// Полоса прокрутки в шапке
	// const scrollProgress = document.getElementById('scroll-progress');
	// const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	// window.addEventListener('scroll', () => {
	//   const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//   scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
	// });


	// Ползунок выбора цены
	// const priceEl = document.querySelector(".price");

	// function changePrice(price) {
	//   priceEl.innerText = price;
	//   console.log(price);
	// };


	// Подсказки
	// tippy('._tippy', {
	//   content: "Подсказка",
	// });


	// Поочередное открытие нескольких блоков меню, табы, либо что то еще
	// const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
	// const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
	// const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

	// BarIconElems.forEach((btn, index) => {
	//   btn.addEventListener('click', () => {

	//     if (!btn.classList.contains('sidebar__menu-icon_active')) {

	//       BarSubMenuElems.forEach((BarSubMenuElem) => {
	//         BarSubMenuElem.classList.remove('active')
	//       });
	//       BarIconElems.forEach((BarIconElem) => {
	//         BarIconElem.classList.remove('sidebar__menu-icon_active')
	//       });
	//       BarLinkIconElems.forEach((BarLinkIconElem) => {
	//         BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
	//       });

	//       BarSubMenuElems[index].classList.add('active')
	//       BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
	//       btn.classList.add('sidebar__menu-icon_active')
	//     } else {
	//       BarSubMenuElems[index].classList.remove('active')
	//       BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
	//       btn.classList.remove('sidebar__menu-icon_active')
	//     }
	//   })
	// })

// }