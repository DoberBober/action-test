function rates5Unmount() {
	if (document.querySelectorAll(".rates5__itemLink svg").length) {
		document.querySelectorAll(".rates5__itemLink svg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".rates5__tab").length) {
		document.querySelectorAll(".rates5__tab").forEach((item) => {
			item.removeEventListener("click", rates5tabListener);
		});
	}
}
