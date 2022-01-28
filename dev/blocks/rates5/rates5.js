function rates5tabListener(evt) {
	let targetBlock = evt.currentTarget.closest(".rates5");

	targetBlock
		.querySelector(".rates5__tab--active")
		.classList.remove("rates5__tab--active");
	evt.currentTarget.classList.add("rates5__tab--active");

	let allItems = targetBlock.querySelectorAll(".rates5__item");
	if (allItems.length) {
		allItems.forEach((item) => {
			if (item.dataset.ratetype != evt.currentTarget.dataset.ratetype) {
				item.classList.add("hidden");
			} else {
				item.classList.remove("hidden");
			}
		});
	}
}

function rates5Init() {
	rates5Unmount();

	// Регулируем размер шрифта.
	let rates5PricesAll = document.querySelectorAll(".rates5__itemPrice");
	if (rates5PricesAll.length) {
		rates5PricesAll.forEach((price) => {
			if (price.innerText.trim().length > 16) {
				price.classList.add("rates5__itemPrice--small");
			} else {
				price.classList.remove("rates5__itemPrice--small");
			}
		});
	}

	let rates5All = document.querySelectorAll(".rates5");

	if (rates5All.length) {
		rates5All.forEach((rates) => {
			// Выводим СВГшки ссылок.
			if (rates.querySelectorAll(".rates5__itemLink").length) {
				rates.querySelectorAll(".rates5__itemLink").forEach((item) => {
					let rates5LinkSvgWrapper = document.createElement("div");
					rates5LinkSvgWrapper.innerHTML =
						'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H22V22M21.5 2.5L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>';
					item.append(rates5LinkSvgWrapper.firstChild);
				});
			}

			// Активируем нужный тип.
			let allTabs = rates.querySelectorAll(".rates5__tab");

			if (allTabs.length) {
				allTabs[0].classList.add("rates5__tab--active");

				let allRatesItems = rates.querySelectorAll(".rates5__item");
				if (allRatesItems.length) {
					allRatesItems.forEach((ratesItem) => {
						if (
							ratesItem.dataset.ratetype !=
							allTabs[0].dataset.ratetype
						) {
							ratesItem.classList.add("hidden");
						}
					});
				}

				// Добавляем листенер на переключение табов.
				allTabs.forEach((tabBtn) => {
					tabBtn.addEventListener("click", rates5tabListener);
				});
			}
		});
	}
}
