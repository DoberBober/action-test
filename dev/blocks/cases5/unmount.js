function cases5Unmount() {
	window.removeEventListener("resize", cases5ResizeListener);

	document.querySelectorAll(".cases5__item").forEach((item) => {
		let cases5Link = item.querySelector(".cases5__link");
		cases5Link.classList.add("cases5__link--mobile");
		cases5Link.classList.remove("cases5__link--desktop");
		item.querySelector(".cases5__body").append(cases5Link);
	});

	if (cases5Sliders.length) {
		cases5Sliders.forEach((slider) => {
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
		cases5Sliders = [];
	}
}
