function aboutUnmount(){
	if (document.querySelectorAll(".about__directionBtn").length) {
		document.querySelectorAll(".about__directionBtn").forEach((btn) => {
			btn.removeEventListener("click", aboutListListener);

			if (btn.querySelector("svg")) {
				btn.querySelector("svg").remove();
			}
		});
	}

	if (document.querySelectorAll(".about__btn svg").length) {
		document.querySelectorAll(".about__btn svg").forEach((btn) => {
			btn.remove();
		});
	}
}
