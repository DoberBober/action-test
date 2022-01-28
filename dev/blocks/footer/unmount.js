function footerUnmount(){
	if (document.querySelectorAll(".footer__socialLink").length) {
		document.querySelectorAll(".footer__socialLink").forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
		});
	}

	if (document.querySelectorAll(".footer__techSocialLink").length) {
		document.querySelectorAll(".footer__techSocialLink").forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
		});
	}

	if (document.querySelector(".footer__backToTop svg")) {
		document.querySelector(".footer__backToTop svg").remove();
	}

	if (document.querySelector(".footer__backToTop")) {
		document
			.querySelector(".footer__backToTop")
			.removeEventListener("click", scrollToTop);
	}
}
