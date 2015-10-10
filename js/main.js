var positBot = 0;
var slItem = 0;
var menuSL = 0;


$(document).ready(function(){

	function slTimeFun() {
		slTime = 1;
	};
	function menuSlFun() {
		menuSL = 0;
	};

	if($('.sl_2-item').length > 0) {
		var slPos = $('.sl_2-item').offset();
		slPos = slPos.top - 50;
		if($(window).width() < 980) { slPos = slPos.top + 30 };
		var positBot = 0;
		var slItem = 0;
		var slTime = 0;

		$(window).scroll(function(){

			if(menuSL == 0) {
				var slPosBody = $(window).scrollTop();
				
				if(slPosBody > slPos) {
					if($('.sl_2-item-5').hasClass('slick-active')) {
						if(slTime == 0) {
							$('body, html').scrollTop(slPos);
							setTimeout(slTimeFun, 1000);
						};
					} else {
						$('body, html').scrollTop(slPos);
						$('.sl_2-slider .slick-next').click();
						positBot = 1;
						slTime = 0;
					}
				};
				var slPosMax = slPos + 100;
					
				if(slPosBody < slPos && positBot == 1) {
					if($('.sl_2-item-1').hasClass('slick-active')) {
						positBot = 0;
					} else {
						$('body, html').scrollTop(slPos);
						$('.sl_2-slider .slick-prev').click();
					}
				}
			};


		});
	};


	// Карусель "Как это работает"
	$('.sl_2-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: false,
  		autoplaySpeed: 4000,
  		dots: true,
  		adaptiveHeight: true,
  		responsive: [
  			{
		      breakpoint: 970,
		      settings: {
		        autoplay: false,
		        adaptiveHeight: false
		      }
		    }
  		]
	});

	// Выподалка услуги
	$('.service-header a').click(function(){
		if($(this).parents('.service-item').hasClass('active')) {
			$('.service-item').removeClass('active');
			$('.service-cont').slideUp();
		} else {
			$('.service-item').removeClass('active');
			$('.service-cont').slideUp();
			$(this).parents('.service-item').addClass('active');
			$(this).parents('.service-item').find('.service-cont').slideDown();
		};
		return false;
	});


	// Карусель "Для кого"
	$('.sl_4-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: false,
  		dots: true
	});

	$('.sl_4-bg li:not(:first)').hide();
	$('.sl_4-next a').click(function(){
		$('.sl_4-slider .slick-next').click();
		var nextTxt = $('.sl_4-slider .slick-active').next().attr('rel');
		var prevTxt = $('.sl_4-slider .slick-active').prev().attr('rel');
		var slIndex = $('.sl_4-slider .slick-active').index() - 1;
		$('.sl_4-bg li').fadeOut();
		$('.sl_4-bg li').eq(slIndex).fadeIn();
		$('.sl_4-prev span').text(prevTxt);
		$('.sl_4-next span').text(nextTxt);
		return false;
	});
	$('.sl_4-prev a').click(function(){
		$('.sl_4-slider .slick-prev').click();
		var nextTxt = $('.sl_4-slider .slick-active').next().attr('rel');
		var prevTxt = $('.sl_4-slider .slick-active').prev().attr('rel');
		var slIndex = $('.sl_4-slider .slick-active').index() - 1;
		$('.sl_4-bg li').fadeOut();
		$('.sl_4-bg li').eq(slIndex).fadeIn();
		$('.sl_4-prev span').text(prevTxt);
		$('.sl_4-next span').text(nextTxt);
		return false;
	});
	$('.sl_4 .slick-dots button').click(function(){
		var btnIndex = $(this).parents('li').index();
		var nextTxt = $('.sl_4-slider .sl_2-item').eq(btnIndex).next().attr('rel');
		var prevTxt = $('.sl_4-slider .sl_2-item').eq(btnIndex).prev().attr('rel');
		var slIndex = $('.sl_4-slider .sl_2-item').index() - 1;
		$('.sl_4-bg li').fadeOut();
		$('.sl_4-bg li').eq(btnIndex).fadeIn();
		$('.sl_4-prev span').text(prevTxt);
		$('.sl_4-next span').text(nextTxt);
	});
	



	// Карусель "Отзывы"
	$('.sl_5-slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		adaptiveHeight: true,
  		fade: true,
  		cssEase: 'linear'
	});

	$('.sl_5-next a').click(function(){
		$('.sl_5-slider .slick-next').click();
		return false;
	});
	$('.sl_5-prev a').click(function(){
		$('.sl_5-slider .slick-prev').click();
		return false;
	});
	var other = $('.sl_5-item').length;
	if(other < 2) {$('.sl_5-prev, .sl_5-next').hide()}


	// Карусель "О нас пишут"
	$('.sl_8-slider').slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots: true,
  		responsive: [
  			{
		      breakpoint: 970,
		      settings: {
		        slidesToShow: 1,
  				slidesToScroll: 1
		      }
		    }
  		]
	});
	$(".sl_8 .slick-dots").before("<a href='' class='sl_8-prev'></a>");
	$(".sl_8 .slick-dots").after("<a href='' class='sl_8-next'></a>");
	$('.sl_8-next').click(function(){
		$('.sl_8-slider .slick-next').click();
		return false;
	});
	$('.sl_8-prev').click(function(){
		$('.sl_8-slider .slick-prev').click();
		return false;
	});


	// Валидация
	$('.inp-phone').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
	$('.sl_10-btn a').click(function(){
		var inpError = 0;
		var inpPhone = $('.inp-phone').val().length;
		var inpMail = $('.inp-mail').val().length;
		if(inpPhone > 1) {
			$('.form-message-ok').fadeIn();
			setTimeout("$('.form-message-ok').fadeOut()", 2000);
		} else {inpError = ++inpError;};

	   at = $('.inp-mail').val().indexOf("@");
	   dot = $('.inp-mail').val().indexOf(".");
	   if (at > 0 && dot > 0){
	      	$('.form-message-ok').fadeIn();
			setTimeout("$('.form-message-ok').fadeOut()", 2000);
	   } else {inpError = ++inpError;}
	   if(inpError == 2) {
	   		$('.form-message-error').fadeIn();
	   		setTimeout("$('.form-message-error').fadeOut()", 2000);
	   }
		return false;
	});


	// Меню якорь
	$('.menu-head a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
	    if($(this).hasClass('menu-one')) {
	    	destination = $(elementClick).offset().top - 95;
	    } else {
	    	destination = $(elementClick).offset().top - 10;
	    }
	    $('html, body').animate( { scrollTop: destination }, 1100 );
	    if($(window).width() < 970) {
	    	$('.menu-head').slideUp();
	    };
	    if($(window).width() < 560) {
	    	$('.head-button').slideUp();
	    };
	    if($(this).hasClass('menu-one')) {} else {
		    $('.sl_2-slider .slick-dots li').eq(4).find('button').click();
		    positBot = 1;
		    menuSL = 1;
		    setTimeout(menuSlFun, 2000);
		};
     	return false;
   	});
   	$('.footer-menu a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top - 10;
	    $('html, body').animate( { scrollTop: destination }, 1100 );
	    if($(window).width() < 970) {
	    	$('.menu-head').slideUp();
	    };
	    if($(window).width() < 560) {
	    	$('.head-button').slideUp();
	    };
     	return false;
   	});


   	// Меню мобильное
   	$('.mobile-menu').click(function(){
   		$('.menu-head').slideToggle();
   		if($(window).width() < 560) {
	    	$('.head-button').slideToggle();
	    };
   		return false;
   	});


   	// tooltip
   	$('.tooltip').hover(function(e){
   		$('.tooltip-popup').stop().fadeIn();
   		var tooltipTxt = $(this).attr('rel');
   		$('.tooltip-popup').text(tooltipTxt);
   	}, function(e){
   		$('.tooltip-popup').stop().fadeOut();
   	});
   	$('.form-mes').hover(function(e){
   		$(this).find('span').stop().fadeIn();
   	}, function(e){
   		$(this).find('span').stop().fadeOut();
   	});

   	$('.tooltip').mousemove(function(e){
   		var offset = $(this).offset();
   		var relativeX = e.pageX - 20;
        var relativeY = e.pageY + 35;
        $('.tooltip-popup').css({'left' : relativeX, 'top' : relativeY});
   	});


   	// tabs 
   	$('.tabs-item:not(:first)').hide();
   	$('.tabs-lnk a').click(function(){
   		if(!$('.tabs-lnk').hasClass('tabs-lnk-default')) {
   			var index = $(this).parents('li').index();
	   		$('.tabs-lnk li').removeClass('active');
	   		$(this).parents('li').addClass('active');
	   		$('.tabs-item').hide();
	   		$('.tabs-item').eq(index).show();
   		};
   		return false;
   	});

   	// Выбор радио
   	$('input').click(function(){
   		if($('.js-radio-check').prop("checked")) {
   			$('.form-hide-1').hide();
   			$('.form-hide-2').show();
   		} else {
   			$('.form-hide-2').hide();
   			$('.form-hide-1').show();
   		};
   	});

   	// select
   	if($('select').length) {
	   	$('select').selectize({
	    	create: true,
	    	sortField: 'text'
		});
   	};

	// file input
	$('.lnk-file').click(function(){
		$(this).parents('.form-item').find('.lnk-file-inp').click();
		return false;
	});

	// password
	$('.pass-ico').click(function(){
		if($(this).hasClass('active')) {
			$('.password-box').show();
			$('.password-inp-box').hide();
			var password = $('.password-inp-box input').val();
			$('.password-box input').val(password);
			$(this).removeClass('active');
		} else {
			$('.password-box').hide();
			$('.password-inp-box').show();
			var password = $('.password-box input').val();
			$('.password-inp-box input').val(password);
			$(this).addClass('active');
		};
		return false;
	});


	// neww password
	$('.edit-pass-open').click(function(){
		$('.form-inp').addClass('active');
		$('.pass-edit').slideDown();
		return false;
	});
	$('.edit-pass-close').click(function(){
		$('.form-inp').removeClass('active');
		$('.pass-edit').slideUp();
		return false;
	});

	// about
	$('.about-help-h a').click(function(){
		$(this).parents('.about-help').find('.about-help-cont').slideToggle();
		return false;
	});

	$('.about-box-menu a').click(function(){
		var anchor = $(this);
      	$('html, body').stop().animate({
         	scrollTop: $(anchor.attr('href')).offset().top
      	}, 1000);
		return false;
	});

	if($('.about-box-menu').length) {
		aboutMenu = $('.about-box-menu').offset().top - 20
	};

	var heightContPad = $('.head').height() + $('.footer').height();
	var heightContact = $(window).height() - heightContPad;
	// $('.page-contacts').height(heightContact);


	$('.pay-message-close').click(function(){
		$(this).parents('.pay-message').fadeOut();
		return false;
	});

	$(".fancybox").fancybox({
		padding : 0
	});

	/*// popup
	$('.popup-open').click(function(){
		var popupImg = $(this).attr('rel');
		var popupDown = $(this).attr('down');
		$('.popup-cont img').attr('src', popupImg);
		$('.popup-down a').attr('href', popupDown);
		$('.popup').css({'max-height' : ($(window).height() - 60) + 'px'});
		setTimeout(popup, 300);
		return false;
	});
	$('.popup-bg, .popup-close').click(function(){
		$('.popup').fadeOut().animate({'opacity' : 0}, 500);;
		$('.popup-bg').fadeOut();
		return false;
	});*/


});

var aboutMenu;

function popup(){
	$('.popup').show();
	$('.popup').animate({'opacity' : 1}, 500);
	$('.popup-bg').fadeIn();
	var popupWidth = $('.popup').width() / 2;
	var popupTop = ($(window).height() - $('.popup').height()) / 2;
	var scrollTop = $(window).scrollTop() + popupTop;
	
	$('.popup').css({'margin-left' : - + popupWidth + 'px', 'top' : scrollTop + 'px'});
}

$(window).scroll(function(){


	var scrollTop = $(window).scrollTop();
	if(scrollTop > aboutMenu) {
		$('.about-box-menu').addClass('active');
	} else {
		$('.about-box-menu').removeClass('active');
	};

});
