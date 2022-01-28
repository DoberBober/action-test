function cta3SubmitFunction(evt) {
	evt.preventDefault();

	let cta3Form = evt.currentTarget.closest(".cta3");

	if (!cta3Form) {
		return false;
	}

	let cta3FormInputs = cta3Form.querySelectorAll(".cta3__input");
	let cta3FormCurrentStatus = "";

	cta3FormInputs.forEach((input) => {
		if ((input.type == "checkbox" && !input.checked) || !input.value) {
			cta3FormCurrentStatus = "error";
			input.classList.add("cta3__input--error");
		} else {
			input.classList.remove("cta3__input--error");
		}
	});

	if (cta3FormCurrentStatus != "error") {
		sendData(evt.currentTarget)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json.status == "ok") {
					let errorInputs = cta3Form.querySelectorAll(
						".cta3__input--error"
					);

					if (errorInputs.length) {
						errorInputs.forEach((input) => {
							input.classList.remove("cta3__input--error");
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
						cta3Form
							.querySelector(`input[name='${field}']`)
							.classList.add("cta3__input--error");
					});
				}
			})
			.catch((err) => {
				console.log("Something wrong!", err);
			});
	}
}

function cta3Init() {
	cta3Unmount();

	let allCta3Forms = document.querySelectorAll(".cta3__form");
	if (allCta3Forms.length) {
		allCta3Forms.forEach((item) => {
			item.addEventListener("submit", cta3SubmitFunction);
		});
	}
}
