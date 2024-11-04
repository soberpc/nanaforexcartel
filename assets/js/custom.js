$(function () {
	"use strict";
	// ============= Preloader =======================
	let loader = document.querySelector(".preloader");
	window.addEventListener("scroll", vanish)
	function vanish() {
	  loader.classList.add("dispear");
	}
	setTimeout(function () {
		$('.preloader-bg').fadeToggle();
	}, 1500);
});