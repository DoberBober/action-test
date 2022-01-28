function ctaSubmitFunction(evt) {
	evt.preventDefault();

	let ctaFormInputs = ctaForm.querySelectorAll(".cta__userData");
	let ctaFormCurrentStatus = "";

	ctaFormInputs.forEach((input) => {
		if ((input.type == "checkbox" && !input.checked) || !input.value) {
			ctaFormCurrentStatus = "error";
			input.classList.add("cta__userData--error");
		} else {
			input.classList.remove("cta__userData--error");
		}
	});

	if (ctaFormCurrentStatus != "error") {
		sendData(ctaForm)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json.status == "ok") {
					let errorInputs = ctaForm.querySelectorAll(
						".cta__userData--error"
					);

					if (errorInputs.length) {
						errorInputs.forEach((input) => {
							input.classList.remove("cta__userData--error");
						});
					}

					document.body.classList.add("scrollOff");
					document
						.querySelector(".overlay")
						.classList.add("overlay--visible");
					document
						.querySelector(".popUp")
						.classList.add("popUp--visible");
				} else {
					json.errorFields.forEach((field) => {
						ctaForm
							.querySelector(`input[name='${field}']`)
							.classList.add("cta__userData--error");
					});
				}
			})
			.catch((err) => {
				console.log("Something wrong!", err);
			});
	}
}

function ctaInit() {
	let ctaForm = document.querySelector("#ctaForm");
	let ctaFormBlocks = document.querySelectorAll(".cta__formBlock");

	if (ctaForm) {
		if (ctaForm.querySelector(".cta__formBlock--fullWidth")) {
			ctaForm
				.querySelector(".cta__formBlock--fullWidth")
				.classList.remove("cta__formBlock--fullWidth");
		}
		if (ctaForm.querySelector(".cta__formBlock--halfWidth")) {
			ctaForm
				.querySelector(".cta__formBlock--halfWidth")
				.classList.remove("cta__formBlock--halfWidth");
		}
		if (ctaForm.querySelector(".cta__formBlock--halfWidth")) {
			ctaForm
				.querySelector(".cta__formBlock--halfWidth")
				.classList.remove("cta__formBlock--halfWidth");
		}

		if (ctaFormBlocks.length % 3 == 1) {
			ctaFormBlocks[ctaFormBlocks.length - 1].classList.add(
				"cta__formBlock--fullWidth"
			);
		} else if (ctaFormBlocks.length % 3 == 2) {
			ctaFormBlocks[ctaFormBlocks.length - 1].classList.add(
				"cta__formBlock--halfWidth"
			);
			ctaFormBlocks[ctaFormBlocks.length - 2].classList.add(
				"cta__formBlock--halfWidth"
			);
		}

		ctaForm.removeEventListener("submit", ctaSubmitFunction);
		ctaForm.addEventListener("submit", ctaSubmitFunction);
	}

	let ctaSubmitBtn = document.querySelector(".cta__submit");
	if (ctaSubmitBtn && !ctaSubmitBtn.querySelector("svg")) {
		injectSVG(ctaSubmitBtn, ctaSubmitSVG);
	}
}
