function header4Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header4__menuChecker").length) {
		document.querySelectorAll(".header4__menuChecker").forEach((item) => {
			item.removeEventListener("click", header4OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu4__link").length) {
		document.querySelectorAll(".mainMenu4__link").forEach((item) => {
			item.removeEventListener("click", menu4LinkClickListener);
		});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
