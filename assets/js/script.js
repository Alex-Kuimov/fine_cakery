jQuery(document).ready(($) => {

    'use strict';

	const menuTop = $('.top-menu').offset().top;
	const menu = $('.top-menu').clone().appendTo('.header').css('display','none').addClass('stiky-menu');

    let frontEnd = {

        actions: function () {
			$('.favorite__item').on('mouseenter', frontEnd.showBtn);
			$('.favorite__item').on('mouseleave', frontEnd.hideBtn);

			$('.catalog__item').on('mouseenter', frontEnd.showImg);
			$('.catalog__item').on('mouseleave', frontEnd.hideImg);

			$(window).scroll(frontEnd.stickyMenu);
        },

        slider: function() {
			var frontPageSlider = new Swiper('.front-page-slider', {
				loop: false,

				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});

			var productPageSliderThumbs = new Swiper('.product-slider-thumbs', {
				direction: 'vertical',
				slidesPerView: 4,
			});
			
			var productPageSlider = new Swiper('.product-slider', {
				navigation: {
				  nextEl: '.swiper-button-next',
				  prevEl: '.swiper-button-prev',
				},
				thumbs: {
				  swiper: productPageSliderThumbs
				}
			});
		},
		
		showBtn: function(){
			let itemID = $(this).attr('id'); 
			$('#'+itemID+' .favorite__button').addClass('show');
			$('#'+itemID+' img').addClass('zoom');
		},

		hideBtn: function(){
			let itemID = $(this).attr('id'); 
			$('#'+itemID+' .favorite__button').removeClass('show');
			$('#'+itemID+' img').removeClass('zoom');
		},

		showImg: function(){
			let itemID = $(this).attr('id');
			$('#'+itemID+' .catalog__item-first-image').addClass('hide');
			$('#'+itemID+' .catalog__item-second-image').addClass('show');
		},

		hideImg: function(){
			let itemID = $(this).attr('id');
			$('#'+itemID+' .catalog__item-first-image').removeClass('hide');
			$('#'+itemID+' .catalog__item-second-image').removeClass('show');
		},

		stickyMenu: function(){
			let scrollTop = $(this).scrollTop();

			if (scrollTop >= menuTop) { 
				$('.stiky-menu').fadeIn(400);
			} else {
				$('.stiky-menu').fadeOut(400);
			}
		},

        init: function () {
			frontEnd.actions();
			frontEnd.slider();
        },

    }

    frontEnd.init();

});    