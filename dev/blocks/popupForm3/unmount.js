function popupForm3Unmount() {
	if (document.querySelector(".popupForm3__close svg")) {
		document.querySelector(".popupForm3__close svg").remove();
	}

	if (document.querySelector(".popupForm3__successText svg")) {
		document.querySelector(".popupForm3__successText svg").remove();
	}

	if (document.querySelectorAll(".popupForm3__form").length) {
		document.querySelectorAll(".popupForm3__form").forEach((item) => {
			item.removeEventListener("submit", popupForm3SubmitListener);
		});
	}
}
