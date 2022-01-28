function price2Unmount() {
	if (document.querySelectorAll(".price2__itemPrice--small").length) {
		document
			.querySelectorAll(".price2__itemPrice--small")
			.forEach((price) => {
				price.classList.remove("price2__itemPrice--small");
			});
	}
}
