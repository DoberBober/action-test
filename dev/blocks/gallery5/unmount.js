function gallery5Unmount() {
	if (gallery5Sliders.length) {
		gallery5Sliders.forEach((slider) => {
			let wrapper = slider.element.querySelector(
				".flickity-buttons-wrapper"
			);
			if (wrapper) {
				wrapper.after(
					slider.element.querySelector(
						".flickity-prev-next-button.previous"
					)
				);
				wrapper.after(
					slider.element.querySelector(
						".flickity-prev-next-button.next"
					)
				);
				wrapper.remove();
			}
			slider.destroy();
		});
		gallery5Sliders = [];
	}
}
