jQuery(document).ready(($) => {

    'use strict';

    let spMain = {

        actions: function () {
			$('.favorite__item').on('mouseenter', spMain.showBtn);
			$('.favorite__item').on('mouseleave', spMain.hideBtn);

			$('.catalog__item').on('mouseenter', spMain.showImg);
			$('.catalog__item').on('mouseleave', spMain.hideImg);
        },

        slider: function() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: false,

				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
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

        init: function () {
			spMain.actions();
            spMain.slider();
        },

    }

    spMain.init();

});    