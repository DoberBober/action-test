infofactInit = () => {
	let infofact = document.querySelector('.infofact__list')

	if(infoFactSlider){
		infoFactSlider.destroy()
	}

	if(infofact){
		infoFactSlider = new Flickity( infofact, {
			imagesLoaded: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: '',
			adaptiveHeight: false,
			watchCSS: true,
			cellAlign: 'left',
			contain: true
		});
	}
}
