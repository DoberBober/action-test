function gallery2Init() {
	let galleries = document.querySelectorAll(".gallery2__images");
	if (gallery2Sliders.length) {
		gallery2Sliders.forEach((slider) => {
			slider.destroy();
		});
		gallery2Sliders = [];
	}
	if (galleries.length > 0) {
		galleries.forEach((gallery) => {
			let tempGallerySlider = new Flickity(gallery, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				adaptiveHeight: true,
				arrowShape: "",
				prevNextButtons: false,
			});
			gallery2Sliders.push(tempGallerySlider);
		});
	}
}
