function popupForm5Unmount() {
	if (document.querySelector(".popupForm5__close svg")) {
		document.querySelector(".popupForm5__close svg").remove();
	}

	if (document.querySelector(".popupForm5__successText svg")) {
		document.querySelector(".popupForm5__successText svg").remove();
	}

	if (document.querySelectorAll(".popupForm5__form").length) {
		document.querySelectorAll(".popupForm5__form").forEach((item) => {
			item.removeEventListener("submit", popupForm5SubmitListener);
		});
	}
}
