function cta2Unmount() {
	if (document.querySelectorAll(".cta2__form").length) {
		document.querySelectorAll(".cta2__form").forEach((item) => {
			item.removeEventListener("submit", cta2SubmitFunction);
		});
	}
}
