function header2Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header2__menuChecker").length) {
		document.querySelectorAll(".header2__menuChecker").forEach((item) => {
			item.removeEventListener("click", header2OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu2__link").length) {
		document.querySelectorAll(".mainMenu2__link").forEach((item) => {
			item.removeEventListener("click", menu2LinkClickListener);
		});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
