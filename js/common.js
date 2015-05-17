$(document).ready(function() {

	$(document).on("click", function(){
		$(".js-btn-submenu").removeClass("is-active");
		$(".js-submenu").removeClass("is-active");
		if (viewportWidth <= 750) {
			$(".js-btn-masonry").removeClass("is-active");
			$(".item-wrap").removeClass("is-active");
			$("body").removeClass("is-visible-items");
		}
	});

// init variables
	var viewportWidth = verge.viewportW();
	var viewportHeight = verge.viewportH();
	var fullHeightBlock = $(".js-full-height");
	var winHeight = $(window).height();

// full height block
	function fullHeight() {
		var viewportWidth = verge.viewportW();
		var viewportHeight = verge.viewportH();
		var winHeight = $(window).height();
		if (viewportHeight >= 500) {
			fullHeightBlock.css({
				height: winHeight
			});

		}
		else {
			fullHeightBlock.css({
				height: 'auto'
			});
		}
		
	}
	fullHeight();

// init functions on resize window event
	$(window).resize(function(){
		fullHeight();
	});

	$('.js-slider-items').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  dots: false,
	  adaptiveHeight: true,
	  responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2
	    	}
	    },
	    {
	        breakpoint: 992,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 3

	        }
	    },
	    {
    	    breakpoint: 750,
    	    settings: {
    	      slidesToShow: 1,
	    	  slidesToScroll: 1
	    	}
	    }
	   ]
	});

	$('.js-slider-calendar').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.js-slider-calendar').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var year  = $(".js-slider-calendar .slick-active").attr("data-year");
	  $(".js-calendar-year").text(year);
	  console.log(currentSlide);
	});
	        

	$('.js-slider-reviews').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				centerMode: true,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$(".js-slider-vertical").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		//autoplay: true,
		//autoplaySpeed: 2000
	});



	$(".js-slider-prev").on("click", function(){
		var slider = $(this).attr("data-slider");
		$('.'+slider).slick('slickPrev');
		return false;
	});
	$(".js-slider-next").on("click", function(){
		var slider = $(this).attr("data-slider");
		$('.'+slider).slick('slickNext');
		return false;
	});
	
	$(".js-btn-banner").on("click",function(){
		$(this).toggleClass("is-active");
		$(this).parents(".js-banner").toggleClass("is-active");
		$(".js-slider-vertical").trigger("resize");
		return false;
	});
	$(".js-banner").on("click",function(){
		$(this).toggleClass("is-active");
		$(this).find(".js-btn-banner").toggleClass("is-active");
		return false;
	});
	if (viewportWidth > 750) {
		$(".js-btn-masonry").on("click",function(){
			$(this).toggleClass("is-active");
			$(this).parents(".banner-wrap").toggleClass("is-covered");
			$(this).parents(".banner-wrap").find(".item-wrap").toggleClass("is-active");
			$(this).parents(".banner-wrap").find(".js-masonry-box").masonry({
				columnWidth: ".grid-sizer",
				gutter: 30
			});
			return false;
		});

		$(".js-cover").on("click",function(){
			$(this).parents(".banner-wrap").find(".js-btn-masonry").toggleClass("is-active");
			$(this).toggleClass("is-covered");
			$(this).parents(".banner-wrap").find(".item-wrap").toggleClass("is-active");
			$(this).parents(".banner-wrap").find(".js-masonry-box").masonry({
				columnWidth: ".grid-sizer",
				gutter: 30
			});
			return false;
		});

		$(".js-masonry-box").masonry({
			columnWidth: ".grid-sizer",
			gutter: 30
		});
		
	}
	if (viewportWidth <= 750) {
		$(".js-btn-masonry").on("click",function(event){
			$(this).toggleClass("is-active");
			$(this).parents(".banner-wrap").find(".item-wrap").toggleClass("is-active");
			$("body").toggleClass("is-visible-items");
			event.stopPropagation();
			return false;
		});

		$(".js-cover").on("click",function(event){
			$(this).toggleClass("is-covered");
			$(this).parents(".banner-wrap").find(".item-wrap").toggleClass("is-active");
			$(this).parents(".banner-wrap").find(".js-btn-masonry").toggleClass("is-active");
			$("body").toggleClass("is-visible-items");
			event.stopPropagation();
			return false;
		});

		$(".item-wrap").on("click",function(event){
			event.stopPropagation();
		});
	}

	$(".js-btn-calendar").on("click",function(){
		$(this).toggleClass("is-active");
		$(".js-calendar").toggleClass("is-active");
		return false;
	});
	$(".js-btn-menu").on("click",function(){
		$(this).toggleClass("is-active");
		$(".js-menu").toggleClass("is-active");
		$(".js-menu-overlay").fadeToggle(500);
		return false;
	});
	$(".js-menu-overlay").on("click",function(){
		$(this).fadeOut(500);
		$(".js-menu").removeClass("is-active");
		$(".js-btn-menu").removeClass("is-active");
	});
	$(".js-btn-submenu").on("click",function(event){
		$(this).toggleClass("is-active");
		$(".js-submenu").toggleClass("is-active");
		event.stopPropagation();
		return false;
	});
	$(".js-submenu").on("click",function(event){
		event.stopPropagation();
	});

	if (viewportWidth <= 992) {
		$(".js-item-head").on("click",function(){
			if (!$(this).parents(".item").hasClass("is-active")) {
				$(".item").removeClass("is-active");
				$(this).parents(".item").addClass("is-active");
			}
			else {
				$(".item").removeClass("is-active");
			}
			
			return false;
		});
	}
	

	$(".js-toggle-tip").hover(
		function(){
			var left = $(this).offset().left;
			var top = $(this).offset().top + $(this).outerHeight();
			if (viewportWidth <= 750) {
				var left = $(this).parents(".wrapper").offset().left;
			}
			$(".js-tip").addClass("is-visible").css({
				top: top,
				left: left
			});
		},
		function(){
			$(".js-tip").removeClass("is-visible");
		}
	);

	$(".js-sale").on("click", function(){
		$(this).parents(".item").toggleClass("is-visible-add");
		return false;
	});

});

