function galleryInit() {
	galleryUnmount();

	let galleries = document.querySelectorAll(".gallery__images");
	if (gallerySliders.length) {
		gallerySliders.forEach((slider) => {
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
		gallerySliders = [];
	}
	if (galleries.length > 0) {
		galleries.forEach((item) => {
			let galleryBlock = item.closest(".gallery");
			let galleryBlockHeading =
				galleryBlock.querySelector(".gallery__heading");

			if (galleryBlock && galleryBlockHeading) {
				galleryBlock.style.setProperty(
					"--btn-top",
					galleryBlockHeading.offsetHeight + 20 + "px"
				);
			}

			let tempGallerySlider = new Flickity(item, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							item.classList.add("flickity-activated");
						}, 300);
						if (
							item.querySelector(".flickity-prev-next-button") &&
							!item
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							item.querySelector(
								".flickity-prev-next-button"
							).after(wrapper);
							wrapper.appendChild(
								item.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								item.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});

			gallerySliders.push(tempGallerySlider);
		});
	}
}
