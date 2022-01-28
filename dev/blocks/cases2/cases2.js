function cases2Init() {
	cases2Unmount();

	let cases2List = document.querySelectorAll(".cases2__list");

	if (cases2List.length > 0) {
		cases2List.forEach((cases2) => {
			let tempCases2Slider = new Flickity(cases2, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							cases2.classList.add("flickity-activated");
						}, 600);
						if (
							cases2.querySelector(
								".flickity-prev-next-button"
							) &&
							!cases2
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							cases2
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								cases2.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								cases2.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			cases2Sliders.push(tempCases2Slider);
		});
	}
}
