function header6Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header6__menuChecker").length) {
		document.querySelectorAll(".header6__menuChecker").forEach((item) => {
			item.removeEventListener("click", header6OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu6__link").length) {
		document.querySelectorAll(".mainMenu6__link").forEach((item) => {
			item.removeEventListener("click", menu6LinkClickListener);
		});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
