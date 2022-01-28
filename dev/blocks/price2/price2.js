function price2Init() {
	price2Unmount();

	// Регулируем размер шрифта.
	let price2PricesAll = document.querySelectorAll(".price2__itemPrice");
	if (price2PricesAll.length) {
		price2PricesAll.forEach((price) => {
			if (price.innerText.trim().length > 10) {
				price.classList.add("price2__itemPrice--small");
			} else {
				price.classList.remove("price2__itemPrice--small");
			}
		});
	}
}
