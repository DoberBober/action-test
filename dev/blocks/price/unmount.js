function priceUnmount(){
	if (document.querySelector("#priceForm")) {
		document
			.querySelector("#priceForm")
			.removeEventListener("submit", priceSubmitFunction);
	}

	if (document.querySelector(".price__submit svg")) {
		document.querySelector(".price__submit svg").remove();
	}
}
