function faqListener() {
	this.closest(".faq__item").classList.toggle("faq__item--open");
}

function faqInit() {
	faqUnmount();

	let faqList = document.querySelectorAll(".faq__questionBtn");

	if (faqList.length > 0) {
		faqList.forEach((btn) => {
			btn.addEventListener("click", faqListener);

			if (!btn.querySelector("svg")) {
				injectSVG(
					btn,
					'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9.4668" y="2" width="1.06667" height="16" fill="currentColor"/><rect x="18" y="9.46655" width="1.06667" height="16" transform="rotate(90 18 9.46655)" fill="currentColor"/></svg>'
				);
			}
		});
	}
}
