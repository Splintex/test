$(document).ready(function() {

	$(document).on("click", function(){
		$(".js-btn-submenu").removeClass("is-active");
		$(".js-submenu").removeClass("is-active");
		if (viewportWidth <= 768) {
			$(".js-btn-masonry").removeClass("is-active");
			$(".item-wrap").removeClass("is-visible");
			$(".js-cover").removeClass("is-covered");
			$("body").removeClass("is-visible-items");
		}
		if ($(".js-btn-name").length) {
			$(".js-btn-name").removeClass("is-active");
			$(".list").removeClass("is-active");
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

	
	$('.js-slider-items').on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$('.js-slider-items').addClass("is-ready");
	  },200)
	});
	$('.js-slider-items').slick({
		//centerMode: true,
		//centerPadding: '15px',
		infinite: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		draggable: false,
		responsive: [
		{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '60px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 414,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '50px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 360,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '45px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 330,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '35px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.js-slider-items').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(".item").removeClass("is-active");
		if ($('.js-slider-items').find(".slick-slide").last().hasClass("slick-active")) {
			$(".js-slider-next-event").addClass("is-inactive");
		}
		else {
			$(".js-slider-next-event").removeClass("is-inactive");
		}

		if ($('.js-slider-items').find(".slick-slide").first().hasClass("slick-active")) {
			$(".js-slider-prev-event").addClass("is-inactive");
		}
		else {
			$(".js-slider-prev-event").removeClass("is-inactive");
		}

	});

	         
	$('.js-slider-calendar').on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$('.js-slider-calendar').addClass("is-ready");
	  },200)
	});
	$('.js-slider-calendar').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		//arrows: false,
		//dots: false,
		adaptiveHeight: true,
		draggable: false,
		prevArrow: '<button type="button" class="arr-left">Previous</button>',
		nextArrow: '<button type="button" class="arr-right">Previous</button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});

	$('.js-slider-calendar').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  var year  = $(".js-slider-calendar .slick-active").attr("data-year");
	  $(".js-calendar-year").text(year);
	});

	// hide tips before slide to the next month
	$('.js-slider-calendar').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	 	$(".js-tip").removeClass("is-visible");
	});

	$('.js-slider-calendar').on('edge', function(event, slick, direction){
  		console.log('edge was hit')
	});
	        
	$('.js-slider-reviews').on('init', function(event, slick, direction){
	  setTimeout(function(){
	  	$('.js-slider-reviews').addClass("is-ready");
	  },200)
	});
	$('.js-slider-reviews').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: false,
		draggable: false,
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
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '60px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 414,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '50px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 360,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '45px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 330,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '35px',
		        slidesToShow: 1
		      }
		    }
		  ]
	});
	$(".js-slider-vertical").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: false
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
		var height = verge.viewportH() - $(".header").outerHeight();
		var width = verge.viewportW();
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$(this).parents(".js-banner").removeClass("is-active");
			if (width > 992) {
				$(this).parents(".js-banner").css("height", 170);
				console.log(width);
			}
			if (width <= 992 && width > 768) {
				$(this).parents(".js-banner").css("height", 165);
			}
			if (width <= 768)  {
				$(this).parents(".js-banner").css("height", 140);
			}
			
		}
		else {
			$(this).addClass("is-active");
			$(this).parents(".js-banner").addClass("is-active").css("height", height);
			$(".js-slider-vertical").trigger("resize");
		}
		
		return false;
	});
	$(".js-banner").on("click",function(){
		var height = verge.viewportH() - $(".header").outerHeight();
		var width = verge.viewportW();
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$(this).find(".js-btn-banner").removeClass("is-active");
			if (width > 992) {
				$(this).css("height", 170);
			}
			if (width <= 992 && width > 768) {
				$(this).css("height", 165);
			}
			if (width <= 768)  {
				$(this).css("height", 140);
			}
			
		}
		else {
			$(this).addClass("is-active").css("height", height);
			$(this).find(".js-btn-banner").addClass("is-active");
			$(".js-slider-vertical").trigger("resize");
		}
		return false;
	});



	$(".js-btn-masonry").on("click",function(event){
		var parent = $(this).parents(".banner-wrap");
		var banner = parent.find(".banner");

		if (verge.viewportW() > 768) {
			if ($(this).hasClass("is-active")) {
				$(this).removeClass("is-active");
				banner.removeClass("is-covered");
				parent.find(".item-wrap").slideUp(300);
			}
			else {
				$(this).addClass("is-active");
				banner.addClass("is-covered");
				parent.find(".item-wrap").slideDown(300);
				parent.find(".js-masonry").masonry({
					columnWidth: ".grid-sizer",
					gutter: 30,
					isFitWidth: true
				});
			}
			
			return false;
		}

		if (verge.viewportW() <= 768) { 
			if ($(this).hasClass("is-active")) { 
				$(".js-btn-masonry").removeClass("is-active");
				$(".item-wrap").removeClass("is-visible");
				$(".js-cover").removeClass("is-covered");
				$("body").removeClass("is-visible-items");
			}
			else {
				$(".js-btn-masonry").removeClass("is-active");
				$(".item-wrap").removeClass("is-visible");
				$("body").removeClass("is-visible-items");
				$(".js-cover").removeClass("is-covered");
				$(this).addClass("is-active");
				parent.find(".item-wrap").addClass("is-visible");
				parent.find(".js-cover").addClass("is-covered");
				$("body").addClass("is-visible-items");
			}
			event.stopPropagation();
			return false;
		}
		
	});

	$(window).resize(function(){
		if (verge.viewportW() > 768) { 
			$(".js-masonry").masonry({
				columnWidth: ".grid-sizer",
				gutter: 30,
				isFitWidth: true
			});
		}
		if (verge.viewportW() <= 768) { 
			$(".js-masonry").masonry('destroy');
		}
	});
	if (verge.viewportW() > 768) { 
		$(".js-masonry").masonry({
			columnWidth: ".grid-sizer",
			gutter: 30,
			isFitWidth: true
		});
	}
	if (verge.viewportW() <= 768) { 
		$(".js-masonry").masonry('destroy');
	}

	$(".js-cover").on("click",function(){
		var parent = $(this).parents(".banner-wrap");
		if (verge.viewportW() > 768) {
			if ($(this).hasClass("is-covered")) {
				parent.find(".js-btn-masonry").removeClass("is-active");
				$(this).removeClass("is-covered");
				parent.find(".item-wrap").slideUp(300);
			}
			else {
				parent.find(".js-btn-masonry").addClass("is-active");
				$(this).addClass("is-covered");
				parent.find(".item-wrap").slideDown(300);
				parent.find(".js-masonry").masonry({
					columnWidth: ".grid-sizer",
					gutter: 30,
					isFitWidth: true
				});
			}
			
			return false;
		}

		if (verge.viewportW() <= 768) { 
			if ($(this).hasClass("is-covered")) { 
				$(".js-cover").removeClass("is-covered");
				$(".item-wrap").removeClass("is-visible");
				$(".js-btn-masonry").removeClass("is-active");
				$("body").removeClass("is-visible-items");
			}
			else { 
				$(".js-cover").removeClass("is-covered");
				$(".item-wrap").removeClass("is-visible");
				$(".js-btn-masonry").removeClass("is-active");
				$("body").removeClass("is-visible-items");
				$(this).addClass("is-covered");
				parent.find(".item-wrap").addClass("is-visible");
				parent.find(".js-btn-masonry").addClass("is-active");
				$("body").addClass("is-visible-items");
			}
			event.stopPropagation();
			return false;
		}
	});


	$(window).resize(function(){
		if (verge.viewportW() <= 768) {
			$(".js-masonry").masonry("destroy");
			$(".item-wrap").removeClass("is-visible");
			$(".js-cover").removeClass("is-covered");
			$(".js-btn-masonry").removeClass("is-active");
		}
	});

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

	$("body").on("click",".js-item-head",function(){
		if (verge.viewportW() <= 992) {
			if (!$(this).parents(".item").hasClass("is-active")) {
				$(".item").removeClass("is-active");
				$(this).parents(".item").addClass("is-active");
			}
			else {
				$(".item").removeClass("is-active");
			}
			
			return false;
		}
		
	});

	$(".js-toggle-tip").hover(
		function(){
			var left = $(this).offset().left;
			var top = $(this).offset().top + $(this).outerHeight();
			if (viewportWidth <= 768) {
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
	$(".js-toggle-tip").on("ontouchstart", function(){
		var left = $(this).offset().left;
		var top = $(this).offset().top + $(this).outerHeight();
		if (viewportWidth <= 768) {
			var left = $(this).parents(".wrapper").offset().left;
		}
		$(".js-tip").addClass("is-visible").css({
			top: top,
			left: left
		});
	});



	$(".js-sale").on("click", function(){
		$(this).parents(".item").toggleClass("is-visible-add").find(".js-sale-add").slideToggle(300);
		return false;
	});

	$(".js-soc-panel a").on("touchstart", function(){
		$(".js-soc-panel a").removeClass("is-active");
		$(this).addClass("is-active");
	});
	// $(".js-soc-panel a").on("touchend", function(){
	// 	$(".js-soc-panel a").removeClass("is-active");
	// });

	$(".js-btn-name").on("click",function(event){
		if ($(this).hasClass("is-active")) {
			$(".js-btn-name").removeClass("is-active");
			$(".list").removeClass("is-active");
		}
		else {
			$(".js-btn-name").removeClass("is-active");
			$(this).addClass("is-active");
			$(".list").removeClass("is-active");
			$(this).parents(".list-wrap").find(".list").addClass("is-active");
		}
		
		event.stopPropagation();
		return false;
	});
	$(".list").on("click",function(event){
		event.stopPropagation();
	});



	$(".js-fancybox").fancybox({
	  padding: 0,
	  helpers: {
	      overlay: {
	        locked: false
	      }
	  },
	  autoWidth: true,
	  autoResize: true,
	  autoCenter: true,
	  margin: 20,
	  minHeight: 0

	 });

	var masonryToSlider = $(".js-masonry-to-slider");
	if (viewportWidth >= 768) {

		var $grid = masonryToSlider.masonry({
			columnWidth: ".grid-sizer",
			gutter: 30,
			itemSelector: ".js-item",
			isFitWidth: true,
			isInitLayout: false,
		});
		$grid.masonry( 'on', 'layoutComplete', function(){
			masonryToSlider.addClass("is-masonry-inited");
		});
		$grid.masonry();
	}
	if (viewportWidth < 768) {
		masonryToSlider.on("init", function(){
			masonryToSlider.addClass("is-slider-init");
		});
		masonryToSlider.slick({
			infinite: false,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			draggable: false,
			responsive: [
			    {
			      breakpoint: 480,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '60px',
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 414,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '50px',
			        slidesToShow: 1
			      }
			    },
			    {
			      breakpoint: 360,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '45px',
			        slidesToShow: 1
			      }
			    },
			    {
			      breakpoint: 330,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '25px',
			        slidesToShow: 1
			      }
			    }
			  ]
		});
	}

	$(window).resize(function(){
		viewportWidth = verge.viewportW();
		if (masonryToSlider.length>0) {

			if (viewportWidth >= 768) {
				if (masonryToSlider.hasClass("is-slider-init")) {
					masonryToSlider.slick('unslick').removeClass("is-slider-init");
					masonryToSlider.find(".js-item").removeAttr("style");
					var $grid = masonryToSlider.masonry({
						columnWidth: ".grid-sizer",
						gutter: 30,
						itemSelector: ".js-item",
						isFitWidth: true,
						isInitLayout: false,
					});
					$grid.masonry( 'on', 'layoutComplete', function(){
						masonryToSlider.addClass("is-masonry-inited");
					});
					$grid.masonry();
				}
				
				

				
			}
			if (viewportWidth < 768) {
				if (masonryToSlider.hasClass("is-masonry-inited")) {
					masonryToSlider.masonry('destroy').removeClass("is-masonry-inited");
					masonryToSlider.on("init", function(){
						masonryToSlider.addClass("is-slider-init");
					});
					masonryToSlider.slick({
						infinite: false,
						centerMode: true,
						centerPadding: '60px',
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						draggable: false,
						responsive: [
						    {
						      breakpoint: 480,
						      settings: {
						        arrows: false,
						        centerMode: true,
						        centerPadding: '60px',
						        slidesToShow: 1,
						        slidesToScroll: 1
						      }
						    },
						    {
						      breakpoint: 414,
						      settings: {
						        arrows: false,
						        centerMode: true,
						        centerPadding: '50px',
						        slidesToShow: 1
						      }
						    },
						    {
						      breakpoint: 360,
						      settings: {
						        arrows: false,
						        centerMode: true,
						        centerPadding: '45px',
						        slidesToShow: 1
						      }
						    },
						    {
						      breakpoint: 330,
						      settings: {
						        arrows: false,
						        centerMode: true,
						        centerPadding: '25px',
						        slidesToShow: 1
						      }
						    }
						  ]
					});
					
				}
				
				
			}
		}
	});
});

