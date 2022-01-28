function about6Unmount() {
	if (document.querySelectorAll(".about6__listItemSvg").length) {
		document.querySelectorAll(".about6__listItemSvg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".about6__container").length) {
		document.querySelectorAll(".about6__container").forEach((item) => {
			item.classList.remove("about6__container--withoutImg");
			item.classList.remove("about6__container--withoutText");
		});
	}
}
