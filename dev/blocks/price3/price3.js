function price3Init() {
	price3Unmount();

	let allPrice3cards = document.querySelectorAll(".price3__item");
	if (allPrice3cards.length) {
		allPrice3cards.forEach((item) => {
			if (
				item.querySelector(".price3__itemDesc").textContent.trim()
					.length == 0
			) {
				item.querySelector(".price3__itemHeading").classList.add(
					"price3__itemHeading--fullWidth"
				);
			} else {
				item.querySelector(".price3__itemHeading").classList.remove(
					"price3__itemHeading--fullWidth"
				);
			}
		});
	}

	// Регулируем размер шрифта.
	let price3PricesAll = document.querySelectorAll(".price3__itemPrice");
	if (price3PricesAll.length) {
		price3PricesAll.forEach((price) => {
			if (price.innerText.trim().length > 10) {
				price.classList.add("price3__itemPrice--small");
			} else {
				price.classList.remove("price3__itemPrice--small");
			}
		});
	}
}
