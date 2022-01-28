newsInit = () => {
	let news = document.querySelector('.news__list')

	if(newsSlider){
		newsSlider.destroy()
	}

	if(news){
		newsSlider = new Flickity( news, {
			imagesLoaded: true,
			pageDots: false,
			cellAlign: 'left',
			arrowShape: '',
			groupCells: true,
			contain: true
		});
	}
}
