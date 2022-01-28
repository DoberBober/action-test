function menu4LinkClickListener(evt) {
	document.body.classList.remove("scrollOff");
	evt.currentTarget.closest(".header4").querySelector(".mainMenu4").classList.remove("mainMenu4--active");
	evt.currentTarget.closest(".header4").querySelector(".header4__menuChecker").classList.remove("header4__menuChecker--active");
}

function header4OpenMenu(evt) {
	let currentHeader = evt.currentTarget.closest(".header4");
	document.body.classList.toggle("scrollOff");
	currentHeader.querySelector(".mainMenu4").classList.toggle("mainMenu4--active");
}

function header4Init() {
	header4Unmount();

	let header4PhoneLinks = document.querySelectorAll(".mainMenu4__phone");
	if (header4PhoneLinks.length) {
		header4PhoneLinks.forEach((item) => {
			let cleanPhone = item.innerText.replace(/[^\d+]/g, "");
			if (cleanPhone[0] == 8) {
				cleanPhone = "+7" + cleanPhone.slice(1);
			}

			item.setAttribute("href", `tel:${cleanPhone}`);
		});
	}

	let mainMenuLinks = document.querySelectorAll(".mainMenu4__link");
	if (mainMenuLinks.length) {
		mainMenuLinks.forEach((item) => {
			item.addEventListener("click", menu4LinkClickListener);
		});
	}

	let header4Checkers = document.querySelectorAll(".header4__menuChecker");
	if (header4Checkers.length) {
		header4Checkers.forEach((item) => {
			item.addEventListener("click", header4OpenMenu);
		});
	}

	let headerAnimate = document.querySelector(".headerAnimate");
	if (headerAnimate) {
		window.addEventListener("scroll", headerScrollAnimate, false);
	}
}
