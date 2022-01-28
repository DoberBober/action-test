function about5Unmount(){
	if (document.querySelectorAll(".about5__container").length) {
		document.querySelectorAll(".about5__container").forEach((item) => {
			item.classList.remove("about5__container--oneColumn");
		});
	}
}
