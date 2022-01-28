function cases4Init() {
	cases4Unmount();

	let cases4List = document.querySelectorAll(".cases4__list");
	if (cases4List.length > 0) {
		cases4List.forEach((cases4) => {
			let cases4Block = cases4.closest(".cases4");
			let cases4BlockHeading =
				cases4Block.querySelector(".cases4__heading");

			if (cases4Block && cases4BlockHeading) {
				cases4Block.style.setProperty(
					"--btn-top",
					cases4BlockHeading.offsetHeight + 20 + "px"
				);
			}

			let tempCases4Slider = new Flickity(cases4, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				groupCells: true,
				contain: true,
				adaptiveHeight: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							cases4.classList.add("flickity-activated");
						}, 300);
						if (
							cases4.querySelector(
								".flickity-prev-next-button"
							) &&
							!cases4
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							cases4
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								cases4.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								cases4.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			cases4Sliders.push(tempCases4Slider);
		});
	}

	if (cases4Sliders.length) {
		if (cases4Sliders.length) {
			cases4Sliders.forEach((item) => {
				item.resize();
			});
		}
	}
}
