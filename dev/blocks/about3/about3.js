function about3Init() {
	let about3ImgsList = document.querySelectorAll(".about3__imgsList");

	if (about3ImgsList.length) {
		about3ImgsList.forEach((item) => {
			item.classList.remove("about3__imgsList--2item");

			let actualImg = 0;
			if (item.querySelectorAll(".about3__img").length) {
				item.querySelectorAll(".about3__img").forEach((img) => {
					if (img.classList.contains("invisible") && img.parentNode.querySelector(".about3__video.hidden")) {
						img.closest(".about3__imgAdminWrapper").classList.add("hidden");
					} else {
						actualImg++;
						img.closest(".about3__imgAdminWrapper").classList.remove("hidden");
					}
				});
			}

			if (actualImg == 2) {
				item.classList.add("about3__imgsList--2item");
			}
		});
	}
}
