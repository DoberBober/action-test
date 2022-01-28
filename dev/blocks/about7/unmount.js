function about7Unmount() {
	if (document.querySelectorAll(".about7__listItemSvg").length) {
		document.querySelectorAll(".about7__listItemSvg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".about7__container").length) {
		document.querySelectorAll(".about7__container").forEach((item) => {
			item.classList.remove("about7__container--withoutList");
		});
	}
}
