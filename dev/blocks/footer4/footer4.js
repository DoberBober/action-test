function footer4Init() {
	footer4Unmount();

	let footer4PhoneLinks = document.querySelectorAll(".footer4__phone");
	if (footer4PhoneLinks.length) {
		footer4PhoneLinks.forEach((item) => {
			let cleanPhone = item.innerText.replace(/[^\d+]/g, "");
			if (cleanPhone[0] == 8) {
				cleanPhone = "+7" + cleanPhone.slice(1);
			}

			item.setAttribute("href", `tel:${cleanPhone}`);
		});
	}
}
