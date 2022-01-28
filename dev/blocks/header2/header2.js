function menu2LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget
		.closest(".header2")
		.querySelector(".mainMenu2")
		.classList.remove("mainMenu2--active");
	evt.currentTarget
		.closest(".header2")
		.querySelector(".header2__menuChecker")
		.classList.remove("header2__menuChecker--active");
}

function header2OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header2");
	document.body.classList.toggle("scrollOff");
	currentHeader
		.querySelector(".mainMenu2")
		.classList.toggle("mainMenu2--active");
}

function header2Init() {
	header2Unmount();

	let mainMenuLinks = document.querySelectorAll(".mainMenu2__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu2LinkClickListener);
		});
	}

	let header2Checkers = document.querySelectorAll(".header2__menuChecker");
	if (header2Checkers.length) {
		header2Checkers.forEach((item) => {
			item.addEventListener("click", header2OpenMenu);
		});
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
