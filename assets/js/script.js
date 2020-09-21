jQuery(document).ready(($) => {

    'use strict';

    let spMain = {

        actions: function () {
			$('.favorite__item').on('mouseenter', spMain.showBtn);
			$('.favorite__item').on('mouseleave', spMain.hideBtn);
        },

        slider: function() {

			var mySwiper = new Swiper('.swiper-container', {
				// Optional parameters
				loop: false,

				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true,
				},

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})

		},
		
		showBtn: function(){
			let itemID = $(this).attr('id'); 
			$('#'+itemID+' .favorite__button').fadeIn(100);
			console.log(itemID);
		},

		hideBtn: function(){
			let itemID = $(this).attr('id'); 
			$('#'+itemID+' .favorite__button').fadeOut(100);
		},

        init: function () {
			spMain.actions();
            spMain.slider();
        },

    }

    spMain.init();

    
});    