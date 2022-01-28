function partners4CreateSliders() {
	if (!window.matchMedia("(min-width: 960px)").matches) {
		let partners4Lists = document.querySelectorAll(".partners4__list");
		if (partners4Lists.length) {
			partners4Lists.forEach((item) => {
				let temp = new Flickity(item, {
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
				partners4Sliders.push(temp);
			});
		}
	} else {
		if (partners4Sliders.length) {
			partners4Sliders.forEach((slider) => {
				slider.destroy();
			});
			partners4Sliders = [];
		}
	}
}

function partners4Init() {
	partners4Unmount();

	let allPartners4Items = document.querySelectorAll(".partners4__item");

	if (allPartners4Items.length) {
		allPartners4Items.forEach((item) => {
			if (item.querySelector(".partners4__logo.invisible") && item.querySelector(".partners4__video.hidden")) {
				item.classList.add("partners4__item--withoutImg");
			} else {
				item.classList.remove("partners4__item--withoutImg");
			}

			if (item.querySelector(".partners4__itemText").textContent.trim().length) {
				item.classList.remove("partners4__item--withoutText");
			} else {
				item.classList.add("partners4__item--withoutText");
			}
		});
	}

	partners4CreateSliders();
	window.addEventListener("resize", partners4CreateSliders);
}
