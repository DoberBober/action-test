function popupForm4Unmount() {
	if (document.querySelector(".popupForm4__close svg")) {
		document.querySelector(".popupForm4__close svg").remove();
	}

	if (document.querySelector(".popupForm4__successText svg")) {
		document.querySelector(".popupForm4__successText svg").remove();
	}

	if (document.querySelectorAll(".popupForm4__form").length) {
		document.querySelectorAll(".popupForm4__form").forEach((item) => {
			item.removeEventListener("submit", popupForm4SubmitListener);
		});
	}
}
