function unmount() {
	// Global.
	window.removeEventListener("resize", appHeight);
	window.removeEventListener("resize", reloadAllSliders);
	window.removeEventListener("load", reloadAllSliders);
	window.removeEventListener("scroll", headerScrollAnimate);
	window.removeEventListener("scroll", windowClassOnScrollFunction);
	window.removeEventListener("resize", cases3OnOff);
	window.removeEventListener("resize", cases6OnOff);
	window.removeEventListener("resize", reloadBtnVariable);
	window.removeEventListener("scroll", paintHeaderMenu);
	if (document.querySelector(".constructorActive")) {
		document.body.removeEventListener("scroll", paintHeaderMenu);
	}

	if (document.querySelector('[id^="header"]')) {
		document.querySelector('[id^="header"]').style.setProperty("--headerText", "");
	}

	if (document.querySelectorAll('[litepage-button-type="form"]').length) {
		document.querySelectorAll('[litepage-button-type="form"]').forEach((item) => {
			item.removeEventListener("click", showPopup);
		});
	}

	if (document.querySelectorAll(".flickity-buttons-wrapper").length) {
		document.querySelectorAll(".flickity-buttons-wrapper").forEach((item) => {
			item.after(item.querySelector(".flickity-prev-next-button.previous"));

			item.after(item.querySelector(".flickity-prev-next-button.next"));

			item.remove();
		});
	}

	if (document.querySelectorAll(".flickity-activated").length) {
		document.querySelectorAll(".flickity-activated").forEach((item) => {
			item.classList.remove("flickity-activated");
		});
	}

	// Blocks.
	if (document.querySelector(".modal") && document.querySelector(".modal__close")) {
		document.querySelector(".modal__close").removeEventListener("click", modalHide);
	}

	if (document.querySelector(".popUp") && document.querySelector(".popUp__close")) {
		document.querySelector(".popUp__close").removeEventListener("click", popupHide);
	}

	e404Unmount();
	aboutUnmount();
	about2Unmount();
	about3Unmount();
	about4Unmount();
	about5Unmount();
	about6Unmount();
	about7Unmount();
	about8Unmount();
	advantagesUnmount();
	advantages2Unmount();
	advantages3Unmount();
	advantages4Unmount();
	advantages5Unmount();
	advantages6Unmount();
	appUnmount();
	casesUnmount();
	cases2Unmount();
	cases3Unmount();
	cases4Unmount();
	cases5Unmount();
	cases6Unmount();
	contactsUnmount();
	copyrightUnmount();
	copyright2Unmount();
	copyright3Unmount();
	ctaUnmount();
	cta2Unmount();
	cta3Unmount();
	cta4Unmount();
	docsUnmount();
	faqUnmount();
	faq2Unmount();
	faq3Unmount();
	footerUnmount();
	footer2Unmount();
	footer3Unmount();
	footer4Unmount();
	galleryUnmount();
	gallery2Unmount();
	gallery3Unmount();
	gallery4Unmount();
	gallery5Unmount();
	gallery6Unmount();
	headUnmount();
	head2Unmount();
	head3Unmount();
	head4Unmount();
	head5Unmount();
	head6Unmount();
	head7Unmount();
	head8Unmount();
	head9Unmount();
	head10Unmount();
	header2Unmount();
	header3Unmount();
	header4Unmount();
	header5Unmount();
	header6Unmount();
	header7Unmount();
	infofactUnmount();
	instagramUnmount();
	newsUnmount();
	partnersUnmount();
	partners2Unmount();
	partners3Unmount();
	partners4Unmount();
	popupFormUnmount();
	popupForm2Unmount();
	popupForm3Unmount();
	popupForm4Unmount();
	popupForm5Unmount();
	priceUnmount();
	price2Unmount();
	price3Unmount();
	processUnmount();
	process2Unmount();
	productsUnmount();
	products2Unmount();
	products3Unmount();
	products4Unmount();
	promotionUnmount();
	ratesUnmount();
	rates5Unmount();
	rates6Unmount();
	reviewsUnmount();
	reviews2Unmount();
	reviews3Unmount();
	servicesUnmount();
	services2Unmount();
	services3Unmount();
	services4Unmount();
	services5Unmount();
	services6Unmount();
	services7Unmount();
	socialUnmount();
	teamUnmount();
	timetableUnmount();
}
