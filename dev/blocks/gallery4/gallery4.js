function gallery4Init() {
	gallery4Unmount();

	let galleries = document.querySelectorAll(".gallery4__images");
	if (gallery4Sliders.length) {
		gallery4Sliders.forEach((slider) => {
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
		gallery4Sliders = [];
	}
	if (galleries.length > 0) {
		galleries.forEach((gallery) => {
			let galleryBlock = gallery.closest(".gallery4");
			let galleryBlockHeading =
				galleryBlock.querySelector(".gallery4__heading");

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
			gallery4Sliders.push(tempGallerySlider);
		});
	}
}
