$(document).ready(function() {
	$(document).on("click", function() {
		$(".dropdown").removeClass("is-active");
		$(".js-dropdown-search").removeClass("to-show");
	});
	$(".js-btn-dropdown").on("click", function(){
		$(this).parents(".dropdown").toggleClass("is-active");
		return false;
	});
	$(".dropdown").on("click", function(){
		event.stopPropagation();
	});
	$(".js-dropdown-search").on("click", function(){
		event.stopPropagation();
	});
	$(".js-raty").raty({
		score: function() {
			return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		path: 'img/svg',
		starOn: 'star-on.svg',
		starOff: 'star-off.svg',
	});
	$('.js-raty-readonly').raty({
		readOnly: true,
		score: function() {
		    return $(this).attr('data-score');
		},
		hints: ['1', '2', '3', '4', '5'],
		path:      'img/svg',
		starOn:    'star-on.svg',
		starOff:   'star-empty.svg',
		half: false,
	});
	$(".js-btn-file").on("click", function() {
        $(this).next().find("input").trigger("click");
        return false;
	});

	$('.js-file-input').MultiFile({ 
		list: '.js-files-list' 
	});
	$(".js-btn-close").on("click", function() {
		$(".js-popup").removeClass("is-active");
		$(".js-dropdown-search").removeClass("to-show");
	});
	$(".js-reply").on("click",function(){
		$(".js-popup-reply").addClass("is-active")
	});
	$(".js-btn-away").on("click",function(){
		$(".js-popup-away").addClass("is-active")
	});
	$(".js-scroll-to").on("click", function() {
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
    $(".js-accord-title").on("click", function() {
        $(this).toggleClass("is-active").children(".js-accord-body").slideToggle(200);
        return false;
    });
    $(".js-feedback").on("click", function(){
    	$(".js-popup-feedback").addClass("is-active");
    });

    function tog(v) {
    	return v?'addClass':'removeClass';
    } 
	$(document).on('input', '.js-input-search', function(){
	    $(this)[tog(this.value)]('is-active');
	});

	$(".js-clear-search").on("click", function() {
		$(this).parent().find("input").removeClass("is-active");
	});

	(function(){
		var el = $(".js-sticky-add");
		var parent = el.parent();
		var top = parent.offset().top;
		var left = parent.offset().left;
		console.log(left);
		$(window).resize(function() {
			left = parent.offset().left;
			el.css({
				left: left
			});
		});
		$(window).scroll(function() {
			if($(window).scrollTop() + 20 >= top) {
				el.addClass("is-fixed").css({
					left: left
				});
			}
			else {
				el.removeClass("is-fixed");
			}
		});
	})();
	


});