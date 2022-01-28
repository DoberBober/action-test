// TODO: Скролл в модалке.
// Если активно видео, то его надо инициализировать.

function setOrientation(temp) {
	let orientation = "";
	if (temp.naturalWidth / temp.naturalHeight >= 1) {
		orientation = "horizontal";
	} else {
		orientation = "vertical";
	}

	switch (orientation) {
		case "horizontal":
			temp.classList.add("gallery6__photoClone--horizontal");
			break;
		case "vertical":
			temp.classList.add("gallery6__photoClone--vertical");
			break;
	}
}

function gallery6Init() {
	gallery6Unmount();

	let allGalleries6Photos = document.querySelectorAll(".gallery6__image");
	if (allGalleries6Photos.length) {
		allGalleries6Photos.forEach((item) => {
			item.addEventListener("click", gallery6OpenModal);

			if (item.querySelector(".gallery6__photo:not(.hidden)")) {
				item.addEventListener("mouseenter", gallery6MouseEnter);
				item.addEventListener("mouseleave", gallery6MouseLeave);

				let temp = item
					.querySelector(".gallery6__photo:not(.hidden)")
					.cloneNode();
				temp.classList.remove("gallery6__photo");
				temp.classList.add("gallery6__photoClone");
				temp.setAttribute(
					"src",
					item.querySelector(".gallery6__photo:not(.hidden)").dataset
						.full
				);

				temp.addEventListener("load", () => {
					setOrientation(temp);
				});

				item.append(temp);
			}
		});
	}
}

function gallery6MouseEnter(evt) {
	evt.currentTarget
		.closest(".gallery6__image")
		.classList.add("gallery6__image--hover");
	evt.currentTarget
		.closest(".gallery6")
		.classList.add("gallery6--mouseActive");

	let clone = evt.currentTarget
		.closest(".gallery6__image")
		.querySelector(".gallery6__photoClone");

	let matrix = 0;

	if (clone.classList.contains("gallery6__photoClone--horizontal")) {
		clone.style.width = "588px";
		clone.style.height =
			588 * (clone.naturalHeight / clone.naturalWidth) + "px";
	}

	if (clone.classList.contains("gallery6__photoClone--vertical")) {
		clone.style.height = "525px";
		clone.style.width =
			525 * (clone.naturalWidth / clone.naturalHeight) + "px";
	}

	if (clone.getBoundingClientRect().x < window.innerWidth / 2) {
		matrix += 1;
	} else {
		matrix += 4;
	}
	if (clone.getBoundingClientRect().y < window.innerHeight / 2) {
		matrix += 2;
	} else {
		matrix += 8;
	}

	switch (matrix) {
		case 3:
			// Вправо и вниз.
			clone.style.right = "";
			clone.style.bottom = "";
			clone.style.top = 0;
			clone.style.left = 0;
			clone.classList.add("gallery6__photoClone--right");
			clone.classList.add("gallery6__photoClone--down");
			break;
		case 9:
			// Вправо и вверх.
			clone.style.right = "";
			clone.style.top = "";
			clone.style.bottom = 0;
			clone.style.left = 0;
			clone.classList.add("gallery6__photoClone--right");
			clone.classList.add("gallery6__photoClone--up");
			break;
		case 6:
			// Влево и вниз
			clone.style.left = "";
			clone.style.bottom = "";
			clone.style.right = 0;
			clone.style.top = 0;
			clone.classList.add("gallery6__photoClone--left");
			clone.classList.add("gallery6__photoClone--down");
			break;
		case 12:
			// Влево и вверх.
			clone.style.left = "";
			clone.style.top = "";
			clone.style.right = 0;
			clone.style.bottom = 0;
			clone.classList.add("gallery6__photoClone--left");
			clone.classList.add("gallery6__photoClone--up");
			break;
	}
}

