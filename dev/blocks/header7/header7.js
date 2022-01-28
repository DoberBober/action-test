function menu7LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget
		.closest(".header7")
		.querySelector(".mainMenu7")
		.classList.remove("mainMenu7--active");
	evt.currentTarget
		.closest(".header7")
		.querySelector(".header7__menuChecker")
		.classList.remove("header7__menuChecker--active");
}

function header7OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header7");
	document.body.classList.toggle("scrollOff");
	currentHeader
		.querySelector(".mainMenu7")
		.classList.toggle("mainMenu7--active");
}

function header7Init() {
	header7Unmount();

	let mainMenuLinks = document.querySelectorAll(".mainMenu7__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu7LinkClickListener);
		});
	}

	let header7Checkers = document.querySelectorAll(".header7__menuChecker");
	if (header7Checkers.length) {
		header7Checkers.forEach((item) => {
			item.addEventListener("click", header7OpenMenu);
		});
	}

	let header7MenuFirstPartItems = document.querySelectorAll(
		".mainMenu7__list--firstPart .mainMenu7__item"
	);
	let header7MenuMainPartItems = document.querySelectorAll(
		".mainMenu7__list:not(.mainMenu7__list--firstPart) .mainMenu7__item"
	);

	if (header7MenuFirstPartItems.length) {
		let separator = Math.round(header7MenuFirstPartItems.length / 2);

		for (let i = separator; i < header7MenuFirstPartItems.length; i++) {
			header7MenuFirstPartItems[i].classList.add("hidden");
		}
		for (let i = 0; i < separator; i++) {
			header7MenuMainPartItems[i].classList.add("onlyMobile");
		}
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
