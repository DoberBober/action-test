function cta4Unmount() {
	if (document.querySelectorAll(".cta4__form").length) {
		document.querySelectorAll(".cta4__form").forEach((item) => {
			item.removeEventListener("submit", cta4SubmitFunction);
		});
	}
}
