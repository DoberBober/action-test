instagramInit = () => {
	let instagramList = document.querySelector(".instagram__list");

	if (instagramSlider) {
		instagramSlider.destroy();
	}

	if (instagramList) {
		instagramSlider = new Flickity(instagramList, {
			imagesLoaded: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: "",
			adaptiveHeight: false,
			cellAlign: "left",
			wrapAround: true,
		});
	}

	let instagramLinks = document.querySelectorAll(".instagram__link");
	if (instagramLinks.length) {
		instagramLinks.forEach((item) => {
			if (!item.querySelector("svg")) {
				injectSVG(item, instagramSVG, "before");
			}
		});
	}
};
