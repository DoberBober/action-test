function menu5LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget
		.closest(".header5")
		.querySelector(".mainMenu5")
		.classList.remove("mainMenu5--active");
	evt.currentTarget
		.closest(".header5")
		.querySelector(".header5__menuChecker")
		.classList.remove("header5__menuChecker--active");
}

function header5OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header5");
	document.body.classList.toggle("scrollOff");
	currentHeader
		.querySelector(".mainMenu5")
		.classList.toggle("mainMenu5--active");
}

function header5Init() {
	header5Unmount();

	let mainMenuLinks = document.querySelectorAll(".mainMenu5__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu5LinkClickListener);
		});
	}

	let header5Checkers = document.querySelectorAll(".header5__menuChecker");
	if (header5Checkers.length) {
		header5Checkers.forEach((item) => {
			item.addEventListener("click", header5OpenMenu);
		});
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
