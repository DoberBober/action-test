function popupForm2Unmount() {
	if (document.querySelector(".popupForm2__close svg")) {
		document.querySelector(".popupForm2__close svg").remove();
	}

	if (document.querySelector(".popupForm2__successText svg")) {
		document.querySelector(".popupForm2__successText svg").remove();
	}

	if (document.querySelectorAll(".popupForm2__form").length) {
		document.querySelectorAll(".popupForm2__form").forEach((item) => {
			item.removeEventListener("submit", popupForm2SubmitListener);
		});
	}
}
