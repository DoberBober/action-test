function casesPaginationClick(evt) {
	evt.preventDefault();

	let currentActiveLi = evt.currentTarget
		.closest(".pagination")
		.querySelector(".pagination__item--active");

	// Разбираемся с блоком пагинации.
	if (evt.currentTarget.closest(".pagination__item--prev")) {
		// ///////////////////////// //
		// Кликнули на стрелку назад //
		// ///////////////////////// //
		// Добавляем класс новому пункту.
		let prevEl = getPreviousSibling(
			currentActiveLi,
			".pagination__item:not(.pagination__dots)"
		);

		prevEl.classList.add("pagination__item--active");
		prevEl.querySelector("a").classList.add("pagination__link--active");

		// Убираем класс у текущего пункта.
		currentActiveLi.classList.remove("pagination__item--active");
		currentActiveLi
			.querySelector("a")
			.classList.remove("pagination__link--active");

		// Отображаем стрелку вперед.
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--next")
			.classList.remove("hidden");

		// Если начало списка, скрываем стрелку назад.
		if (
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__link--active").dataset.page == 1
		) {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--prev")
				.classList.add("hidden");
		}
	} else if (evt.currentTarget.closest(".pagination__item--next")) {
		// ////////////////////////// //
		// Кликнули на стрелку вперед //
		// ////////////////////////// //
		// Добавляем класс новому пункту.
		let nextEl = getNextSibling(
			currentActiveLi,
			".pagination__item:not(.pagination__dots)"
		);
		nextEl.classList.add("pagination__item--active");
		nextEl.querySelector("a").classList.add("pagination__link--active");

		// Убираем класс у текущего пункта.
		currentActiveLi.classList.remove("pagination__item--active");
		currentActiveLi
			.querySelector("a")
			.classList.remove("pagination__link--active");

		// Отображаем стрелку назад.
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--prev")
			.classList.remove("hidden");

		// Если конец списка, скрываем стрелку вперед.
		if (
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__link--active").dataset.page ==
			casesPagesCount
		) {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--next")
				.classList.add("hidden");
		}
	} else if (evt.currentTarget.dataset.page) {
		// ////////////////////////// //
		// Кликнули на номер страницы //
		// ////////////////////////// //
		currentActiveLi.classList.remove("pagination__item--active");
		currentActiveLi
			.querySelector("a")
			.classList.remove("pagination__link--active");

		evt.currentTarget.classList.add("pagination__link--active");
		evt.currentTarget
			.closest(".pagination__item")
			.classList.add("pagination__item--active");

		if (evt.currentTarget.dataset.page != 1) {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--prev")
				.classList.remove("hidden");
		} else {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--prev")
				.classList.add("hidden");
		}
		if (evt.currentTarget.dataset.page != casesPagesCount) {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--next")
				.classList.remove("hidden");
		} else {
			evt.currentTarget
				.closest(".pagination")
				.querySelector(".pagination__item--next")
				.classList.add("hidden");
		}
	}

	// Скрываем ненужные и отображаем нужные кнопки пагинации.
	let newActivePage = evt.currentTarget
		.closest(".pagination")
		.querySelector(".pagination__link--active").dataset.page;
	if (casesPagesCount > 5) {
		let newActiveLi = evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--active");

		let paginationPages = evt.currentTarget
			.closest(".pagination")
			.querySelectorAll(
				".pagination__item:not(.pagination__item--prev):not(.pagination__item--next):not(.pagination__item--first):not(.pagination__item--last):not(.pagination__dots)"
			);
		if (newActivePage < 3) {
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
					.classList.add("hidden");
			}

			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
					.classList.remove("hidden");
			}

			// Отображаем первые 3 пункта.
			for (let i = 0; i < paginationPages.length; i++) {
				if (i < 2) {
					paginationPages[i].classList.remove("hidden");
				} else {
					paginationPages[i].classList.add("hidden");
				}
			}
		} else if (newActivePage == 3) {
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
					.classList.add("hidden");
			}

			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
					.classList.remove("hidden");
			}
			// Отображаем первые 4 пункта.
			for (let i = 0; i < paginationPages.length; i++) {
				if (i < 3) {
					paginationPages[i].classList.remove("hidden");
				} else {
					paginationPages[i].classList.add("hidden");
				}
			}
		} else if (newActivePage == casesPagesCount - 2) {
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
					.classList.add("hidden");
			}

			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
					.classList.remove("hidden");
			}

			// Отображаем последние 4 пункта.
			for (let i = paginationPages.length - 1; i > 0; i--) {
				if (i > paginationPages.length - 4) {
					paginationPages[i].classList.remove("hidden");
				} else {
					paginationPages[i].classList.add("hidden");
				}
			}
		} else if (newActivePage > casesPagesCount - 2) {
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
					.classList.add("hidden");
			}
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
					.classList.remove("hidden");
			}
			// Отображаем последние 3 пункта.
			for (let i = paginationPages.length - 1; i >= 0; i--) {
				if (i > paginationPages.length - 4) {
					paginationPages[i].classList.remove("hidden");
				} else {
					paginationPages[i].classList.add("hidden");
				}
			}
		} else {
			paginationPages.forEach((item) => {
				item.classList.add("hidden");
			});

			newActiveLi.classList.remove("hidden");

			// Отображаем 1 пункт до, 1 пункт после текущего.
			newActiveLi.previousElementSibling.classList.remove("hidden");
			newActiveLi.nextElementSibling.classList.remove("hidden");

			// Отображаем оба dots.
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--first")
					.classList.remove("hidden");
			}
			if (
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
			) {
				newActiveLi
					.closest(".pagination")
					.querySelector(".pagination__dots--last")
					.classList.remove("hidden");
			}
		}
	}

	// Синхронизируем со вторым пагинатором.

	if (evt.currentTarget.closest(".pagination--top")) {
		if (
			evt.currentTarget
				.closest(".cases")
				.querySelector(".pagination--bottom")
		) {
			evt.currentTarget
				.closest(".cases")
				.querySelector(
					`.pagination--bottom .pagination__link[data-page="${newActivePage}"]`
				)
				.dispatchEvent(new Event("click"));
		}
	}
	if (evt.currentTarget.closest(".pagination--bottom")) {
		if (
			evt.currentTarget
				.closest(".cases")
				.querySelector(".pagination--top")
		) {
			evt.currentTarget
				.closest(".cases")
				.querySelector(
					`.pagination--top .pagination__link[data-page="${newActivePage}"]`
				)
				.dispatchEvent(new Event("click"));
		}
	}

	// Если только одна стрелка, добавляем второй класс.
	evt.currentTarget
		.closest(".pagination")
		.querySelector(".pagination__item--prev")
		.classList.remove("pagination__item--onlyPrev");
	evt.currentTarget
		.closest(".pagination")
		.querySelector(".pagination__item--next")
		.classList.remove("pagination__item--onlyNext");

	if (
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--next")
			.classList.contains("hidden")
	) {
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--prev")
			.classList.add("pagination__item--onlyPrev");
	}
	if (
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--prev")
			.classList.contains("hidden")
	) {
		evt.currentTarget
			.closest(".pagination")
			.querySelector(".pagination__item--next")
			.classList.add("pagination__item--onlyNext");
	}

	// Отображаем товары.
	allCasesList.forEach((item, index) => {
		let itemNumber = index + 1;

		if (
			itemNumber > (newActivePage - 1) * CASES_ON_PAGE &&
			itemNumber <= newActivePage * CASES_ON_PAGE
		) {
			item.classList.remove("hidden");
		} else {
			item.classList.add("hidden");
		}
	});

	// Скроллим в начало блока.
	document.querySelector(".cases").scrollIntoView({
		behavior: "smooth",
	});
}

