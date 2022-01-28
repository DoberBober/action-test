function gallery4Unmount() {
	if (gallery4Sliders.length) {
		gallery4Sliders.forEach((slider) => {
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
		gallery4Sliders = [];
	}
}
