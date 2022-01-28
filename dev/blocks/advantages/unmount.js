function advantagesUnmount() {
	if (advantagesSliders.length) {
		advantagesSliders.forEach((item) => {
			item.destroy();
		});

		advantagesSliders = [];
	}
}
