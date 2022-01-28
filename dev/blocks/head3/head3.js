function head3FormSubmitListener(evt) {
	evt.preventDefault();

	let head3Form = evt.currentTarget.closest(".head3__form");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			let head3FormSuccess = document.createElement("div");
			head3FormSuccess.classList.add("head3__formSuccess");
			head3FormSuccess.innerHTML = `<svg class="head3__formSuccessIcon" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="33" r="33" fill="#000"/><path d="M41 27L30 38L25 33" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
			head3FormSuccess.innerHTML = head3FormSuccess.innerHTML + "<p>" + (head3Form.dataset.response ? head3Form.dataset.response : "") + "</p>";
			head3FormSuccess.innerHTML =
				head3FormSuccess.innerHTML +
				`<button onClick="this.closest('.head3__formSuccess').remove()" class="head3__formSuccessClose" type="button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.75" y="17" width="2" height="17" transform="rotate(-135 4.75 17)" fill="black"/><rect x="3" y="4.75" width="2" height="17" transform="rotate(-45 3 4.75)" fill="black"/></svg></button>`;

			head3Form.append(head3FormSuccess);

			setTimeout(() => {
				head3FormSuccess.remove();
			}, 2000);
		}
	});
}

function head3Init() {
	h1Length(".head3__heading");

	if (document.querySelectorAll(".head3__form").length) {
		document.querySelectorAll(".head3__form").forEach((item) => {
			item.removeEventListener("submit", head3FormSubmitListener);
			item.addEventListener("submit", head3FormSubmitListener);

			item.querySelector('input[name="domainName"]').value = window.location.hostname;
		});
	}

	document.querySelectorAll(".head3__formNote").forEach((item) => {
		item.closest(".head3__form").querySelector(".head3__formBlock").append(item);
	});
}
