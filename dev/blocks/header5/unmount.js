function header5Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header5__menuChecker").length) {
		document.querySelectorAll(".header5__menuChecker").forEach((item) => {
			item.removeEventListener("click", header5OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu5__link").length) {
		document.querySelectorAll(".mainMenu5__link").forEach((item) => {
			item.removeEventListener("click", menu5LinkClickListener);
		});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
