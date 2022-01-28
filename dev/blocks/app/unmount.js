function appUnmount(){
	if (document.querySelectorAll(".app__btn svg").length) {
		document.querySelectorAll(".app__btn svg").forEach((item) => {
			item.remove();
		});
	}
}
