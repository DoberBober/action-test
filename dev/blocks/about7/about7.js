function about7Init() {
	about7Unmount();

	let about7Lists = document.querySelectorAll(".about7__container");

	if (about7Lists.length) {
		about7Lists.forEach((item) => {
			let points = item.querySelectorAll(".about7__listItem");
			if (points.length) {
				points.forEach((el) => {
					temp = document.createElement("div");
					temp.innerHTML =
						'<svg class="about7__listItemSvg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';
					el.prepend(temp.firstChild);
				});
			}

			if (!item.querySelector(".about7__list").textContent.trim().length) {
				item.classList.add("about7__container--withoutList");
			} else {
				item.classList.remove("about7__container--withoutList");
			}
		});
	}
}
