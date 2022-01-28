function services7Unmount() {
	if (document.querySelectorAll(".services7__itemIcon").length) {
		document.querySelectorAll(".services7__itemIcon").forEach((item) => {
			item.remove();
		});
	}
}
