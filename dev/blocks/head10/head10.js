function head10FormSubmitListener(evt) {
	evt.preventDefault();

	let parentBlock = evt.currentTarget.closest(".head10");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			parentBlock.classList.add("blockFormSent");
			setTimeout(() => {
				parentBlock.classList.remove("blockFormSent");
			}, 3000);
		}
	});
}

function head10Init() {
	head10Unmount();

	h1Length(".head10__heading");

	document.querySelectorAll(".head10__form").forEach((item) => {
		item.addEventListener("submit", head10FormSubmitListener);
	});

	document.querySelectorAll(".head10__formSubmit").forEach((item) => {
		let temp = document.createElement("div");
		temp.innerHTML =
			'<svg class="head10__formSubmitIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H22V22M21.5 2.5L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>';
		item.append(temp.firstChild);
	});

	document.querySelectorAll(".successPopup__iconWrapper").forEach((item) => {
		let temp = document.createElement("div");
		temp.innerHTML =
			'<svg class="successPopup__iconWrapperSvg" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39" stroke="currentColor" stroke-width="2"></circle><path d="M50.6663 32L35.9997 46.6667L29.333 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
		item.append(temp.firstChild);
	});

	if (document.querySelectorAll(".head10").length) {
		document.querySelectorAll(".head10").forEach((item) => {
			if ((item.querySelector(".head10__img").classList.contains("hidden") || item.querySelector(".head10__img").classList.contains("invisible")) && item.querySelector(".head10__video.hidden")) {
				item.classList.add("head10--withoutImg");
			} else {
				item.classList.remove("head10--withoutImg");
			}
		});
	}
}
