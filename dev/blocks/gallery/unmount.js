function galleryUnmount() {
	if (gallerySliders.length) {
		gallerySliders.forEach((slider) => {
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
			slider.element.classList.remove("flickity-activated");
			slider.destroy();
		});
		gallerySliders = [];
	}
}
