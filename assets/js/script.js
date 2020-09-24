jQuery(document).ready(($) => {

    'use strict';

	const stickyNavTop = $('.top-menu').offset().top;

    let spMain = {

        actions: function () {
			$('.favorite__item').on('mouseenter', spMain.showBtn);
			$('.favorite__item').on('mouseleave', spMain.hideBtn);

			$('.catalog__item').on('mouseenter', spMain.showImg);
			$('.catalog__item').on('mouseleave', spMain.hideImg);

			$(window).scroll(spMain.stickyMenu);
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
				//freeMode: true,
				//watchSlidesVisibility: true,
				//watchSlidesProgress: true,
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

			if (scrollTop >= stickyNavTop) { 
				$('.top-menu').addClass('stiky');
			} else {
				$('.top-menu').removeClass('stiky');
			}

			//console.log(scrollTop);
			console.log(stickyNavTop);
		},

        init: function () {
			spMain.actions();
            spMain.slider();
        },

    }

    spMain.init();

});    