function services4Timeout() {
	let allActiveElements = document.querySelectorAll(".services4__item--active");
	if (allActiveElements.length) {
		allActiveElements.forEach((item) => {
			item.classList.remove("services4__item--active");
			if (item.nextElementSibling && [...item.closest(".services4__list").querySelectorAll(".services4__item")].indexOf(item) < 2) {
				item.nextElementSibling.classList.add("services4__item--active");
			} else {
				item.closest(".services4__list").querySelector(".services4__item").classList.add("services4__item--active");
			}
		});
	}
}

function services4ClickListener(evt) {
	let item = evt.currentTarget;
	if (!item.classList.contains("services4__item--active")) {
		item.closest(".services4__list").querySelector(".services4__item--active").classList.remove("services4__item--active");
		item.classList.add("services4__item--active");
	}

	if (service4Intervals.length) {
		service4Intervals.forEach((item) => {
			clearInterval(item);
		});
		service4Intervals = [];
	}

	let service4Interval = setInterval(services4Timeout, 5000);
	service4Intervals.push(service4Interval);
}

function services4Init() {
	services4Unmount();

	let service4Interval = setInterval(services4Timeout, 5000);
	service4Intervals.push(service4Interval);

	let allServices4Lists = document.querySelectorAll(".services4__list");
	if (allServices4Lists.length) {
		allServices4Lists.forEach((item) => {
			if (!item.querySelector(".services4__item--active")) {
				item.querySelector(".services4__item").classList.add("services4__item--active");
			}
		});
	}

	let allServices4Items = document.querySelectorAll(".services4__item");
	allServices4Items.forEach((item) => {
		item.addEventListener("click", services4ClickListener);
	});
}
