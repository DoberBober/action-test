function cases6Unmount() {
	if (cases6Sliders.length) {
		cases6Sliders.forEach((slider) => {
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
		cases6Sliders = [];
	}
}
