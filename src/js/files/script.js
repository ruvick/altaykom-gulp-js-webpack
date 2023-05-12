// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// Скрипт будет срабатывать, когда весь контент на странице загрузится
window.onload = function () {

  // const body = document.querySelector("body");

  // Открыть/закрыть catalog в header 
  const catBtn = document.querySelector('.button-catalog');
  const iconMenu = document.querySelector('.icon-menu');
  const menuCatalog = document.querySelector('.menu-catalog');

  if (catBtn) {
    catBtn.addEventListener('click', function () {
      iconMenu.classList.toggle('active');
      menuCatalog.classList.toggle('active');
      // html.classList.toggle('lock');
    });
  }

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      iconMenu.classList.remove('active'); // то закрываем окно навигации, удаляя активный класс
      menuCatalog.classList.remove('active');
      // html.classList.remove('lock');
      // headsearch.classList.remove('_active')
    }
  })


  // Срабатывание поиска
  const search = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-form__input");
	const searchMenu = document.querySelector(".search-menu");
  const searchBtnClosed = document.querySelector(".search-form__btn-closed");
  const interFacelinkText = document.querySelectorAll(".interface__link-text");

  interFacelinkText.forEach(linkText => {
    searchInput.addEventListener('click', function () {
      search.classList.add("active");
			searchMenu.classList.add("active");
      searchBtnClosed.classList.add("active");
      linkText.classList.add("none");
    })
    searchBtnClosed.addEventListener('click', function () {
      search.classList.remove("active");
			searchMenu.classList.remove("active");
      searchBtnClosed.classList.remove("active");
      linkText.classList.remove("none");
    })
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.search-form__btn') && !target.closest('.search-form__input') && !target.closest('.search-menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        search.classList.remove("active");
				searchMenu.classList.remove("active");
        searchBtnClosed.classList.remove('active');
        linkText.classList.remove("none");
      }
    })
  })


  // Переключение корзины в карточке товаров
  const interAddingBascetBtn = document.querySelectorAll('.interactive-adding-bascet__button');
  const interAddingBascet = document.querySelectorAll('.interactive-adding-bascet');
  const interAddingQuantity = document.querySelectorAll('.interactive-adding-quantity');

  // if (interAddingBascetBtn) {
  //   interAddingBascetBtn.addEventListener('click', function () {
  //     interAddingBascet.classList.add('none');
  //     interAddingQuantity.classList.toggle('active');
	// 		console.log('клик');
  //   });
  // }

	interAddingBascetBtn.forEach((btn, index) => {
		btn.addEventListener('click', () => {
	
			if (btn) {
	
				interAddingBascet.forEach((interAddingBascet) => {
					interAddingBascet.classList.add('none');
				});
				interAddingQuantity.forEach((interAddingQuantity) => {
					interAddingQuantity.classList.add('active');
				});
	
				// BarSubMenuElems[index].classList.add('active')
				// BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
				// btn.classList.add('sidebar__menu-icon_active')
			} 
			// else {
			// 	BarSubMenuElems[index].classList.remove('active')
			// 	BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
			// 	btn.classList.remove('sidebar__menu-icon_active')
			// }
		})
	})

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.card-product')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      interAddingBascet.classList.remove('none');
      interAddingQuantity.classList.remove('active');
      // headsearch.classList.remove('_active')
    }
  })


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

}