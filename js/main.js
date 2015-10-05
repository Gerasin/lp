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
   	$('.tooltip').mousemove(function(e){
   		var offset = $(this).offset();
   		var relativeX = e.pageX - 20;
        var relativeY = e.pageY + 35;
        $('.tooltip-popup').css({'left' : relativeX, 'top' : relativeY});
   	});




});
