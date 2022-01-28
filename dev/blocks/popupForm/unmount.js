function popupFormUnmount(){
	if (document.querySelector(".popupForm__close svg")) {
		document.querySelector(".popupForm__close svg").remove();
	}

	if (document.querySelector(".popupForm__successText svg")) {
		document.querySelector(".popupForm__successText svg").remove();
	}

	if (document.querySelectorAll(".popupForm__form").length) {
		document.querySelectorAll(".popupForm__form").forEach((item) => {
			item.removeEventListener("submit", popupFormSubmitListener);
		});
	}
}
