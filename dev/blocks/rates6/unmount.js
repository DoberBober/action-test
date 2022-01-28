function rates6Unmount() {
	if (document.querySelectorAll(".rates6__tab").length) {
		document.querySelectorAll(".rates6__tab").forEach((item) => {
			item.removeEventListener("click", rates6tabListener);
		});
	}

	if (rates6Sliders.length) {
		rates6Sliders.forEach((slider) => {
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
		rates6Sliders = [];
	}
}
