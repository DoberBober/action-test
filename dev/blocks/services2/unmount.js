function services2Unmount() {
	window.removeEventListener("resize", services2CreateSliders);

	if (document.querySelectorAll(".services2__itemName").length) {
		document.querySelectorAll(".services2__itemName").forEach((item) => {
			item.removeEventListener("click", services2ItemNamesListener);
		});
	}

	if (service2Sliders.length) {
		service2Sliders.forEach((slider) => {
			slider.destroy();
		});
		service2Sliders = [];
	}
}
