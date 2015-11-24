head.ready(function() {

	$(".js-btn-dropdown").on("click", function(){
		$(this).toggleClass("is-active");
		$(".js-list-dropdown").toggleClass("is-active");
		return false;
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

	// $(".js-file-input").on("change", function() {
	//     for(var i = 0; i < this.files.length; i++) {
	//     	$(this).parents(".to-comment").find(".js-files-list").append('<div class="download-name js-file-name"><span>'+this.files[i].name+'</span><button type="button"></button></div>');
	//     }
	//     $(".js-file-name").removeClass("is-inactive");
	// });
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

});