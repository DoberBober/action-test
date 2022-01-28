function head3Unmount() {
	if (document.querySelectorAll(".head3__formSuccess").length) {
		document.querySelectorAll(".head3__formSuccess").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".head3__form").length) {
		document.querySelectorAll(".head3__form").forEach((item) => {
			item.removeEventListener("submit", head3FormSubmitListener);
		});
	}

	document.querySelectorAll(".head3__formNote").forEach((item) => {
		item.closest(".head3__form").append(item);
	});
}
