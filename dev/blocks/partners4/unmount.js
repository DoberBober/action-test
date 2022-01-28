function partners4Unmount() {
	if (document.querySelectorAll(".partners4__item").length) {
		document.querySelectorAll(".partners4__item").forEach((item) => {
			item.classList.remove("partners4__item--withoutImg");
			item.classList.remove("partners4__item--withoutText");
		});
	}

	if (partners4Sliders.length) {
		partners4Sliders.forEach((slider) => {
			slider.destroy();
		});
		partners4Sliders = [];
	}

	window.removeEventListener("resize", partners4CreateSliders);
}