function gallery6MouseLeave(evt) {
	evt.currentTarget
		.closest(".gallery6__image")
		.classList.remove("gallery6__image--hover");
	evt.currentTarget
		.closest(".gallery6")
		.classList.remove("gallery6--mouseActive");

	let clone = evt.currentTarget
		.closest(".gallery6__image")
		.querySelector(".gallery6__photoClone");

	clone.classList.remove("gallery6__photoClone--down");
	clone.classList.remove("gallery6__photoClone--up");
	clone.classList.remove("gallery6__photoClone--left");
	clone.classList.remove("gallery6__photoClone--right");

	clone.style.height = "";
	clone.style.width = "";
}

function gallery6OpenModal(evt) {
	evt.preventDefault();

	// Модалка.
	let gallery6Modal = document.createElement("div");
	gallery6Modal.classList.add("gallery6__modal");

	let gallery6ModalContainer = document.createElement("div");
	gallery6ModalContainer.classList.add("gallery6__modalContainer");
	gallery6Modal.append(gallery6ModalContainer);

	// Закрытие модалки
	let gallery6ModalCloseBtn = document.createElement("button");
	gallery6ModalCloseBtn.classList.add("gallery6__modalClose");
	gallery6ModalCloseBtn.addEventListener("click", gallery6CloseModal);

	gallery6Modal.append(gallery6ModalCloseBtn);

	// Содержимое модалки.
	let currentTargetItem;
	currentTargetItem = evt.currentTarget.querySelector(
		".gallery6__photo:not(.hidden) ~ .gallery6__photoClone"
	);
	if (!currentTargetItem) {
		currentTargetItem = evt.currentTarget.querySelector(
			".gallery6__video:not(.hidden)"
		);
	}
	let currentGallery6 = currentTargetItem.closest(".gallery6");
	let allImagesInCurrentGallery = currentGallery6.querySelectorAll(
		".gallery6__photo:not(.hidden) ~ .gallery6__photoClone, .gallery6__video:not(.hidden)"
	);
	let currentImageIndex = [...allImagesInCurrentGallery].indexOf(
		currentTargetItem
	);

	allImagesInCurrentGallery.forEach((item) => {
		let temp = item.cloneNode();
		// temp.classList.add("gallery6__modalActiveElement");
		temp.classList.add("gallery6__modalActiveElement");
		if (item == currentTargetItem) {
			temp.classList.add("gallery6__modalActiveElement--current");
		}
		temp.classList.remove("gallery6__photoClone");
		temp.classList.remove("gallery6__photoClone--horizontal");
		temp.classList.remove("gallery6__photoClone--vertical");

		temp.style.right = "";
		temp.style.left = "";
		temp.style.top = "";
		temp.style.bottom = "";
		temp.style.width = "";
		temp.style.height = "";

		if (item.classList.contains("gallery6__photoClone--horizontal")) {
			temp.style.height =
				(item.naturalHeight / item.naturalWidth) *
					document.body.getBoundingClientRect().width +
				"px";
		}
		if (item.classList.contains("gallery6__photoClone--vertical")) {
			temp.style.height = item.naturalHeight + "px";
			temp.style.width = "auto";
		}

		gallery6ModalContainer.append(temp);
	});

	// Прикрепляем модалку.
	document.body.classList.add("scrollOff");
	currentGallery6.append(gallery6Modal);

	// Прокручиваем к текущей картинке.
	if (currentImageIndex == 0) {
		gallery6ModalContainer
			.querySelector(".gallery6__modalActiveElement--current")
			.scrollIntoView({ block: "start" });
	} else {
		if (currentImageIndex == allImagesInCurrentGallery.length - 1) {
			gallery6ModalContainer
				.querySelector(".gallery6__modalActiveElement--current")
				.scrollIntoView({ block: "end" });
		} else {
			gallery6ModalContainer
				.querySelector(".gallery6__modalActiveElement--current")
				.scrollIntoView({ block: "center" });
		}
	}
}

function gallery6CloseModal(evt) {
	evt.currentTarget.closest(".gallery6__modal").remove();
	document.body.classList.remove("scrollOff");
}
