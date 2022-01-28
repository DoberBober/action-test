function about8Unmount() {
	if (document.querySelectorAll(".about8__container").length) {
		document.querySelectorAll(".about8__container").forEach((item) => {
			item.classList.remove("about8__container--withoutText");
		});
	}
}
