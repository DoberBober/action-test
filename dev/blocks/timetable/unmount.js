function timetableUnmount(){
	if (document.querySelectorAll(".timetable__day").length) {
		document.querySelectorAll(".timetable__day").forEach((item) => {
			item.classList.remove("timetable__day--visible");
		});
	}

	if (document.querySelectorAll(".timetable__btn").length) {
		document.querySelectorAll(".timetable__btn").forEach((item) => {
			item.classList.remove("timetable__btn--active");
		});
	}

	if (document.querySelector(".timetable__select")) {
		document
			.querySelector(".timetable__select")
			.removeEventListener("change", timetableSelectChangeListener);
	}

	if (document.querySelectorAll(".dropdown__item--active").length) {
		document.querySelectorAll(".dropdown__item--active").forEach((item) => {
			item.classList.remove("dropdown__item--active");
		});
	}

	if (
		document.querySelectorAll(".dropdown--timetable .dropdown__select")
			.length
	) {
		document
			.querySelectorAll(".dropdown--timetable .dropdown__select")
			.forEach((item) => {
				item.innerHTML = "";
				item.removeEventListener(
					"click",
					customDropdownsSelectedClickListener
				);
			});
	}

	if (
		document.querySelectorAll(".dropdown--timetable .dropdown__item").length
	) {
		document
			.querySelectorAll(".dropdown--timetable .dropdown__item")
			.forEach((item) => {
				item.removeEventListener(
					"click",
					customSelectOptionsClickListener
				);
			});
	}

	if (document.querySelectorAll(".timetable__btn").length) {
		document.querySelectorAll(".timetable__btn").forEach((btn) => {
			btn.classList.remove("timetable__btn--active");
			btn.classList.remove("is-selected");
			btn.removeEventListener("click", timetableBtnListener);
		});
	}

	if (document.querySelectorAll(".timetable__day").length) {
		document.querySelectorAll(".timetable__day").forEach((item) => {
			item.classList.remove("timetable__day--visible");
		});
	}
}
