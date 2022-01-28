function menu6LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget.closest(".header6").querySelector(".mainMenu6").classList.remove("mainMenu6--active");
	evt.currentTarget.closest(".header6").querySelector(".header6__menuChecker").classList.remove("header6__menuChecker--active");
}

function header6OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header6");
	document.body.classList.toggle("scrollOff");
	currentHeader.querySelector(".mainMenu6").classList.toggle("mainMenu6--active");
}

function header6Init() {
	header6Unmount();

	let header6PhoneLinks = document.querySelectorAll(".mainMenu6__phone");
	if (header6PhoneLinks.length) {
		header6PhoneLinks.forEach((item) => {
			let cleanPhone = item.innerText.replace(/[^\d+]/g, "");
			if (cleanPhone[0] == 8) {
				cleanPhone = "+7" + cleanPhone.slice(1);
			}

			item.setAttribute("href", `tel:${cleanPhone}`);
		});
	}

	let mainMenuLinks = document.querySelectorAll(".mainMenu6__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu6LinkClickListener);
		});
	}

	let header6Checkers = document.querySelectorAll(".header6__menuChecker");
	if (header6Checkers.length) {
		header6Checkers.forEach((item) => {
			item.addEventListener("click", header6OpenMenu);
		});
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
