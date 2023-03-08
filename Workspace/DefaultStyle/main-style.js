let upperMidFooter = document.getElementById("upper-mid-area");
let upperMidFooterChild = document.getElementById("upper-mid-area-content");

upperMidFooter.addEventListener("mouseenter", () => {
	upperMidFooter.style.width = "150px";
	upperMidFooter.style.borderColor = "white";
	upperMidFooterChild.innerHTML = "English";
	upperMidFooterChild.style.width = "14%";
	upperMidFooterChild.style.margin = "0 100px 0 0";
});
upperMidFooter.addEventListener("mouseleave", () => {
	upperMidFooter.style.width = "60px";
	upperMidFooter.style.borderColor = "grey";
	upperMidFooterChild.innerHTML = "";
	upperMidFooterChild.style.width = "0";
	upperMidFooterChild.style.margin = "0 0 0 0";
});
