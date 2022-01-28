// // Popup and popup overlay.
function popupHide() {
	document.querySelector(".overlay").classList.remove("overlay--visible");
	document.querySelector(".popUp").classList.remove("popUp--visible");
	document
		.querySelector(".popUp__close")
		.classList.remove("popUp__close--visible");
	document.body.classList.remove("scrollOff");
}

if (!document.querySelector(".popUp")) {
	let popupOverlayElement = document.createElement("div");
	popupOverlayElement.classList.add("overlay");
	document.body.append(popupOverlayElement);

	let popupElement = document.createElement("div");
	popupElement.classList.add("popUp");
	popupElement.innerHTML = `<div class="popUp__content">${popupSuccessSVG}<h2 class="popUp__title">Ваша заявка принята!</h2></div>`;
	document.body.append(popupElement);

	let popupCloseElement = document.createElement("button");
	popupCloseElement.classList.add("popUp__close");
	popupCloseElement.setAttribute("type", "button");
	popupCloseElement.innerHTML = `${popupCloseSVG}`;
	document.body.append(popupCloseElement);

	if (popupElement && popupCloseElement) {
		popupCloseElement.addEventListener("click", popupHide);
	}

	if (popupOverlayElement) {
		popupOverlayElement.addEventListener("click", popupHide);
	}
}
