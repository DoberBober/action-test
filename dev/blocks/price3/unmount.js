function price3Unmount() {
	if (document.querySelectorAll(".price3__itemHeading--fullWidth").length) {
		document
			.querySelectorAll(".price3__itemHeading--fullWidth")
			.forEach((item) => {
				item.classList.remove("price3__itemHeading--fullWidth");
			});
	}

	if (document.querySelectorAll(".price3__itemPrice--small").length) {
		document
			.querySelectorAll(".price3__itemPrice--small")
			.forEach((price) => {
				price.classList.remove("price3__itemPrice--small");
			});
	}
}
