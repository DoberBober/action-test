function instagramUnmount(){
	if (instagramSlider) {
		instagramSlider.destroy();
		instagramSlider = "";
	}

	if (document.querySelectorAll(".instagram__link svg").length) {
		document.querySelectorAll(".instagram__link svg").forEach((item) => {
			item.remove();
		});
	}
}
