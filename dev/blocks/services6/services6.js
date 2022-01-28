function services6Init() {
	services6Unmount();

	// Регулируем размер шрифта.
	let services6itemLinks = document.querySelectorAll(".services6__itemLink");
	if (services6itemLinks.length) {
		services6itemLinks.forEach((link) => {
			if (link.innerText.trim().length > 30) {
				link.classList.add("services6__itemLink--small");
			} else {
				link.classList.remove("services6__itemLink--small");
			}
		});
	}
}
