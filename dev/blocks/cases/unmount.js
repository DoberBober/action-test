function casesUnmount(){
	if (
		document.querySelectorAll(
			".cases .pagination__item:not(.pagination__item--next):not(.pagination__item--prev)"
		).length
	) {
		document
			.querySelectorAll(
				".cases .pagination__item:not(.pagination__item--next):not(.pagination__item--prev)"
			)
			.forEach((item) => {
				item.removeEventListener("click", casesPaginationClick);
				item.remove();
			});
	}

	if (document.querySelectorAll(".cases__item").length) {
		document.querySelectorAll(".cases__item").forEach((item) => {
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".cases .pagination__item svg").length) {
		document.querySelectorAll(".cases .pagination__item svg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".cases .pagination__list").length) {
		document.querySelectorAll(".cases .pagination__list").forEach((item) => {
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".cases .pagination__item--prev").length) {
		document.querySelectorAll(".cases .pagination__item--prev").forEach((item) => {
			item.classList.remove("pagination__item--onlyPrev");
			item.classList.add("hidden");
		});
	}

	if (document.querySelectorAll(".cases .pagination__item--next").length) {
		document.querySelectorAll(".cases .pagination__item--next").forEach((item) => {
			item.classList.remove("pagination__item--onlyNext");
			item.classList.remove("hidden");
		});
	}
}
