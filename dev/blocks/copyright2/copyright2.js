function copyright2Init() {
	copyright2Unmount();

	let copyright2LitepageElement = document.querySelector(
		".copyright2__litepageIcon"
	);
	if (copyright2LitepageElement) {
		let tempSvg = document.createElement("div");
		tempSvg.innerHTML =
			'<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.71429 0C3.4538 0 0 3.4538 0 7.71429V28.2857C0 32.5462 3.4538 36 7.71429 36H28.2857C32.5462 36 36 32.5462 36 28.2857V7.71429C36 3.4538 32.5462 0 28.2857 0H7.71429ZM18 28.2857C23.6806 28.2857 28.2857 23.6806 28.2857 18C28.2857 12.3194 23.6806 7.71429 18 7.71429C12.3194 7.71429 7.71429 12.3194 7.71429 18C7.71429 23.6806 12.3194 28.2857 18 28.2857Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1429 18C23.1429 15.1597 20.8403 12.8571 18 12.8571C15.1597 12.8571 12.8571 15.1597 12.8571 18C12.8571 20.8403 15.1597 23.1429 18 23.1429V18H23.1429Z" fill="black"/></svg>';
		copyright2LitepageElement.appendChild(tempSvg.firstChild);
	}
}
