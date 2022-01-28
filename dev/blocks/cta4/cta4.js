function cta4SubmitFunction(evt) {
	evt.preventDefault();

	let cta4Form = evt.currentTarget.closest(".cta4");

	if (!cta4Form) {
		return false;
	}

	let cta4FormInputs = cta4Form.querySelectorAll(".cta4__input");
	let cta4FormCurrentStatus = "";

	cta4FormInputs.forEach((input) => {
		if ((input.type == "checkbox" && !input.checked) || !input.value) {
			cta4FormCurrentStatus = "error";
			input.classList.add("cta4__input--error");
		} else {
			input.classList.remove("cta4__input--error");
		}
	});

	if (cta4FormCurrentStatus != "error") {
		sendData(evt.currentTarget)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json.status == "ok") {
					let errorInputs = cta4Form.querySelectorAll(
						".cta4__input--error"
					);

					if (errorInputs.length) {
						errorInputs.forEach((input) => {
							input.classList.remove("cta4__input--error");
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
						cta4Form
							.querySelector(`input[name='${field}']`)
							.classList.add("cta4__input--error");
					});
				}
			})
			.catch((err) => {
				console.log("Something wrong!", err);
			});
	}
}

function cta4Init() {
	cta4Unmount();

	let allCta4Forms = document.querySelectorAll(".cta4__form");
	if (allCta4Forms.length) {
		allCta4Forms.forEach((item) => {
			item.addEventListener("submit", cta4SubmitFunction);
		});
	}
}
