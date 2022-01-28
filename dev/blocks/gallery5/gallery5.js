function gallery5Init() {
	gallery5Unmount();

	let galleries = document.querySelectorAll(".gallery5__images");
	if (gallery5Sliders.length) {
		gallery5Sliders.forEach((slider) => {
			let wrapper = slider.element.querySelector(
				".flickity-buttons-wrapper"
			);
			wrapper.after(
				slider.element.querySelector(
					".flickity-prev-next-button.previous"
				)
			);
			wrapper.after(
				slider.element.querySelector(".flickity-prev-next-button.next")
			);
			wrapper.remove();

			slider.destroy();
		});
		gallery5Sliders = [];
	}
	if (galleries.length > 0) {
		galleries.forEach((gallery) => {
			let galleryBlock = gallery.closest(".gallery5");
			let galleryBlockHeading =
				galleryBlock.querySelector(".gallery5__heading");

			if (galleryBlock && galleryBlockHeading) {
				galleryBlock.style.setProperty(
					"--btn-top",
					galleryBlockHeading.offsetHeight + 20 + "px"
				);
			}

			let tempGallerySlider = new Flickity(gallery, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				adaptiveHeight: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							gallery.classList.add("flickity-activated");
						}, 300);
						if (
							gallery.querySelector(
								".flickity-prev-next-button"
							) &&
							!gallery
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							gallery
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								gallery.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								gallery.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			gallery5Sliders.push(tempGallerySlider);
		});
	}
}
