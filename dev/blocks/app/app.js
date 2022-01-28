appInit = () => {
	let appLinks = document.querySelectorAll(".app__btn a");
	if (appLinks.length) {
		appLinks.forEach((item) => {
			if (!item.querySelector("svg")) {
				injectSVG(item, appLinkSVG);
			}
		});
	}
};
