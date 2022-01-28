function popupFormSubmitListener(evt) {
	evt.preventDefault();

	let popupBlock = evt.currentTarget.closest(".popupForm");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			popupBlock.classList.add("popupForm--success");
			setTimeout(() => {
				popupBlock.classList.remove("isPopup--visible");
				if (document.querySelector(".isPopupOverlay")) {
					document.querySelector(".isPopupOverlay").remove();
				}
			}, 2000);
			setTimeout(() => {
				popupBlock.classList.remove("popupForm--success");
			}, 3000);
		}
	});
}

function popupFormInit() {
	let popupFormSuccessIconWrapper = document.querySelector(
		".popupForm__successTextIcon"
	);
	let popupSuccess = document.querySelector(".popupForm__successText");

	if (popupSuccess && popupSuccess.querySelector("svg")) {
		popupSuccess.querySelector("svg").remove();
	}

	if (popupSuccess) {
		injectSVG(popupFormSuccessIconWrapper, isPopupSuccessSVG);
	}

	if (document.querySelectorAll(".popupForm__form").length) {
		document.querySelectorAll(".popupForm__form").forEach((item) => {
			item.removeEventListener("submit", popupFormSubmitListener);
			item.addEventListener("submit", popupFormSubmitListener);

			item.querySelector('input[name="domainName"]').value =
				window.location.hostname;
		});
	}
}
