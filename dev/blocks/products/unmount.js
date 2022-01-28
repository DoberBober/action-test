function productsUnmount(){
	if (
		document.querySelectorAll(
			".products .pagination__item:not(.pagination__item--next):not(.pagination__item--prev)"
		).length
	) {
		document
			.querySelectorAll(
				".products .pagination__item:not(.pagination__item--next):not(.pagination__item--prev)"
			)
			.forEach((item) => {
				item.removeEventListener("click", productPaginationClick);
				item.remove();
			});
	}

	if (document.querySelectorAll(".product__item").length) {
		document.querySelectorAll(".product__item").forEach((item) => {
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".products .pagination__list").length) {
		document.querySelectorAll(".products .pagination__list").forEach((item) => {
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".products .pagination__item--prev").length) {
		document.querySelectorAll(".products .pagination__item--prev").forEach((item) => {
			item.classList.remove("pagination__item--onlyPrev");
			item.classList.add("hidden");
		});
	}

	if (document.querySelectorAll(".products .pagination__item--next").length) {
		document.querySelectorAll(".products .pagination__item--next").forEach((item) => {
			item.classList.remove("pagination__item--onlyNext");
			item.classList.remove("hidden");
		});
	}

	if (document.querySelectorAll(".products .pagination__item svg").length) {
		document.querySelectorAll(".products .pagination__item svg").forEach((item) => {
			item.remove();
		});
	}
}
