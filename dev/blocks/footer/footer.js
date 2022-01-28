function scrollToTop(evt) {
	evt.preventDefault();
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function footerInit() {
	let footerSocialLinks = document.querySelectorAll(".footer__socialLink");

	if (footerSocialLinks.length) {
		footerSocialLinks.forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
			if (item.classList.contains("footer__socialLink--linkedin")) {
				injectSVG(item, footerLinkedinSVG);
			}
			if (item.classList.contains("footer__socialLink--fb")) {
				injectSVG(item, footerFbSVG);
			}
			if (item.classList.contains("footer__socialLink--twitter")) {
				injectSVG(item, footerTwitterSVG);
			}
			if (item.classList.contains("footer__socialLink--instagram")) {
				injectSVG(item, footerInstagramSVG);
			}
			if (item.classList.contains("footer__socialLink--default")) {
				item.innerHTML = item
					.getAttribute("href")
					.replace(/^http[s?:\/\/]*[www\.]*[m\.]*/, "")
					.slice(0, 2);
			}
		});
	}

	let footerTechSocialLinks = document.querySelectorAll(
		".footer__techSocialLink"
	);

	if (footerTechSocialLinks.length) {
		footerTechSocialLinks.forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
			if (item.classList.contains("footer__techSocialLink--linkedin")) {
				injectSVG(item, footerLinkedinSVG);
			}
			if (item.classList.contains("footer__techSocialLink--fb")) {
				injectSVG(item, footerFbSVG);
			}
			if (item.classList.contains("footer__techSocialLink--twitter")) {
				injectSVG(item, footerTwitterSVG);
			}
			if (item.classList.contains("footer__techSocialLink--instagram")) {
				injectSVG(item, footerInstagramSVG);
			}
			if (item.classList.contains("footer__techSocialLink--default")) {
				item.innerHTML = item
					.getAttribute("href")
					.replace(/^http[s?:\/\/]*[www\.]*[m\.]*/, "")
					.slice(0, 2);
			}
		});
	}

	let backToTopBtn = document.querySelector(".footer__backToTop svg");
	if (backToTopBtn) {
		backToTopBtn.remove();
	}

	backToTopBtnSVGElement = document.createElement("div");
	backToTopBtnSVGElement.innerHTML = backToTopSVG;

	if (document.querySelector(".footer__backToTop")) {
		document
			.querySelector(".footer__backToTop")
			.append(backToTopBtnSVGElement.firstChild);

		document
			.querySelector(".footer__backToTop")
			.removeEventListener("click", scrollToTop);
		document
			.querySelector(".footer__backToTop")
			.addEventListener("click", scrollToTop);
	}
}
