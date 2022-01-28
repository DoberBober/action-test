function gallery2Unmount(){
	if (gallery2Sliders.length) {
		gallery2Sliders.forEach((slider) => {
			slider.destroy();
		});
		gallery2Sliders = [];
	}
}
