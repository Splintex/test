"use strict";

$(document).ready(function () {

	$(".js-crsl-demo").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true
	});
	$(".js-crsl-overview").on('init', function (event, slick, direction) {
		setTimeout(function () {
			$(".js-crsl-overview").addClass("is-ready");
		}, 200);
	});
	$(".js-crsl-overview").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		asNavFor: '.js-crsl-overview-nav'

	});
	$(".js-crsl-overview-nav").on('init', function (event, slick, direction) {
		setTimeout(function () {
			$(".js-crsl-overview-nav").addClass("is-ready");
		}, 200);
	});
	$(".js-crsl-overview-nav").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		asNavFor: '.js-crsl-overview'
	});
	$(".js-crsl-history").on('init', function (event, slick, direction) {
		setTimeout(function () {
			$(".js-crsl-history").addClass("is-ready");
		}, 200);
	});
	$(".js-crsl-history").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		focusOnSelect: true,
		asNavFor: '.js-crsl-history-nav'
	});
	$(".js-crsl-history-nav").on('init', function (event, slick, direction) {
		setTimeout(function () {
			$(".js-crsl-history-nav").addClass("is-ready");
		}, 200);
	});
	$(".js-crsl-history-nav").slick({
		slidesToShow: 15,
		infinite: false,
		slideToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		asNavFor: '.js-crsl-history'
	});
});