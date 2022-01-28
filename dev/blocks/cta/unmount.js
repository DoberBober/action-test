function ctaUnmount(){
	if (document.querySelector("#ctaForm")) {
		document
			.querySelector("#ctaForm")
			.removeEventListener("submit", ctaSubmitFunction);
	}

	if (document.querySelector(".cta__submit svg")) {
		document.querySelector(".cta__submit svg").remove();
	}

	if (document.querySelectorAll(".cta__formBlock").length) {
		document.querySelectorAll(".cta__formBlock").forEach((item) => {
			item.classList.remove("cta__formBlock--fullWidth");
			item.classList.remove("cta__formBlock--halfWidth");
		});
	}
}
