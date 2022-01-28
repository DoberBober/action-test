function header3Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header3__menuChecker").length) {
		document.querySelectorAll(".header3__menuChecker").forEach((item) => {
			item.removeEventListener("click", header3OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu3__link").length) {
		document.querySelectorAll(".mainMenu3__link").forEach((item) => {
			item.removeEventListener("click", menu3LinkClickListener);
		});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
