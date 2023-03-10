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

let burger = document.getElementById("burger-menu-btn")
let mainNav = document.getElementById("main-nav");
let othNav = document.getElementById("other-nav");
let nav2 = document.getElementById("nav2");

let leftNav = document.getElementById("left-nav");
burger.addEventListener("mousedown", () => {
	
	console.log('ASU')
	if (mainNav.classList.contains("onclick")) {
		mainNav.classList.remove("onclick");
		othNav.style.display = "none";
		if(nav2)
			nav2.style.display = "flex";
		if (leftNav)
			leftNav.style.display = "flex";
	}
	else {
		mainNav.classList.add("onclick");
		othNav.style.display = "flex"
		if (nav2) nav2.style.display = "none";
		if (leftNav) leftNav.style.display = "none";
	}
})
window.addEventListener("resize", function (event) {
	mainNav.classList.remove("onclick");
	othNav.style.display = "none";
	if (nav2) nav2.style.display = "flex";
	if (leftNav) leftNav.style.display = "flex";
});