function cases3Init() {
	cases3Unmount();

	let cases3List = document.querySelectorAll(".cases3__list");

	if (
		cases3List.length > 0 &&
		window.matchMedia("(max-width: 959px)").matches
	) {
		cases3List.forEach((cases3) => {
			let cases3Block = cases3.closest(".cases3");
			let cases3BlockHeading =
				cases3Block.querySelector(".cases3__heading");

			if (cases3Block && cases3BlockHeading) {
				cases3Block.style.setProperty(
					"--btn-top",
					cases3BlockHeading.offsetHeight + 20 + "px"
				);
			}
			let tempCases3Slider = new Flickity(cases3, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				wrapAround: true,
				adaptiveHeight: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							cases3.classList.add("flickity-activated");
						}, 300);
						if (
							cases3.querySelector(
								".flickity-prev-next-button"
							) &&
							!cases3
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							cases3
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								cases3.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								cases3.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			cases3Sliders.push(tempCases3Slider);
		});
	}
}

function cases3OnOff() {
	if (window.matchMedia("(min-width: 960px)").matches) {
		if (cases3Sliders.length) {
			if (cases3Sliders.length) {
				cases3Sliders.forEach((slider) => {
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
				cases3Sliders = [];
			}
		}
	}
	if (window.matchMedia("(max-width: 959px)").matches) {
		if (!cases3Sliders.length) {
			cases3Init();
		}
	}
}

window.removeEventListener("resize", cases3OnOff);
window.addEventListener("resize", cases3OnOff);
