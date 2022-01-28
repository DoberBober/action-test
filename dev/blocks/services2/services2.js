function services2ItemNamesListener(evt) {
	let currentItem = evt.currentTarget.closest(".services2__item");
	if (currentItem.classList.contains("services2__item--active")) {
		currentItem.classList.remove("services2__item--active");
		if (currentItem.nextElementSibling) {
			currentItem.nextElementSibling.classList.add("services2__item--active");
		} else {
			currentItem.closest(".services2__list").querySelector(".services2__item").classList.add("services2__item--active");
		}
	} else {
		currentItem.closest(".services2__list").querySelector(".services2__item--active").classList.remove("services2__item--active");
		currentItem.classList.add("services2__item--active");
	}
}

function services2CreateSliders() {
	if (!window.matchMedia("(min-width: 960px)").matches) {
		let allServices2Lists = document.querySelectorAll(".services2__list");
		if (allServices2Lists.length) {
			allServices2Lists.forEach((item) => {
				let tempService2Slider = new Flickity(item, {
					pageDots: true,
					prevNextButtons: false,
					cellAlign: "left",
					wrapAround: false,
					contain: true,
					adaptiveHeight: true,
					on: {
						ready: function () {
							this.pageDots.holder.classList.add("slider-custom-dots");
						},
					},
				});
				service2Sliders.push(tempService2Slider);
			});
		}
	} else {
		if (service2Sliders.length) {
			service2Sliders.forEach((slider) => {
				slider.destroy();
			});
			service2Sliders = [];
		}
	}
}

function services2Init() {
	services2Unmount();

	let allServices2Blocks = document.querySelectorAll(".services2");
	if (allServices2Blocks.length) {
		allServices2Blocks.forEach((item) => {
			if (!item.querySelector(".services2__item--active")) {
				item.querySelector(".services2__item").classList.add("services2__item--active");
			}
		});
	}

	let allServices2ItemNames = document.querySelectorAll(".services2__itemName");
	if (allServices2ItemNames.length) {
		allServices2ItemNames.forEach((item) => {
			item.addEventListener("click", services2ItemNamesListener);
		});
	}

	services2CreateSliders();
	window.addEventListener("resize", services2CreateSliders);
}
