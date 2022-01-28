socialInit = () => {
	let socailLinks = document.querySelectorAll(".social__link");

	if (socailLinks.length) {
		socailLinks.forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
			if (item.classList.contains("social__link--twitter")) {
				injectSVG(item, socialTwitterSVG);
			}
			if (item.classList.contains("social__link--fb")) {
				injectSVG(item, socialFbSVG);
			}
			if (item.classList.contains("social__link--vk")) {
				injectSVG(item, socialVkSVG);
			}
			if (item.classList.contains("social__link--instagram")) {
				injectSVG(item, socialInstagramSVG);
			}
			if (item.classList.contains("social__link--default")) {
				item.innerHTML = item
					.getAttribute("href")
					.replace(/^http[s?:\/\/]*[www\.]*[m\.]*/, "")
					.slice(0, 2);
			}
		});
	}
};
