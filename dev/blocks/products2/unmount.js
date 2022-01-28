function products2Unmount() {
	if (document.querySelectorAll(".products2__itemLink svg").length) {
		document.querySelectorAll(".products2__itemLink svg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".products2__itemLink").length) {
		document.querySelectorAll(".products2__itemLink").forEach((item) => {
			item.removeEventListener("click", product2ClickListener);
		});
	}

	if (document.querySelectorAll(".products2__modalClose").length) {
		document.querySelectorAll(".products2__modalClose").forEach((item) => {
			item.removeEventListener("click", product2CloseListener);
			item.innerHTML = "";
		});
	}

	if (document.querySelectorAll(".products2__modalForm").length) {
		document.querySelectorAll(".products2__modalForm").forEach((item) => {
			item.removeEventListener("submit", product2SubmitListener);
		});
	}

	if (document.querySelectorAll(".products2__modalSuccessTextIcon svg").length) {
		document.querySelectorAll(".products2__modalSuccessTextIcon svg").forEach((item) => {
			item.remove();
		});
	}
}
