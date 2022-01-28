function cta2SubmitFunction(evt) {
	evt.preventDefault();

	let ctaForm = evt.currentTarget.closest(".cta2");

	if (!ctaForm) {
		return false;
	}

	let ctaFormInputs = ctaForm.querySelectorAll(".cta2__input");
	let ctaFormCurrentStatus = "";

	ctaFormInputs.forEach((input) => {
		if ((input.type == "checkbox" && !input.checked) || !input.value) {
			ctaFormCurrentStatus = "error";
			input.classList.add("cta2__input--error");
		} else {
			input.classList.remove("cta2__input--error");
		}
	});

	if (ctaFormCurrentStatus != "error") {
		sendData(evt.currentTarget)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json.status == "ok") {
					let errorInputs = ctaForm.querySelectorAll(
						".cta2__input--error"
					);

					if (errorInputs.length) {
						errorInputs.forEach((input) => {
							input.classList.remove("cta2__input--error");
						});
					}

					document.body.classList.add("scrollOff");
					document
						.querySelector(".overlay")
						.classList.add("overlay--visible");
					document
						.querySelector(".popUp")
						.classList.add("popUp--visible");

					document
						.querySelector(".popUp__close")
						.classList.add("popUp__close--visible");
				} else {
					json.errorFields.forEach((field) => {
						ctaForm
							.querySelector(`input[name='${field}']`)
							.classList.add("cta2__input--error");
					});
				}
			})
			.catch((err) => {
				console.log("Something wrong!", err);
			});
	}
}

function cta2Init() {
	cta2Unmount();

	let allCta2Forms = document.querySelectorAll(".cta2__form");
	if (allCta2Forms.length) {
		allCta2Forms.forEach((item) => {
			item.addEventListener("submit", cta2SubmitFunction);
		});
	}
}
