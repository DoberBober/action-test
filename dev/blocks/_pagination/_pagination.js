// Pagination
paginationInit = () => {
	let paginationPrevBtns = document.querySelectorAll(
		".pagination__item--prev a"
	);
	let paginationNextBtns = document.querySelectorAll(
		".pagination__item--next a"
	);

	if (paginationPrevBtns.length) {
		paginationPrevBtns.forEach((item) => {
			if (!item.querySelector("svg")) {
				injectSVG(item, paginationPrevSVG);
			}
		});
	}

	if (paginationNextBtns.length) {
		paginationNextBtns.forEach((item) => {
			if (!item.querySelector("svg")) {
				injectSVG(item, paginationNextSVG);
			}
		});
	}
};
