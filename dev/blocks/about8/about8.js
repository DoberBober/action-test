function about8Init() {
	about8Unmount();

	let about8Lists = document.querySelectorAll(".about8__container");

	if (about8Lists.length) {
		about8Lists.forEach((item) => {
			if (!item.querySelector(".about8__text").textContent.trim().length) {
				item.classList.add("about8__container--withoutText");
			} else {
				item.classList.remove("about8__container--withoutText");
			}
		});
	}
}
