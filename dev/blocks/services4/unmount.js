function services4Unmount() {
	if (service4Intervals.length) {
		service4Intervals.forEach((item) => {
			clearInterval(item);
		});
		service4Intervals = [];
	}

	document.querySelectorAll(".services4__item").forEach((item) => {
		item.removeEventListener("click", services4ClickListener);
	});
}
