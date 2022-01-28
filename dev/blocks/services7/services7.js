function services7Init() {
	services7Unmount();

	services7ItemsIcon1 = document.createElement("div");
	services7ItemsIcon1.classList.add("services7__itemIcon");
	services7ItemsIcon1.innerHTML = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.46443" y="5" width="5" height="5" transform="rotate(-45 1.46443 5)" stroke="currentColor"/></svg>';
	services7ItemsIcon2 = document.createElement("div");
	services7ItemsIcon2.classList.add("services7__itemIcon");
	services7ItemsIcon2.innerHTML = '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="7" height="7" rx="3.5" stroke="currentColor"/></svg>';
	services7ItemsIcon3 = document.createElement("div");
	services7ItemsIcon3.classList.add("services7__itemIcon");
	services7ItemsIcon3.innerHTML = '<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5359 7L5 1L8.4641 7H1.5359Z" stroke="currentColor"/></svg>';
	services7ItemsIcon4 = document.createElement("div");
	services7ItemsIcon4.classList.add("services7__itemIcon");
	services7ItemsIcon4.innerHTML = '<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="5" height="5" stroke="currentColor"/></svg>';

	let services7Items1 = document.querySelectorAll(".services7__item:nth-child(1) .services7__itemName");
	if (services7Items1.length) {
		services7Items1.forEach((item) => {
			if (!item.querySelector(".services7__itemIcon")) {
				item.append(services7ItemsIcon1);
			}
		});
	}
	let services7Items2 = document.querySelectorAll(".services7__item:nth-child(2) .services7__itemName");
	if (services7Items2.length) {
		services7Items2.forEach((item) => {
			if (!item.querySelector(".services7__itemIcon")) {
				item.append(services7ItemsIcon2);
			}
		});
	}
	let services7Items3 = document.querySelectorAll(".services7__item:nth-child(3) .services7__itemName");
	if (services7Items3.length) {
		services7Items3.forEach((item) => {
			if (!item.querySelector(".services7__itemIcon")) {
				item.append(services7ItemsIcon3);
			}
		});
	}
	let services7Items4 = document.querySelectorAll(".services7__item:nth-child(4) .services7__itemName");
	if (services7Items4.length) {
		services7Items4.forEach((item) => {
			if (!item.querySelector(".services7__itemIcon")) {
				item.append(services7ItemsIcon4);
			}
		});
	}

	let allServices7Blocks = document.querySelectorAll(".services7");
	if (allServices7Blocks.length) {
		allServices7Blocks.forEach((block) => {
			if (!block.querySelector(".services7__img") || block.querySelector(".services7__img").classList.contains("invisible")) {
				block.classList.add("services7--withoutImg");
			} else {
				block.classList.remove("services7--withoutImg");
			}
		});
	}
}
