function popupForm4SubmitListener(evt) {
	evt.preventDefault();

	let popupBlock = evt.currentTarget.closest(".popupForm4");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			popupBlock.classList.add("popupForm4--success");
			setTimeout(() => {
				popupBlock.classList.remove("isPopup--visible");
				popupBlock.classList.remove("popupForm4--success");
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

function popupForm4Init() {
	let popupForm4SuccessIconWrapper = document.querySelector(
		".popupForm4__successTextIcon"
	);
	let popupSuccess = document.querySelector(".popupForm4__successText");

	if (popupSuccess && popupSuccess.querySelector("svg")) {
		popupSuccess.querySelector("svg").remove();
	}

	if (popupSuccess) {
		injectSVG(popupForm4SuccessIconWrapper, isPopupSuccessSVG);
	}

	if (document.querySelectorAll(".popupForm4__form").length) {
		document.querySelectorAll(".popupForm4__form").forEach((item) => {
			item.removeEventListener("submit", popupForm4SubmitListener);
			item.addEventListener("submit", popupForm4SubmitListener);

			item.querySelector('input[name="domainName"]').value =
				window.location.hostname;
		});
	}
}
