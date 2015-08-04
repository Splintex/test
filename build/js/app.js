(function() {
	
	$(document).click(function(){
		if ($(".js-search").hasClass("is-active")) {
			$(".js-toggle-search").removeClass("is-active");
			$(".js-search").removeClass("is-active");
		}
		if ($(".js-dropdown").hasClass("is-active")) {
			$(".js-dropdown-trigger").removeClass("is-active");
			$(".js-dropdown").removeClass("is-active");
		}
		if ($(".js-card").hasClass("is-active")) {
			
			$(".js-card").removeClass("is-active");
		}
	});

// show/hide any blocks
	$(".js-toggle").on("click", function() {
		var el = $(this).attr("data-toggle");
		$("."+el).toggleClass("is-active");
		$(this).toggleClass("is-active");
		return false;
	});

// search
	$(".js-toggle-search").on("click", function(event) {
		$(this).parents(".js-search").toggleClass("is-active");
		$(this).parents(".js-search").find(".input").trigger("click");
		event.stopPropagation();
		return false;
	});
	$(".js-search .search-form__main").on("click", function(event) {
		event.stopPropagation();
	});

	$(".js-search .search__main").on("click", function(event) {
		event.stopPropagation();
	});

// dropdown
	$(".js-dropdown-trigger").on("click", function(event) {
		var dropdown = $(this).attr("data-dropdown");
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$("."+dropdown).removeClass("is-active");
		}
		else {
			$(".js-dropdown-trigger").removeClass("is-active");
			$(".js-dropdown").removeClass("is-active");
			$(this).addClass("is-active");
			$("."+dropdown).addClass("is-active");
		}
		event.stopPropagation();
		return false;
	});
	$(".js-dropdown").on("click", function(event) {
		event.stopPropagation();
	});

	$(".js-dropdown").on("click", function(event) {
		event.stopPropagation();
	});

// remove parent
	$(".js-del").on("click", function(event) {
		$(this).parents(".js-parent").remove();
		return false;
	});

// select 2 init
	$(".js-select").select2();

// header extend
	$(".js-toggle-header").on("click", function() {
		$(".header").toggleClass("is-active");
		return false;
	});

// menu
	$(".js-toggle-menu").on("click", function() {
		$(".js-menu").toggleClass("is-active");
		return false;
	});

	$('.js-slider').on('init', function(slick) {
		setTimeout(function(){
		  	$('.js-slider').parent().addClass("is-ready");
		},200);
	});
	$(".js-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
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
		    	breakpoint: 740,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '80px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			},
			{
		    	breakpoint: 400,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '50px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			},
			{
		    	breakpoint: 375,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '40px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			},
		]
	});

	$(".js-prev").on("click", function() {
		$(this).parent().find(".slick-prev").trigger("click");
		return false;
	});

	$(".js-next").on("click", function() {
		$(this).parent().find(".slick-next").trigger("click");
		return false;
	});

	$(".js-pop-slider").slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 4000
	});

	$(".js-card").on("click", function(event) {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active")
		}
		else {
			$(".js-card").removeClass("is-active");
			$(this).addClass("is-active");
		}
		event.stopPropagation();
	});

	function fixHeader() {
		var top = $(".search").outerHeight();
		var scroll = $(document).scrollTop();
		var header = $(".js-header-index");
		if (scroll >= top) {
			header.removeClass("header_index").addClass("is-fixed");
		}
		else {
			header.addClass("header_index").removeClass("is-fixed");
		}
		
	}
	if ($(".js-header-index").length) {
		fixHeader();
	}
	$(window).resize(function() {
		if ($(".js-header-index").length) {
			fixHeader();
		}
	});
	$(window).scroll(function() {
		if ($(".js-header-index").length) {
			fixHeader();
		}
	});

	$('.js-masonry').masonry({
		// options
		itemSelector: '.js-masonry-item',
		stamp: '.js-masonry-stamp',
		columnWidth: 314,
		gutter: 40
	});

	function validate() {
		$('.js-validate').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'has-error',
					rules: {
						username: {
							minlength: 2
						},
						any: {
							minlength: 2
						},
						password: {
							minlength: 5
						},
						confirm_password: {
							minlength: 5,
							equalTo: '#password'
						},
						email: {
							email: true
						},
						tel: {
							minlength: 2,
						},
						address: {
							minlength: 2
						},
						message: {
							minlength: 4
						},
						field: {
							required: true
						},
						// fruit: {
						//   required: true
						// }
					},
					messages: {
						firstname: 'Вас так зовут?',
						lastname: 'У вас такая фамилия?',
						fathername: 'У вас такое отчество?',
						password: {
							required: 'Введите пароль',
							minlength: 'Минимум 5 символов'
						},
						confirm_password: {
							 required: 'Пароли не совпадают',
							 minlength: 'Минимум 5 символов',
							 equalTo: 'Пароли не совпадают'
						},
						email: 'Неверный формат',
						address: 'Это Ваш адрес?',
						any: 'Заполните поле',
						company: 'Заполните поле',
						tel: {
							required: 'Заполните поле',
						},
						message: {
							required: 'Заполните поле',
							minlength: 'Заполните поле'
						}
					}
				});
			}
		});
	}
		
	validate();

	$('.js-tel').on('keyup', function(){
        var value = $(this).val();
        var re = /[^0-9,]/;
        if (re.test(value)) {
	        value = value.replace(re, '');
	        $(this).val(value);
	    }
			// set max and min value
    	if($(this).val().length < 7 || $(this).val().length > 12) {
    		$(this).addClass('has-error');
    	} else {
	    	$(this).removeClass('has-error');
	    }
    });

	$('.js-promo-slider').on('init', function(slick) {
		setTimeout(function(){
		  	$('.js-promo-slider').parent().addClass("is-ready");
		},200);
	});
    $(".js-promo-slider").slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		adaptiveHeight: true,
		autoplaySpeed: 4000
	});

	$('.js-top-slider').on('init', function(slick) {
		setTimeout(function(){
		  	$('.js-top-slider').parent().addClass("is-ready");
		},200);
	});
	$(".js-top-slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
		    	breakpoint: 740,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '40px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			},
			{
		    	breakpoint: 400,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '20px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			},
			{
		    	breakpoint: 375,
		    	settings: {
		        	arrows: false,
		        	centerMode: true,
		        	centerPadding: '10px',
		        	slidesToShow: 1,
		        	slidesToScroll: 1
		      	}
			}
		]
	});

	$(".js-el-slider").slick({
		infinite: false,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		draggable: false,
		//lazyLoad: 'ondemand',
		swipe: false
	});
	
	$(".js-cat-slider").slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		centerMode: true,
		variableWidth: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					autoplay: false
				}
			}
		]
	});

