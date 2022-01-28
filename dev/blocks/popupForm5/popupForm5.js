function popupForm5SubmitListener(evt) {
	evt.preventDefault();

	let popupBlock = evt.currentTarget.closest(".popupForm5");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			popupBlock.classList.add("popupForm5--success");
			setTimeout(() => {
				popupBlock.classList.remove("isPopup--visible");
				popupBlock.classList.remove("popupForm5--success");
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

function popupForm5Init() {
	let popupForm5SuccessIconWrapper = document.querySelector(
		".popupForm5__successTextIcon"
	);
	let popupSuccess = document.querySelector(".popupForm5__successText");

	if (popupSuccess && popupSuccess.querySelector("svg")) {
		popupSuccess.querySelector("svg").remove();
	}

	if (popupSuccess) {
		injectSVG(popupForm5SuccessIconWrapper, isPopupSuccessSVG);
	}

	if (document.querySelectorAll(".popupForm5__form").length) {
		document.querySelectorAll(".popupForm5__form").forEach((item) => {
			item.removeEventListener("submit", popupForm5SubmitListener);
			item.addEventListener("submit", popupForm5SubmitListener);

			item.querySelector('input[name="domainName"]').value =
				window.location.hostname;
		});
	}
}
