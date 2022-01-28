function docsUnmount(){
	if (docsSlider) {
		docsSlider.destroy();
		docsSlider = "";
	}

	if (document.querySelectorAll(".docs__btn").length) {
		document.querySelectorAll(".docs__btn").forEach((btn) => {
			btn.removeEventListener("click", docsCheckerListener);
			btn.classList.remove("docs__btn--active");
		});
	}

	if (document.querySelectorAll(".docs__item").length) {
		document.querySelectorAll(".docs__item").forEach((item) => {
			item.classList.remove("hidden");
			item.classList.add("docs__item--slide");
		});
	}

	if (document.querySelector(".docs__btns")) {
		document
			.querySelector(".docs__btns")
			.classList.remove("docs__btns--threeChildren");
		document
			.querySelector(".docs__btns")
			.classList.remove("docs__btns--manyChildren");
		document
			.querySelector(".docs__btns")
			.classList.remove("docs__btns--twoChildren");
	}
}
