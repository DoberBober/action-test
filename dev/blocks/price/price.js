function priceSubmitFunction(evt) {
	evt.preventDefault();

	let priceFormInputs = priceForm.querySelectorAll(".price__userData");
	let priceFormCurrentStatus = "";

	priceFormInputs.forEach((input) => {
		if ((input.type == "checkbox" && !input.checked) || !input.value) {
			priceFormCurrentStatus = "error";
			input.classList.add("price__userData--error");
		} else {
			input.classList.remove("price__userData--error");
		}
	});

	if (priceFormCurrentStatus != "error") {
		sendData(priceForm)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json.status == "ok") {
					let errorInputs = priceForm.querySelectorAll(
						".price__userData--error"
					);

					if (errorInputs.length) {
						errorInputs.forEach((input) => {
							input.classList.remove("price__userData--error");
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
						priceForm
							.querySelector(`input[name='${field}']`)
							.classList.add("price__userData--error");
					});
				}
			})
			.catch((err) => {
				console.log("Something wrong!", err);
			});
	}
}

priceInit = () => {
	let priceForm = document.querySelector("#priceForm");

	if (priceForm) {
		priceForm.removeEventListener("submit", priceSubmitFunction);
		priceForm.addEventListener("submit", priceSubmitFunction);
	}

	let priceSubmitBtn = document.querySelector(".price__submit");
	if (priceSubmitBtn && !priceSubmitBtn.querySelector("svg")) {
		injectSVG(priceSubmitBtn, priceSubmitSVG);
	}
};
