function cases6Init() {
	let cases6List = document.querySelectorAll(".cases6__list");

	if (
		cases6List.length > 0 &&
		window.matchMedia("(max-width: 959px)").matches
	) {
		cases6List.forEach((cases6) => {
			let tempCases6Slider = new Flickity(cases6, {
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
							cases6.classList.add("flickity-activated");
						}, 600);
						if (
							cases6.querySelector(
								".flickity-prev-next-button"
							) &&
							!cases6
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							cases6
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								cases6.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								cases6.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			cases6Sliders.push(tempCases6Slider);
		});
	}
}

function cases6OnOff() {
	if (window.matchMedia("(min-width: 960px)").matches) {
		if (cases6Sliders.length) {
			if (cases6Sliders.length) {
				cases6Sliders.forEach((slider) => {
					let wrapper = slider.element.querySelector(
						".flickity-buttons-wrapper"
					);
					wrapper.after(
						slider.element.querySelector(
							".flickity-prev-next-button.previous"
						)
					);
					wrapper.after(
						slider.element.querySelector(
							".flickity-prev-next-button.next"
						)
					);
					wrapper.remove();
					slider.destroy();
				});
				cases6Sliders = [];
			}
		}
	}
	if (window.matchMedia("(max-width: 959px)").matches) {
		if (!cases6Sliders.length) {
			cases6Init();
		}
	}
}

window.removeEventListener("resize", cases6OnOff);
window.addEventListener("resize", cases6OnOff);
