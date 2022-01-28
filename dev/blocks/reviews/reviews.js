function reviewsInit() {
	reviewsUnmount();

	let reviews = document.querySelectorAll(".reviews__list");

	if (reviews.length) {
		reviews.forEach((item) => {
			let reviewsBlock = item.closest(".reviews");
			let reviewsBlockHeading =
				reviewsBlock.querySelector(".reviews__heading");

			if (reviewsBlock && reviewsBlockHeading) {
				reviewsBlock.style.setProperty(
					"--btn-top",
					reviewsBlockHeading.offsetHeight + 20 + "px"
				);
			}

			let reviewsSlider = new Flickity(item, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
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

			reviewsSliders.push(reviewsSlider);
		});
	}
}
