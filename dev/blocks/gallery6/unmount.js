function gallery6Unmount() {
	if (document.querySelectorAll(".gallery6__modal").length) {
		document
			.querySelectorAll(".gallery6__photo, .gallery6__video")
			.forEach((item) => {
				item.removeEventListener("click", gallery6OpenModal);
			});
	}

	if (document.querySelectorAll(".gallery6__image--active").length) {
		document
			.querySelectorAll(".gallery6__image--active")
			.forEach((item) => {
				item.classList.remove("gallery6__image--active");
			});
	}

	if (document.querySelectorAll(".gallery6__modal").length) {
		document.querySelectorAll(".gallery6__modal").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".gallery6__photoClone").length) {
		document.querySelectorAll(".gallery6__photoClone").forEach((item) => {
			item.remove();
		});
	}

	document.body.classList.remove("scrollOff");
}
