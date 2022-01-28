function socialUnmount(){
	if (document.querySelectorAll(".social__link").length) {
		document.querySelectorAll(".social__link").forEach((item) => {
			item.innerHTML = "";
			if (item.querySelector("svg")) {
				item.querySelector("svg").remove();
			}
		});
	}
}
