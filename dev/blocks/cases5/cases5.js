function cases5ResizeListener() {
	let cases5Items = document.querySelectorAll(".cases5__item");

	if (window.matchMedia("(min-width: 960px)").matches) {
		cases5Items.forEach((item) => {
			let cases5Link = item.querySelector(".cases5__link");
			cases5Link.classList.remove("cases5__link--mobile");
			cases5Link.classList.add("cases5__link--desktop");
			item.querySelector(".cases5__imgWrapper").append(cases5Link);
		});
	} else {
		cases5Items.forEach((item) => {
			let cases5Link = item.querySelector(".cases5__link");
			cases5Link.classList.add("cases5__link--mobile");
			cases5Link.classList.remove("cases5__link--desktop");
			item.querySelector(".cases5__body").append(cases5Link);
		});
	}

	cases5Sliders.forEach((item) => {
		item.resize();
	});
}

function cases5Init() {
	cases5Unmount();

	let cases5Items = document.querySelectorAll(".cases5__item");

	if (cases5Items.length) {
		window.addEventListener("resize", cases5ResizeListener);
	}
	cases5ResizeListener();

	let cases5List = document.querySelectorAll(".cases5__list");

	if (cases5List.length > 0) {
		cases5List.forEach((cases5) => {
			let tempCases5Slider = new Flickity(cases5, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: "left",
				groupCells: true,
				contain: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						setTimeout(() => {
							cases5.classList.add("flickity-activated");
						}, 600);
						if (
							cases5.querySelector(
								".flickity-prev-next-button"
							) &&
							!cases5
								.querySelector(".flickity-prev-next-button")
								.closest(".flickity-buttons-wrapper")
						) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							cases5
								.querySelector(".flickity-prev-next-button")
								.after(wrapper);
							wrapper.appendChild(
								cases5.querySelector(
									".flickity-prev-next-button.previous"
								)
							);
							wrapper.appendChild(
								cases5.querySelector(
									".flickity-prev-next-button.next"
								)
							);
						}
					},
				},
			});
			cases5Sliders.push(tempCases5Slider);
		});
	}
}
