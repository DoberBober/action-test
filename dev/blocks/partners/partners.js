function partnersCreateSliders() {
	if (!window.matchMedia("(min-width: 960px)").matches) {
		let partnersLists = document.querySelectorAll(".partners__list");
		if (partnersLists.length) {
			partnersLists.forEach((item) => {
				let temp = new Flickity(item, {
					pageDots: true,
					prevNextButtons: false,
					cellAlign: "left",
					wrapAround: false,
					contain: true,
					adaptiveHeight: false,
					on: {
						ready: function () {
							this.pageDots.holder.classList.add("slider-custom-dots");
						},
					},
				});
				partnersSliders.push(temp);
			});
		}
	} else {
		if (partnersSliders.length) {
			partnersSliders.forEach((slider) => {
				slider.destroy();
			});
			partnersSliders = [];
		}
	}
}

function partnersInit() {
	partnersUnmount();

	partnersCreateSliders();
	window.addEventListener("resize", partnersCreateSliders);
}
