function header7Unmount() {
	document.body.classList.remove("scrollOff");

	if (document.querySelectorAll(".header7__menuChecker").length) {
		document.querySelectorAll(".header7__menuChecker").forEach((item) => {
			item.removeEventListener("click", header7OpenMenu);
		});
	}

	if (document.querySelectorAll(".mainMenu7__link").length) {
		document.querySelectorAll(".mainMenu7__link").forEach((item) => {
			item.removeEventListener("click", menu7LinkClickListener);
		});
	}

	if (
		document.querySelectorAll(
			".mainMenu7__list--firstPart .mainMenu7__item"
		).length
	) {
		document
			.querySelectorAll(".mainMenu7__list--firstPart .mainMenu7__item")
			.forEach((item) => {
				item.classList.remove("hidden");
			});
	}

	if (
		document.querySelectorAll(
			".mainMenu7__list:not(.mainMenu7__list--firstPart) .mainMenu7__item"
		).length
	) {
		document
			.querySelectorAll(
				".mainMenu7__list:not(.mainMenu7__list--firstPart) .mainMenu7__item"
			)
			.forEach((item) => {
				item.classList.remove("onlyMobile");
			});
	}

	window.removeEventListener("scroll", headerScrollAnimate, false);
}
