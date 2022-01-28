function menu3LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget
		.closest(".header3")
		.querySelector(".mainMenu3")
		.classList.remove("mainMenu3--active");
	evt.currentTarget
		.closest(".header3")
		.querySelector(".header3__menuChecker")
		.classList.remove("header3__menuChecker--active");
}

function header3OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header3");
	document.body.classList.toggle("scrollOff");
	currentHeader
		.querySelector(".mainMenu3")
		.classList.toggle("mainMenu3--active");
}

function header3Init() {
	header3Unmount();

	let mainMenuLinks = document.querySelectorAll(".mainMenu3__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu3LinkClickListener);
		});
	}

	let header3Checkers = document.querySelectorAll(".header3__menuChecker");
	if (header3Checkers.length) {
		header3Checkers.forEach((item) => {
			item.addEventListener("click", header3OpenMenu);
		});
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