// sort slider top
	$('.js-cat-slider a').on('click', function(){
	var el = $(this).attr("data-filter");
	  if (!$(this).hasClass("is-active")) {
	  	$('.js-cat-slider a').removeClass("is-active");
	  	$(this).addClass("is-active");
	    $('.js-top-slider').slick('slickFilter','.'+el);
	    //filtered = true;
	  } else {
	  	$(this).removeClass("is-active");
	    $('.js-top-slider').slick('slickUnfilter');
	    //filtered = false;
	  }
	  return false;
	});

	$('.js-sort-slider a').on('click', function(){
	  var el = $(this).attr("data-filter");
	  if (!$(this).parent().hasClass("is-active")) {
	  	$('.js-sort-slider li').removeClass("is-active");
	  	$(this).parent().addClass("is-active");
	    $('.js-slider-hot').slick('slickFilter','.'+el);
	  } else {
	  	$(this).removeClass("is-active");
	    $('.js-slider-hot').slick('slickUnfilter');
	  }
	  return false;
	});

	$(".js-search-example a").on('click', function(){
		var value = $(this).attr("data-val");
		$(".js-select-band .js-select").val(value);
		$(".js-select-band .select2-selection__placeholder").text(value).addClass("is-active");
		$(".js-select-band .select2-selection__rendered").text(value);
		return false;
	});

	

})();