function casesInit() {
	let casesItems = document.querySelectorAll(".cases__item");
	if (casesItems.length) {
		casesItems.forEach((item) => {
			if (item.querySelector(".cases__img--fakeImg")) {
				item.querySelector(".cases__img--fakeImg").remove();
			}
			if (!item.querySelector(".cases__img")) {
				let tempCaseImg = document.createElement("img");
				tempCaseImg.src = "./assets/style-4/casesPlaceholder.svg";
				tempCaseImg.classList.add("cases__img");
				tempCaseImg.classList.add("cases__img--fakeImg");
				item.append(tempCaseImg);
			}
		});
	}

	let casesTrueImages = document.querySelectorAll(
		".cases__img:not(.cases__img--fakeImg)"
	);
	if (casesTrueImages.length) {
		casesTrueImages.forEach((item) => {
			if (item.parentElement.classList.contains("cases__imgWrapper")) {
				item.closest(".cases__item").append(item);
				item.parentElement.querySelector(".cases__imgWrapper").remove();
			}

			let casesImgWrapper = document.createElement("div");
			casesImgWrapper.classList.add("cases__imgWrapper");
			item.parentElement.append(casesImgWrapper);
			casesImgWrapper.append(item);
		});
	}

	allCasesList = document.querySelectorAll(".cases__item");
	casesPaginationsWrappers = document.querySelectorAll(
		".cases .pagination__list"
	);

	allCasesList.forEach((item) => {
		item.classList.remove("hidden");
	});

	if (casesPaginationsWrappers.length) {
		if (allCasesList.length > CASES_ON_PAGE) {
			casesPagesCount = Math.ceil(allCasesList.length / CASES_ON_PAGE);
		} else {
			casesPaginationsWrappers.forEach((item) => {
				item.classList.add("hidden");
			});
		}

		if (casesPagesCount > 5) {
			for (let i = 1; i <= casesPagesCount; i++) {
				casesPaginationsWrappers.forEach((paginator) => {
					if (i == casesPagesCount) {
						let lastPlaceholder = document.createElement("li");
						lastPlaceholder.classList.add("pagination__dots");
						lastPlaceholder.classList.add("pagination__dots--last");
						lastPlaceholder.classList.add("pagination__item");
						lastPlaceholder.innerHTML =
							"<a class='pagination__link'>...</a>";

						paginator.insertBefore(
							lastPlaceholder,
							paginator.querySelector(".pagination__item--next")
						);
					}

					let newPaginatorElement = document.createElement("li");
					newPaginatorElement.classList.add("pagination__item");
					if (i == casesPagesCount) {
						newPaginatorElement.classList.add(
							"pagination__item--last"
						);
					}

					if (i > 3 && i != casesPagesCount) {
						newPaginatorElement.classList.add("hidden");
					}

					let newPaginatorLink = document.createElement("a");
					newPaginatorLink.classList.add("pagination__link");
					newPaginatorLink.setAttribute("data-page", i);
					newPaginatorLink.innerHTML = i;

					if (i == 1) {
						newPaginatorElement.classList.add(
							"pagination__item--active"
						);
						newPaginatorElement.classList.add(
							"pagination__item--first"
						);
						newPaginatorLink.classList.add(
							"pagination__link--active"
						);
					}

					newPaginatorElement.append(newPaginatorLink);

					paginator.insertBefore(
						newPaginatorElement,
						paginator.querySelector(".pagination__item--next")
					);

					if (i == 1) {
						let firstPlaceholder = document.createElement("li");
						firstPlaceholder.classList.add("pagination__dots");
						firstPlaceholder.classList.add(
							"pagination__dots--first"
						);
						firstPlaceholder.classList.add("pagination__item");
						firstPlaceholder.classList.add("hidden");
						firstPlaceholder.innerHTML =
							"<a class='pagination__link'>...</a>";

						paginator.insertBefore(
							firstPlaceholder,
							paginator.querySelector(".pagination__item--next")
						);
					}
				});
			}
		} else {
			for (let i = 1; i <= casesPagesCount; i++) {
				casesPaginationsWrappers.forEach((paginator) => {
					let newPaginatorElement = document.createElement("li");
					newPaginatorElement.classList.add("pagination__item");

					let newPaginatorLink = document.createElement("a");
					newPaginatorLink.classList.add("pagination__link");
					newPaginatorLink.setAttribute("data-page", i);
					newPaginatorLink.innerHTML = i;

					if (i == 1) {
						newPaginatorElement.classList.add(
							"pagination__item--active"
						);
						newPaginatorElement.classList.add(
							"pagination__item--first"
						);
						newPaginatorLink.classList.add(
							"pagination__link--active"
						);
					}

					newPaginatorElement.append(newPaginatorLink);

					paginator.insertBefore(
						newPaginatorElement,
						paginator.querySelector(".pagination__item--next")
					);
				});
			}
		}
	}

	// Скрываем товары не на первой странице.
	if (allCasesList.length > CASES_ON_PAGE) {
		for (let i = CASES_ON_PAGE; i < allCasesList.length; i++) {
			allCasesList[i].classList.add("hidden");
		}
	}

	if (document.querySelectorAll(".cases .pagination__link")) {
		document
			.querySelectorAll(".cases .pagination__link")
			.forEach((item) => {
				item.removeEventListener("click", casesPaginationClick);
				item.addEventListener("click", casesPaginationClick);
			});
	}
}
