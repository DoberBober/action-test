function reviews3Unmount() {
	if (document.querySelectorAll(".reviews3__item").length) {
		document.querySelectorAll(".reviews3__item").forEach((item) => {
			item.classList.remove("reviews3__item--withoutImg");
		});
	}

	if (reviews3Sliders.length) {
		reviews3Sliders.forEach((slider) => {
			slider.destroy();
		});
		reviews3Sliders = [];
	}

	window.removeEventListener("resize", reviews3CreateSliders);
}
