$(function () {

	new Swiper('.header__swiper', {
		slidesPerView: 1.6,
	});

	new Swiper('.popular__swiper', {
		slidesPerView: 3.5,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiperNext',
			prevEl: '.swiperPrev'
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
	});

});