
// function mapAdd() {
// 	let tag = document.createElement('script');
// 	tag.src = "https://maps.google.com/maps/api/js?sensor=false&amp;key=&callback=mapInit";
// 	let firstScriptTag = document.getElementsByTagName('script')[0];
// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }
// function mapInit(n = 1) {
// 	google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
// 		var map = this;
// 		var ov = new google.maps.OverlayView();
// 		ov.onAdd = function () {
// 			var proj = this.getProjection();
// 			var aPoint = proj.fromLatLngToContainerPixel(latlng);
// 			aPoint.x = aPoint.x + offsetX;
// 			aPoint.y = aPoint.y + offsetY;
// 			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
// 			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
// 		}
// 		ov.draw = function () { };
// 		ov.setMap(this);
// 	};
// 	var markers = new Array();
// 	var infowindow = new google.maps.InfoWindow({
// 		//pixelOffset: new google.maps.Size(-230,250)
// 	});
// 	var locations = [
// 		[new google.maps.LatLng(53.819055, 27.8813694)],
// 		[new google.maps.LatLng(53.700055, 27.5513694)],
// 		[new google.maps.LatLng(53.809055, 27.5813694)],
// 		[new google.maps.LatLng(53.859055, 27.5013694)],
// 	]
// 	var options = {
// 		zoom: 10,
// 		panControl: false,
// 		mapTypeControl: false,
// 		center: locations[0][0],
// 		styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
// 		scrollwheel: false,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	var map = new google.maps.Map(document.getElementById('map'), options);
// 	var icon = {
// 		url: 'img/icons/map.svg',
// 		scaledSize: new google.maps.Size(18, 20),
// 		anchor: new google.maps.Point(9, 10)
// 	}
// 	for (var i = 0; i < locations.length; i++) {
// 		var marker = new google.maps.Marker({
// 			icon: icon,
// 			position: locations[i][0],
// 			map: map,
// 		});
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				for (var m = 0; m < markers.length; m++) {
// 					markers[m].setIcon(icon);
// 				}
// 				var cnt = i + 1;
// 				//infowindow.setContent(document.querySelector('.events-map__item_' + cnt).innerHTML);
// 				//infowindow.open(map, marker);
// 				marker.setIcon(icon);
// 				map.setCenterWithOffset(marker.getPosition(), 0, 0);
// 				setTimeout(function () {

// 				}, 10);
// 			}
// 		})(marker, i));
// 		markers.push(marker);
// 	}
// 	if (n) {
// 		var nc = n - 1;
// 		setTimeout(function () {
// 			google.maps.event.trigger(markers[nc], 'click');
// 		}, 500);
// 	}
// }
// if (document.querySelector('#map')) {
// 	mapAdd();
// }

// Карта Яндекс с одной меткой
// YA
// function map(n) {
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		controls: [],
		center: [53.336462, 83.699520],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 17
	});

	let myPlacemark = new ymaps.Placemark([53.336462, 83.699520], {
	}, {
		// Опции
		balloonContentHeader: 'Mistoun',
		balloonContentBody: 'Москва, Николоямская 40с1',
		balloonContentFooter: '+ 7(495) 507-54 - 90',
		hasBalloon: true,
		hideIconOnBalloonOpen: true,

		hasBalloon: true,
		hideIconOnBalloonOpen: true,
		// Необходимо указать данный тип макета.
		iconLayout: 'default#imageWithContent',
		// Своё изображение иконки метки.
		iconImageHref: 'img/icons/map-contacts.svg',
		// Размеры метки.
		iconImageSize: [50.4, 70],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [-20, -20],
		// Смещение слоя с содержимым относительно слоя с картинкой.
		iconContentOffset: [0, 0],
	});
	myMap.geoObjects.add(myPlacemark);

	myMap.behaviors.disable('scrollZoom');
	myMap.behaviors.disable('drag');
}
// }

// Карта Яндекс с несколькими метками
// ymaps.ready(init);

// function init() {

// 	var myMap = new ymaps.Map("map", {
// 		center: [51.703154, 36.140598],
// 		zoom: 12,
// 		// Выключаем все управление картой
// 		controls: []

// 	});

// 	var myGeoObjects = [];

// 	myGeoObjects[0] = new ymaps.Placemark([51.703154, 36.140598], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [36, 55],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[1] = new ymaps.Placemark([51.720771, 36.195773], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи , Курск, ул.Гунатовская, 32</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Гунатовская, 32</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [151, 41],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[2] = new ymaps.Placemark([51.715085, 36.133600], {
// 		// Свойства.
// 		hintContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [151, 41],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[3] = new ymaps.Placemark([51.675220, 36.158690], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[4] = new ymaps.Placemark([51.650963, 36.140104], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[5] = new ymaps.Placemark([51.718193, 36.083160], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-16, -42]
// 	});

// 	// var clusterIcons=[{
// 	//         href:'img/map-marker.svg',
// 	//         size:[31,40],
// 	//         offset:[0,0]
// 	// }];

// 	var clusterer = new ymaps.Clusterer({
// 		clusterDisableClickZoom: false,
// 		clusterOpenBalloonOnClick: false,
// 		// Устанавливаем стандартный макет балуна кластера "Карусель".
// 		clusterBalloonContentLayout: 'cluster#balloonCarousel',
// 		// Устанавливаем собственный макет.
// 		// clusterBalloonItemContentLayout: customItemContentLayout,
// 		// Устанавливаем режим открытия балуна.
// 		// В данном примере балун никогда не будет открываться в режиме панели.
// 		clusterBalloonPanelMaxMapArea: 0,
// 		// Устанавливаем размеры макета контента балуна (в пикселях).
// 		clusterBalloonContentLayoutWidth: 300,
// 		clusterBalloonContentLayoutHeight: 200,
// 		// Устанавливаем максимальное количество элементов в нижней панели на одной странице
// 		clusterBalloonPagerSize: 5
// 		// Настройка внешего вида нижней панели.
// 		// Режим marker рекомендуется использовать с небольшим количеством элементов.
// 		// clusterBalloonPagerType: 'marker',
// 		// Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
// 		// clusterBalloonCycling: false,
// 		// Можно отключить отображение меню навигации.
// 		// clusterBalloonPagerVisible: false
// 	});

// 	clusterer.add(myGeoObjects);
// 	myMap.geoObjects.add(clusterer);
// 	myMap.behaviors.disable('scrollZoom');
// }
