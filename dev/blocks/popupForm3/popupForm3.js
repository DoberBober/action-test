function popupForm3SubmitListener(evt) {
	evt.preventDefault();

	let popupBlock = evt.currentTarget.closest(".popupForm3");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			popupBlock.classList.add("popupForm3--success");
			setTimeout(() => {
				popupBlock.classList.remove("isPopup--visible");
				popupBlock.classList.remove("popupForm3--success");
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

function popupForm3Init() {
	let popupForm3SuccessIconWrapper = document.querySelector(
		".popupForm3__successTextIcon"
	);
	let popupSuccess = document.querySelector(".popupForm3__successText");

	if (popupSuccess && popupSuccess.querySelector("svg")) {
		popupSuccess.querySelector("svg").remove();
	}

	if (popupSuccess) {
		injectSVG(popupForm3SuccessIconWrapper, isPopupSuccessSVG);
	}

	if (document.querySelectorAll(".popupForm3__form").length) {
		document.querySelectorAll(".popupForm3__form").forEach((item) => {
			item.removeEventListener("submit", popupForm3SubmitListener);
			item.addEventListener("submit", popupForm3SubmitListener);

			item.querySelector('input[name="domainName"]').value =
				window.location.hostname;
		});
	}
}
