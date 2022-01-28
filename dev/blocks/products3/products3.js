function product3ClickListener(evt) {
	evt.preventDefault();

	document.body.classList.add("scrollOff");

	let targetProductElement = evt.currentTarget.closest(".products3__item");
	let targetModal = evt.currentTarget.closest(".products3").querySelector(".products3__modal");
	let targetModalOverlay = evt.currentTarget.closest(".products3").querySelector(".isPopupOverlay");

	let modalImgWrapperElement = targetModal.querySelector(".products3__modalImgWrapper");
	let modalImgElement = targetModal.querySelector(".products3__modalImg");
	let modalTitleElement = targetModal.querySelector(".products3__modalName");
	let modalPriceElement = targetModal.querySelector(".products3__modalPrice");
	let modalDescriptionElement = targetModal.querySelector(".products3__modalDescription");

	if (!targetProductElement.querySelector(".products3__itemImg").getAttribute("src")) {
		modalImgWrapperElement.classList.add("hidden");
	} else {
		modalImgElement.setAttribute("src", targetProductElement.querySelector(".products3__itemImg").getAttribute("src"));
		modalImgWrapperElement.classList.remove("hidden");
	}
	modalTitleElement.innerHTML = targetProductElement.querySelector(".products3__itemTitle").innerHTML;
	modalPriceElement.innerHTML = targetProductElement.querySelector(".products3__itemPrice").innerHTML;
	modalDescriptionElement.innerHTML = targetProductElement.querySelector(".products3__itemDesc").innerHTML;

	targetModal.classList.add("products3__modal--active");
	targetModalOverlay.classList.add("isPopupOverlay--active");
}

function product3CloseListener(evt) {
	let targetBlock = evt.currentTarget.closest(".products3");
	targetBlock.querySelector(".products3__modal--active").classList.remove("products3__modal--active");
	targetBlock.querySelector(".isPopupOverlay--active").classList.remove("isPopupOverlay--active");
	document.body.classList.remove("scrollOff");
}

function product3SubmitListener(evt) {
	evt.preventDefault();

	let targetBlock = evt.currentTarget.closest(".products3");
	let targetModal = targetBlock.querySelector(".products3__modal");
	let targetOverlay = targetBlock.querySelector(".products3__modalOverlay");

	sendData(evt.currentTarget).then((response) => {
		if (response.status == 200) {
			targetModal.classList.add("products3__modal--success");
			setTimeout(() => {
				targetOverlay.classList.remove("isPopupOverlay--active");
				targetModal.classList.remove("products3__modal--active");
				targetModal.classList.remove("products3__modal--success");
				document.body.classList.remove("scrollOff");
			}, 2000);
		}
	});
}

function products3Init() {
	products3Unmount();

	let allProducts3Items = document.querySelectorAll(".products3__itemLink");
	if (allProducts3Items.length) {
		allProducts3Items.forEach((item) => {
			if (!item.querySelector("svg")) {
				let temp = document.createElement("div");
				temp.innerHTML =
					'<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8002 19.1998C4.8002 27.1527 11.2473 33.5998 19.2002 33.5998C22.5249 33.5998 25.5865 32.473 28.0239 30.5806C28.1157 30.7748 28.2419 30.9568 28.4026 31.1174L39.9226 42.6374C40.6724 43.3873 41.888 43.3873 42.6378 42.6374C43.3876 41.8876 43.3876 40.672 42.6378 39.9222L31.1178 28.4022C30.9572 28.2415 30.7752 28.1153 30.581 28.0235C32.4734 25.5861 33.6002 22.5245 33.6002 19.1998C33.6002 11.2469 27.1531 4.7998 19.2002 4.7998C11.2473 4.7998 4.8002 11.2469 4.8002 19.1998ZM8.6402 19.1998C8.6402 13.3677 13.3681 8.6398 19.2002 8.6398C25.0323 8.6398 29.7602 13.3677 29.7602 19.1998C29.7602 25.0319 25.0323 29.7598 19.2002 29.7598C13.3681 29.7598 8.6402 25.0319 8.6402 19.1998Z" fill="var(--main2Text)"/></svg>';
				item.appendChild(temp.firstChild);

				item.addEventListener("click", product3ClickListener);
			}
		});
	}

	let allProducts3CloseBtns = document.querySelectorAll(".products3__modalClose");
	if (allProducts3CloseBtns.length) {
		allProducts3CloseBtns.forEach((item) => {
			item.addEventListener("click", product3CloseListener);
			item.innerHTML = isPopupCloseSVG;
		});
	}

	if (document.querySelectorAll(".products3__modalForm").length) {
		document.querySelectorAll(".products3__modalForm").forEach((item) => {
			item.addEventListener("submit", product3SubmitListener);
		});
	}

	if (document.querySelectorAll(".products3__modalSuccessTextIcon").length) {
		document.querySelectorAll(".products3__modalSuccessTextIcon").forEach((item) => {
			injectSVG(item, isPopupSuccessSVG);
		});
	}
}
