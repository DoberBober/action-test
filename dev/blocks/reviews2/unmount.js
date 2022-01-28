function reviews2Unmount() {
	if (document.querySelectorAll(".reviews2__item").length) {
		document.querySelectorAll(".reviews2__item").forEach((item) => {
			item.classList.remove("reviews2__item--withoutImg");
		});
	}

	if (reviews2Sliders.length) {
		reviews2Sliders.forEach((slider) => {
			let el = slider.element;
			let wrapper = el.querySelector(".flickity-buttons-wrapper");
			if (wrapper) {
				wrapper.after(el.querySelector(".flickity-prev-next-button.previous"));
				wrapper.after(el.querySelector(".flickity-prev-next-button.next"));
				wrapper.remove();
			}
			slider.destroy();
		});
		reviews2Sliders = [];
	}
}
