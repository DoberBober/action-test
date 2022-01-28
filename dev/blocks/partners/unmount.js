function partnersUnmount() {
	if (partnersSliders.length) {
		partnersSliders.forEach((slider) => {
			slider.destroy();
		});
		partnersSliders = [];
	}

	window.removeEventListener("resize", partnersCreateSliders);
}
