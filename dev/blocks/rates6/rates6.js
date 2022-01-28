function rates6tabListener(evt) {
	// Фикс высоты, чтобы не было дёргания.
	let allRatesLists = document.querySelectorAll(".rates6__list");
	allRatesLists.forEach((list) => {
		list.style.minHeight = `${list.getBoundingClientRect().height}px`;
	});

	let targetBlock = evt.currentTarget.closest(".rates6");

	targetBlock.querySelector(".rates6__tab--active").classList.remove("rates6__tab--active");
	evt.currentTarget.classList.add("rates6__tab--active");

	let allItems = targetBlock.querySelectorAll(".rates6__item");
	if (allItems.length) {
		allItems.forEach((item) => {
			if (item.dataset.ratetype != evt.currentTarget.dataset.ratetype) {
				item.classList.add("hidden");
			} else {
				item.classList.remove("hidden");
			}
		});
	}

	if (rates6Sliders.length) {
		rates6Sliders.forEach((slider) => {
			let wrapper = slider.element.querySelector(".flickity-buttons-wrapper");
			if (wrapper) {
				wrapper.after(slider.element.querySelector(".flickity-prev-next-button.previous"));
				wrapper.after(slider.element.querySelector(".flickity-prev-next-button.next"));
				wrapper.remove();
			}
			slider.destroy();
		});
		rates6Sliders = [];
	}

	rates6ActivateSlider(evt.currentTarget.closest(".rates6"));
}

function rates6ActivateSlider(target) {
	let rates6List = document.querySelectorAll(".rates6__list");

	if (rates6List.length) {
		rates6List.forEach((ratesBlock) => {
			if (ratesBlock.querySelectorAll(".rates6__item:not(.hidden").length > 3) {
				let rates6Slider = new Flickity(ratesBlock, {
					imagesLoaded: true,
					pageDots: false,
					cellAlign: "left",
					cellSelector: ".rates6__item:not(.hidden)",
					watchCSS: true,
					initialIndex: 0,
					wrapAround: true,
					arrowShape: sliderArrow,
					on: {
						ready: function () {
							if (ratesBlock.querySelector(".flickity-prev-next-button") && !ratesBlock.querySelector(".flickity-prev-next-button").closest(".flickity-buttons-wrapper")) {
								let wrapper = document.createElement("div");
								wrapper.classList.add("flickity-buttons-wrapper");

								ratesBlock.querySelector(".flickity-prev-next-button").after(wrapper);
								wrapper.appendChild(ratesBlock.querySelector(".flickity-prev-next-button.previous"));
								wrapper.appendChild(ratesBlock.querySelector(".flickity-prev-next-button.next"));
							}
							// Удаляем фикс высоты.
							setTimeout(() => {
								ratesBlock.style.minHeight = "";
							}, 300);
						},
					},
				});

				rates6Sliders.push(rates6Slider);
			} else {
				ratesBlock.style.minHeight = "";
			}
		});
	}
}

function rates6Init() {
	rates6Unmount();

	// Регулируем размер шрифта.
	let rates6PricesAll = document.querySelectorAll(".rates6__itemPrice");
	if (rates6PricesAll.length) {
		rates6PricesAll.forEach((price) => {
			if (price.innerText.trim().length > 16) {
				price.classList.add("rates6__itemPrice--small");
			} else {
				price.classList.remove("rates6__itemPrice--small");
			}
		});
	}

	let rates6All = document.querySelectorAll(".rates6");

	if (rates6All.length) {
		rates6All.forEach((rates) => {
			// Активируем нужный тип.
			let allTabs = rates.querySelectorAll(".rates6__tab");

			if (allTabs.length) {
				allTabs[0].classList.add("rates6__tab--active");

				let allRatesItems = rates.querySelectorAll(".rates6__item");
				if (allRatesItems.length) {
					allRatesItems.forEach((ratesItem) => {
						if (ratesItem.dataset.ratetype != allTabs[0].dataset.ratetype) {
							ratesItem.classList.add("hidden");
						}
					});
				}

				// Добавляем листенер на переключение табов.
				allTabs.forEach((tabBtn) => {
					tabBtn.addEventListener("click", rates6tabListener);
				});
			}

			// Запускаем слайдера.
			rates6ActivateSlider(rates);
		});
	}
}
