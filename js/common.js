"use strict";

$(document).ready(function () {

	$(document).on("click", function () {
		$(".js-toggle-search").removeClass("is-active");
		$(".js-search").removeClass("is-active");
	});

	var videoSlider = {
		init: function init() {
			this.$videoSlider = $(".js-video-slider");
			this.$videoSliderBody = $(".js-video-slider-body");
			this.firstVideo = document.getElementById("0");
			this._bindEvent();
			this.$videoSliderBody.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: false
			});
		},
		_bindEvent: function _bindEvent() {
			if (this.firstVideo) {
				this.firstVideo.addEventListener("canplay", this._startSlider.bind(this));
				this.firstVideo.addEventListener("ended", this._nextSlide.bind(this));
			} else {
				this._startSlider();
			}
			this.$videoSliderBody.on("beforeChange", this._beforeChangeSlide.bind(this));
		},
		_startSlider: function _startSlider() {
			this._showSlider();
			if (this.firstVideo) {
				this._startFirstVideo();
			}
		},
		_startFirstVideo: function _startFirstVideo() {
			this.firstVideo.play();
		},
		_showSlider: function _showSlider() {
			this.$videoSlider.addClass("is-ready");
		},
		_nextSlide: function _nextSlide() {
			$(".js-video-slider-body").slick("next");
		},
		_beforeChangeSlide: function _beforeChangeSlide(event, slick, currentSlide, nextSlide) {
			console.log("next: " + nextSlide + " currentSlide: " + currentSlide);
			this._stopCurrentVideo(currentSlide, nextSlide);
			this._playNextVideo(currentSlide, nextSlide);
		},
		_stopCurrentVideo: function _stopCurrentVideo(currentSlide, nextSlide) {
			var videoCurrent = document.getElementById(currentSlide);
			if (videoCurrent) videoCurrent.pause();
		},
		_playNextVideo: function _playNextVideo(currentSlide, nextSlide) {
			var videoNext = document.getElementById(nextSlide);
			if (videoNext) {
				videoNext.play();
				videoNext.addEventListener("ended", this._nextSlide);
			}
		}
	};
	videoSlider.init();

	var toggle = {
		init: function init(options) {
			this.$btn = $(options.btn);
			this.$focusInput;
			this.focusInput = options.focus;
			this._bindEvent();
		},
		_bindEvent: function _bindEvent() {
			this.$btn.on("click", this._toggleTarget.bind(this));
		},
		_toggleTarget: function _toggleTarget(event) {
			var $el = $(event.currentTarget);
			var $target = $("." + $el.data("toggle"));
			$target.toggleClass("is-active");
			$el.toggleClass("is-active");
			//console.log(this.focusInput);
			// if (this.focusInput) {
			// 	focusInput.init(this.focusInput);
			// }
			return false;
		}
	};
	toggle.init({
		btn: ".js-toggle"
	});
	toggle.init({
		btn: ".js-toggle-search",
		focus: ".js-search input"
	});

	var shower = {
		init: function init(btn) {
			this.$btn = $(btn);
			this._bindEvent();
		},
		_bindEvent: function _bindEvent() {
			this.$btn.on("click", this._toggleClass.bind(this));
		},
		_toggleClass: function _toggleClass(event) {
			var $el = $(event.currentTarget);
			var parentClass = $el.data("class");
			var $parent = $($el.data("parent"));
			$parent.toggleClass(parentClass);
			$el.toggleClass("is-active");
			event.stopPropagation();
		}
	};

	shower.init(".js-toggle-class");

	var focusInput = {
		init: function init(input) {
			this.$input = $(input);
			this._focus();
		},
		_focus: function _focus() {
			this.$input.focus();
		}
	};

	$(".js-search").on("click", function (event) {
		event.stopPropagation();
	});
});