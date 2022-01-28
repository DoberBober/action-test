function teamInit() {
	teamUnmount();

	let teamList = document.querySelectorAll(".team__list");

	if (teamList.length) {
		teamList.forEach((item) => {
			let teamBlock = item.closest(".team");
			let teamBlockHeading = teamBlock.querySelector(".team__heading");

			if (teamBlock && teamBlockHeading) {
				teamBlock.style.setProperty(
					"--btn-top",
					teamBlockHeading.offsetHeight + 20 + "px"
				);
			}

			let teamSlider = new Flickity(item, {
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

			teamSliders.push(teamSlider);
		});
	}
}
