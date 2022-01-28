function reviews3CreateSliders() {
	if (!window.matchMedia("(min-width: 960px)").matches) {
		let reviews3Lists = document.querySelectorAll(".reviews3__list");
		if (reviews3Lists.length) {
			reviews3Lists.forEach((item) => {
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
				reviews3Sliders.push(temp);
			});
		}
	} else {
		if (reviews3Sliders.length) {
			reviews3Sliders.forEach((slider) => {
				slider.destroy();
			});
			reviews3Sliders = [];
		}
	}
}

function reviews3Init() {
	reviews3Unmount();

	let allreviews3Items = document.querySelectorAll(".reviews3__item");

	if (allreviews3Items.length) {
		allreviews3Items.forEach((item) => {
			if ((item.querySelector(".reviews3__photo").classList.contains("hidden") || item.querySelector(".reviews3__photo").classList.contains("invisible")) && item.querySelector(".reviews3__video.hidden")) {
				item.classList.add("reviews3__item--withoutImg");
			} else {
				item.classList.remove("reviews3__item--withoutImg");
			}
		});
	}

	reviews3CreateSliders();
	window.addEventListener("resize", reviews3CreateSliders);
}
