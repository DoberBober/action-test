function ratesUnmount() {
	document.removeEventListener("resize", normalizeRatesHeight);

	if (ratesListSliders.length) {
		ratesListSliders.forEach((item) => {
			item.destroy();
		});
	}

	if (document.querySelector(".rates__checker--active")) {
		document
			.querySelector(".rates__checker--active")
			.classList.remove("rates__checker--active");
	}

	if (document.querySelectorAll(".rates__checker").length) {
		document.querySelectorAll(".rates__checker").forEach((item) => {
			item.removeEventListener("click", ratesListener);
			item.classList.remove("rates__checker--active");
		});
	}

	if (document.querySelectorAll(".rates__item").length) {
		document.querySelectorAll(".rates__item").forEach((item) => {
			item.classList.remove("rates__item--hidden");
			item.classList.remove("hidden");
			item.classList.remove("is-selected");
			item.classList.add("rates__item--slide");
		});
	}

	if (document.querySelector(".rates__checkers")) {
		document
			.querySelector(".rates__checkers")
			.classList.remove("rates__checkers--twoChildren");
		document
			.querySelector(".rates__checkers")
			.classList.remove("rates__checkers--threeChildren");
		document
			.querySelector(".rates__checkers")
			.classList.remove("rates__checkers--manyChildren");
	}

	if (document.querySelectorAll(".rates__btn svg").length) {
		document.querySelectorAll(".rates__btn svg").forEach((item) => {
			item.remove();
		});
	}
}
