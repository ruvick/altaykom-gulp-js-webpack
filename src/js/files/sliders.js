/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/ 
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.swiper')) {
		new Swiper('.sliderInfo', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],

			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1.5,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			breakpoints: {
				415: {
					slidesPerView: 1.8,
					spaceBetween: 10,
				},
				516: {
					slidesPerView: 2.6,
					spaceBetween: 10,
				},
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				1025: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			on: {
				init() {
					this.el.addEventListener('mouseenter', () => {
						this.autoplay.stop();
					});

					this.el.addEventListener('mouseleave', () => {
						this.autoplay.start();
					});
				}
			}
		});
		new Swiper('.sliderBrends', {
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 2.8,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			// navigation: {
			// 	nextEl: '.slider-info__button-next',
			// 	prevEl: '.slider-info__button-prev',
			// },
			breakpoints: {
				415: {
					slidesPerView: 4.8,
					spaceBetween: 10,
				},
				515: {
					slidesPerView: 5.3,
					spaceBetween: 10,
				},
				767: {
					slidesPerView: 5.5,
					spaceBetween: 10,
				},
				1025: {
					slidesPerView: 6.5,
					spaceBetween: 10,
				},
				1281: {
					slidesPerView: 8,
					spaceBetween: 30,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			on: {

			}
		});
		new Swiper('.salesLeaders', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			// slidesPerView: 1,
			initialSlide: 1,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			breakpoints: {
				345: {
					slidesPerView: 1.6,
				},
				376: {
					slidesPerView: 2.2,
				},
				415: {
					slidesPerView: 2.4,
				},
				540: {
					slidesPerView: 2.6,
				},
				630: {
					slidesPerView: 2.8,
				},
				769: {
					slidesPerView: 3.3,
				},
				1025: {
					slidesPerView: 4.8,
					spaceBetween: 10,
				},
				1150: {
					slidesPerView: 5.3,
				},
				1360: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			on: {

			}
		});
		new Swiper('.recentlyWatched', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.6,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			breakpoints: {
				346: {
					slidesPerView: 1.8,
				},
				375: {
					slidesPerView: 2.1,
				},
				415: {
					slidesPerView: 2.3,
				},
				516: {
					slidesPerView: 2.8,
				},
				613: {
					slidesPerView: 3.2,
				},
				630: {
					slidesPerView: 3.6,
				},
				769: {
					slidesPerView: 4.2,
				},
				813: {
					slidesPerView: 4.6,
				},
				1025: {
					slidesPerView: 5.6,
				},
				1200: {
					slidesPerView: 6.2,
				},
				1331: {
					slidesPerView: 7,
					spaceBetween: 20,
				},
			},
			on: {

			}
		});
		new Swiper('.sliderCert', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.5,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			breakpoints: {
				376: {
					slidesPerView: 1.8,
				},
				415: {
					slidesPerView: 2.1,
				},
				541: {
					slidesPerView: 2.8,
				},
				613: {
					slidesPerView: 3.2,
				},
				769: {
					slidesPerView: 3.8,
				},
				813: {
					slidesPerView: 4.2,
				},
				1025: {
					slidesPerView: 4.8,
				},
				1201: {
					slidesPerView: 5.3,
				},
				1281: {
					slidesPerView: 6,
					spaceBetween: 20,
				},
			},
			on: {

			}
		});
		new Swiper('.sliderReviews', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1.1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			breakpoints: {
				345: {
					slidesPerView: 1.2,
				},
				// 376: {
				// 	slidesPerView: 1.4,
				// },
				414: {
					slidesPerView: 1.4,
				},
				540: {
					slidesPerView: 1.8,
				},
				630: {
					slidesPerView: 2.1,
				},
				// 768: {
				// 	slidesPerView: 2.5,
				// },
				812: {
					slidesPerView: 2.4,
				},
				1024: {
					slidesPerView: 2.6,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 2.8,
				},
				1330: {
					slidesPerView: 3,
				},
			},
			on: {

			}
		});
		let cardProductSmallSl = new Swiper('.cardProductSmallSl', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 12,
			autoHeight: true,
			speed: 800,
			slideToClickedSlide: true,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			slideToClickedSlide: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});

		let cardProductSl = new Swiper('.cardProductSl', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider-info__button-next',
				prevEl: '.slider-info__button-prev',
			},
			thumbs: {
				swiper: cardProductSmallSl
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
		new Swiper('.boxOrdersL', {
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			// navigation: {
			// 	nextEl: '.slider-info__button-next',
			// 	prevEl: '.slider-info__button-prev',
			// },
			breakpoints: {
				345: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2.2,
				},
				1280: {
					slidesPerView: 3,
				},
			},
			on: {

			}
		});
		new Swiper('.recommendSl', {
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1.5,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			// navigation: {
			// 	nextEl: '.slider-info__button-next',
			// 	prevEl: '.slider-info__button-prev',
			// },
			breakpoints: {
				376: {
					slidesPerView: 1.8,
				},
				415: {
					slidesPerView: 2.1,
				},
				541: {
					slidesPerView: 2.5,
				},
				613: {
					slidesPerView: 2.8,
				},
				769: {
					slidesPerView: 3.2,
				},
				813: {
					slidesPerView: 3.5,
				},
				1025: {
					slidesPerView: 3.8,
				},
				1201: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				// 1281: {
				// 	slidesPerView: 6,
				// 	spaceBetween: 20,
				// },
			},
			on: {

			}
		});
		let productPreviewSl = new Swiper('.productPreviewSl', {
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation],

			// effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			observer: true,
			observeParents: true,
			slidesPerView: 3.2,
			spaceBetween: 5,
			// autoHeight: true,
			speed: 800,
			slideToClickedSlide: true,
			loop: true,
			breakpoints: {
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				1268: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
			},
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});