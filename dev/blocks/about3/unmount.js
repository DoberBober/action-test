function about3Unmount(){
	if (document.querySelectorAll(".about3__imgsList").length) {
		document.querySelectorAll(".about3__imgsList").forEach((item) => {
			item.classList.remove("about3__imgsList--2item");
			if (item.querySelectorAll(".about3__imgAdminWrapper").length) {
				item.querySelectorAll(".about3__imgAdminWrapper").forEach(
					(wrapper) => {
						wrapper.classList.remove("hidden");
					}
				);
			}
		});
	}
}
