function about5Init() {
	let about5List = document.querySelectorAll(".about5__container");

	if (about5List.length) {
		about5List.forEach((item) => {
			item.classList.remove("about5__container--oneColumn");

			if (!item.querySelector(".about5__notation")) {
				item.classList.add("about5__container--oneColumn");
			}
		});
	}
}
