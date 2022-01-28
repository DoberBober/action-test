function cta3Unmount() {
	if (document.querySelectorAll(".cta3__form").length) {
		document.querySelectorAll(".cta3__form").forEach((item) => {
			item.removeEventListener("submit", cta3SubmitFunction);
		});
	}
}
