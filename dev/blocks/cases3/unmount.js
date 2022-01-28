function cases3Unmount() {
	if (cases3Sliders.length) {
		cases3Sliders.forEach((slider) => {
			let wrapper = slider.element.querySelector(
				".flickity-buttons-wrapper"
			);
			wrapper.after(
				slider.element.querySelector(
					".flickity-prev-next-button.previous"
				)
			);
			wrapper.after(
				slider.element.querySelector(".flickity-prev-next-button.next")
			);
			wrapper.remove();
			slider.destroy();
		});
		cases3Sliders = [];
	}
}
