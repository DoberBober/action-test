function popupForm2SubmitListener(evt) {
	evt.preventDefault();

	let popupBlock = evt.currentTarget.closest(".popupForm2");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			popupBlock.classList.add("popupForm2--success");
			setTimeout(() => {
				popupBlock.classList.remove("isPopup--visible");
				popupBlock.classList.remove("popupForm2--success");
				if (document.querySelector(".isPopupOverlay")) {
					document.querySelector(".isPopupOverlay").remove();
				}
				if (document.querySelector(".isPopup__close")) {
					document.querySelector(".isPopup__close").remove();
				}
			}, 2000);
		}
	});
}

function popupForm2Init() {
	let popupForm2SuccessIconWrapper = document.querySelector(
		".popupForm2__successTextIcon"
	);
	let popupSuccess = document.querySelector(".popupForm2__successText");

	if (popupSuccess && popupSuccess.querySelector("svg")) {
		popupSuccess.querySelector("svg").remove();
	}

	if (popupSuccess) {
		injectSVG(popupForm2SuccessIconWrapper, isPopupSuccessSVG);
	}

	if (document.querySelectorAll(".popupForm2__form").length) {
		document.querySelectorAll(".popupForm2__form").forEach((item) => {
			item.removeEventListener("submit", popupForm2SubmitListener);
			item.addEventListener("submit", popupForm2SubmitListener);

			item.querySelector('input[name="domainName"]').value =
				window.location.hostname;
		});
	}
}
