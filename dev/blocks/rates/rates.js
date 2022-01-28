function normalizeRatesHeight(elements) {
	if (!elements) {
		let rates = document.querySelectorAll(".rates");
		if (rates.length) {
			rates.forEach((item) => {
				normalizeRatesHeight(
					item.querySelectorAll(".rates__item--slide")
				);
			});
		}

		return;
	}

	elements.forEach((item) => {
		item.style.height = "";
	});

	let maxHeight = Math.max.apply(
		Math,
		[...elements].map((item) => item.getBoundingClientRect().height)
	);

	elements.forEach((item) => {
		item.style.height = maxHeight + "px";
	});
}

function ratesBtnsWrap(sliderElement) {
	if (
		sliderElement.querySelector(".flickity-prev-next-button") &&
		!sliderElement
			.querySelector(".flickity-prev-next-button")
			.closest(".flickity-buttons-wrapper")
	) {
		let wrapper = document.createElement("div");
		wrapper.classList.add("flickity-buttons-wrapper");

		sliderElement
			.querySelector(".flickity-prev-next-button")
			.after(wrapper);
		wrapper.appendChild(
			sliderElement.querySelector(".flickity-prev-next-button.previous")
		);
		wrapper.appendChild(
			sliderElement.querySelector(".flickity-prev-next-button.next")
		);
	}
}

function ratesBtnsUnwrap(slider) {
	if (
		slider.element.querySelector(".flickity-prev-next-button") &&
		slider.element
			.querySelector(".flickity-prev-next-button")
			.closest(".flickity-buttons-wrapper")
	) {
		slider.element
			.querySelector(".flickity-prev-next-button")
			.closest(".flickity-buttons-wrapper")
			.after(
				slider.element.querySelector(
					".flickity-prev-next-button.previous"
				)
			);

		slider.element
			.querySelector(".flickity-prev-next-button")
			.closest(".flickity-buttons-wrapper")
			.after(
				slider.element.querySelector(".flickity-prev-next-button.next")
			);

		slider.element.querySelector(".flickity-buttons-wrapper").remove();
	}
}

function ratesListener() {
	// Активируем кнопку.
	this.closest(".rates__checkers")
		.querySelector(".rates__checker--active")
		.classList.remove("rates__checker--active");
	this.classList.add("rates__checker--active");

	// Отключаем все слайды.
	let ratesItems = this.closest(".rates").querySelectorAll(".rates__item");
	if (ratesItems.length > 0) {
		ratesItems.forEach((item) => {
			item.classList.remove("rates__item--slide");
			item.classList.remove("is-selected");
			item.classList.add("hidden");
		});
	}

	// Включаем нужные слайды.
	let currentRateType = this.dataset.ratetype;
	let targetRatesItems = this.closest(".rates").querySelectorAll(
		`.rates__item[data-ratetype='${currentRateType}']`
	);
	if (targetRatesItems.length > 0) {
		targetRatesItems.forEach((item) => {
			item.classList.remove("hidden");
			item.classList.add("rates__item--slide");
		});

		// Поправляем слайдер.
		ratesListSliders.forEach((item) => {
			ratesBtnsUnwrap(item);
			item.destroy();
		});

		let ratesOptions = {
			imagesLoaded: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: sliderArrow,
			adaptiveHeight: false,
			cellAlign: "center",
			wrapAround: false,
			contain: true,
			groupCells: true,
			cellSelector: ".rates__item--slide",
			on: {
				ready: function () {
					ratesBtnsWrap(this.element);
				},
			},
		};

		if (ratesList.length) {
			ratesList.forEach((item) => {
				if (item.querySelectorAll(".rates__item--slide").length < 4) {
					ratesOptions.wrapAround = false;
					ratesOptions.prevNextButtons = false;
				}

				let ratesListSlider = new Flickity(item, ratesOptions);
				ratesListSliders.push(ratesListSlider);
			});
		}

		ratesListSliders.forEach((item) => {
			ratesBtnsWrap(item.element);
		});
	}

	normalizeRatesHeight(targetRatesItems);
}

function ratesInit() {
	ratesUnmount();

	ratesList = document.querySelectorAll(".rates__list");

	if (ratesListSliders.length) {
		ratesListSliders.forEach((item) => {
			item.destroy();
		});
		ratesListSliders = [];
	}

	// Активируем первый тип тарифов.
	let ratesCheckers = document.querySelectorAll(".rates__checkers");

	if (ratesCheckers.length > 0) {
		ratesCheckers.forEach((item) => {
			item.querySelector(".rates__checker").classList.add(
				"rates__checker--active"
			);
			let ratesItems = item
				.querySelector(".rates__checker")
				.closest(".rates")
				.querySelectorAll(".rates__item");
			if (ratesItems.length > 0) {
				ratesItems.forEach((ratesItem) => {
					if (
						ratesItem.dataset.ratetype !=
						ratesItem
							.closest(".rates")
							.querySelector(".rates__checker").dataset.ratetype
					) {
						ratesItem.classList.add("hidden");
						ratesItem.classList.remove("is-selected");
						ratesItem.classList.remove("rates__item--slide");
					}
				});

				ratesListSliders.forEach((ratesListSlider) => {
					ratesBtnsUnwrap(ratesListSlider);
					ratesListSlider.deactivate();
					ratesListSlider.activate();
					ratesBtnsWrap(ratesListSlider.element);
				});
			}
			item.querySelectorAll(".rates__checker").forEach((btn) => {
				btn.removeEventListener("click", ratesListener);
				btn.addEventListener("click", ratesListener);
			});
		});
	}

	if (ratesList.length) {
		ratesList.forEach((item) => {
			let ratesBlock = item.closest(".rates");
			let ratesBlockHeading = ratesBlock.querySelector(".rates__heading");

			if (ratesBlock && ratesBlockHeading) {
				ratesBlock.style.setProperty(
					"--btn-top",
					ratesBlockHeading.offsetHeight + 20 + "px"
				);
			}

			let ratesOptions = {
				imagesLoaded: true,
				pageDots: false,
				adaptiveHeight: true,
				arrowShape: sliderArrow,
				adaptiveHeight: false,
				cellAlign: "center",
				wrapAround: false,
				contain: true,
				groupCells: true,
				cellSelector: ".rates__item--slide",
				on: {
					ready: function () {
						ratesBtnsWrap(this.element);
					},
				},
			};

			if (item.querySelectorAll(".rates__item--slide").length < 4) {
				ratesOptions.wrapAround = false;
				ratesOptions.prevNextButtons = false;
			}

			let ratesListSlider = new Flickity(item, ratesOptions);

			ratesListSliders.push(ratesListSlider);
		});
	}

	let ratesSections = document.querySelectorAll(".rates");
	if (ratesSections.length) {
		ratesSections.forEach((ratesItem) => {
			normalizeRatesHeight(
				ratesItem.querySelectorAll(".rates__item--slide")
			);
		});
	}
}

document.addEventListener("resize", normalizeRatesHeight);
