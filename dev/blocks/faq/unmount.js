function faqUnmount(){
	if (document.querySelectorAll(".faq__questionBtn").length > 0) {
		document.querySelectorAll(".faq__questionBtn").forEach((btn) => {
			btn.removeEventListener("click", faqListener);

			if (btn.querySelector("svg")) {
				btn.querySelector("svg").remove();
			}
		});
	}
}
