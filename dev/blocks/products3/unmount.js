function products3Unmount() {
	if (document.querySelectorAll(".products3__itemLink svg").length) {
		document.querySelectorAll(".products3__itemLink svg").forEach((item) => {
			item.remove();
		});
	}

	if (document.querySelectorAll(".products3__itemLink").length) {
		document.querySelectorAll(".products3__itemLink").forEach((item) => {
			item.removeEventListener("click", product3ClickListener);
		});
	}

	if (document.querySelectorAll(".products3__modalClose").length) {
		document.querySelectorAll(".products3__modalClose").forEach((item) => {
			item.removeEventListener("click", product3CloseListener);
			item.innerHTML = "";
		});
	}

	if (document.querySelectorAll(".products3__modalForm").length) {
		document.querySelectorAll(".products3__modalForm").forEach((item) => {
			item.removeEventListener("submit", product3SubmitListener);
		});
	}

	if (document.querySelectorAll(".products3__modalSuccessTextIcon svg").length) {
		document.querySelectorAll(".products3__modalSuccessTextIcon svg").forEach((item) => {
			item.remove();
		});
	}
}
