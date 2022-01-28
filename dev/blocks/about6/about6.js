function about6Init() {
	about6Unmount();

	let about6Lists = document.querySelectorAll(".about6__container");

	if (about6Lists.length) {
		about6Lists.forEach((item) => {
			let points = item.querySelectorAll(".about6__listItem");
			if (points.length) {
				points.forEach((el) => {
					temp = document.createElement("div");
					temp.innerHTML =
						'<svg class="about6__listItemSvg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';
					el.prepend(temp.firstChild);
				});
			}

			if ((item.querySelector(".about6__img").classList.contains("hidden") || item.querySelector(".about6__img").classList.contains("invisible")) && item.querySelector(".about6__video.hidden")) {
				item.classList.add("about6__container--withoutImg");
			} else {
				item.classList.remove("about6__container--withoutImg");
			}

			if (!item.querySelector(".about6__text").textContent.trim().length) {
				item.classList.add("about6__container--withoutText");
			} else {
				item.classList.remove("about6__container--withoutText");
			}
		});
	}
}
