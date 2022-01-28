function reviews2Init() {
	reviews2Unmount();

	let allreviews2Items = document.querySelectorAll(".reviews2__item");

	if (allreviews2Items.length) {
		allreviews2Items.forEach((item) => {
			if ((item.querySelector(".reviews2__photo").classList.contains("hidden") || item.querySelector(".reviews2__photo").classList.contains("invisible")) && item.querySelector(".reviews2__video.hidden")) {
				item.classList.add("reviews2__item--withoutImg");
			} else {
				item.classList.remove("reviews2__item--withoutImg");
			}
		});
	}

	let reviews2Lists = document.querySelectorAll(".reviews2__list");
	if (reviews2Lists.length) {
		reviews2Lists.forEach((item) => {
			let temp = new Flickity(item, {
				pageDots: true,
				prevNextButtons: true,
				cellAlign: "left",
				wrapAround: true,
				adaptiveHeight: true,
				arrowShape: sliderArrow,
				on: {
					ready: function () {
						this.pageDots.holder.classList.add("slider-custom-dots");

						setTimeout(() => {
							item.classList.add("flickity-activated");
						}, 600);
						if (item.querySelector(".flickity-prev-next-button") && !item.querySelector(".flickity-prev-next-button").closest(".flickity-buttons-wrapper")) {
							let wrapper = document.createElement("div");
							wrapper.classList.add("flickity-buttons-wrapper");

							item.querySelector(".flickity-prev-next-button").after(wrapper);
							wrapper.appendChild(item.querySelector(".flickity-prev-next-button.previous"));
							wrapper.appendChild(item.querySelector(".flickity-prev-next-button.next"));
						}
					},
				},
			});
			reviews2Sliders.push(temp);
		});
	}
}
