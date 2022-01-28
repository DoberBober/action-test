function headUnmount(){
	if (document.querySelectorAll(".head__buttons svg").length) {
		document.querySelectorAll(".head__buttons svg").forEach((item) => {
			item.remove();
		});
	}
}
