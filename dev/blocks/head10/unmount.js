function head10Unmount() {
	document.querySelectorAll(".head10__form").forEach((item) => {
		item.removeEventListener("submit", head10FormSubmitListener);
	});

	document.querySelectorAll(".head10__formSubmitIcon").forEach((item) => {
		item.remove();
	});

	document.querySelectorAll(".successPopup__iconWrapperSvg").forEach((item) => {
		item.remove();
	});

	document.querySelectorAll(".head10").forEach((item) => {
		item.classList.remove("head10--withoutImg");
	});
}
