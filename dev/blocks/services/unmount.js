function servicesUnmount(){
	if (servicesSlider) {
		servicesSlider.destroy();
		servicesSlider = "";
	}

	if (document.querySelector(".services__btns")) {
		document
			.querySelector(".services__btns")
			.classList.remove("services__btns--twoChildren");
		document
			.querySelector(".services__btns")
			.classList.remove("services__btns--threeChildren");
		document
			.querySelector(".services__btns")
			.classList.remove("services__btns--manyChildren");
	}

	if (document.querySelectorAll(".services__btn").length) {
		document.querySelectorAll(".services__btn").forEach((item) => {
			item.removeEventListener("click", serviceBtnListener);
			item.classList.remove("services__btn--active");
		});
	}

	if (document.querySelectorAll(".services__filterBtn").length) {
		document.querySelectorAll(".services__filterBtn").forEach((item) => {
			item.classList.remove("services__filterBtn--active");
			item.removeEventListener("click", serviceFilterBtnListener);
		});
	}

	if (document.querySelectorAll(".services__filterName").length) {
		document.querySelectorAll(".services__filterName").forEach((item) => {
			item.classList.remove("services__filterName--visible");
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".services__item").length) {
		document.querySelectorAll(".services__item").forEach((item) => {
			item.classList.add("services__item--slide");
			item.classList.remove("is-selected");
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".services__listUpdown").length) {
		document.querySelectorAll(".services__listUpdown").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".services__filterUpdown").length) {
		document.querySelectorAll(".services__filterUpdown").forEach((item) => {
			item.remove();
		});
	}

	if (
		document.querySelectorAll(".dropdown--service .dropdown__item").length
	) {
		document
			.querySelectorAll(".dropdown--service .dropdown__item")
			.forEach((item) => {
				item.removeEventListener(
					"click",
					serviceDropdownSelectedListener
				);
			});
	}

	if (
		document.querySelectorAll(".dropdown--service .dropdown__select").length
	) {
		document
			.querySelectorAll(".dropdown--service .dropdown__select")
			.forEach((item) => {
				item.innerHTML = "";
				item.removeEventListener(
					"click",
					serviceDropdownInitialListener
				);
			});
	}

	if (document.querySelectorAll(".services__dropdown").length) {
		document.querySelectorAll(".services__dropdown").forEach((item) => {
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".services__select").length) {
		document.querySelectorAll(".services__select").forEach((item) => {
			item.removeEventListener("change", serviceSelectChangeListener);
		});
	}
}
