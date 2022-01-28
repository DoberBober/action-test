function footer3Init() {
	footer3Unmount();

	let footer3PhoneLinks = document.querySelectorAll(".footer3__phone");
	if (footer3PhoneLinks.length) {
		footer3PhoneLinks.forEach((item) => {
			let cleanPhone = item.innerText.replace(/[^\d+]/g, "");
			if (cleanPhone[0] == 8) {
				cleanPhone = "+7" + cleanPhone.slice(1);
			}

			item.setAttribute("href", `tel:${cleanPhone}`);
		});
	}
}
