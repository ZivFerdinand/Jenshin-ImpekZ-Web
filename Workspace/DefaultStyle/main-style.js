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

let downBtn = document.querySelector(".down-btn")
downBtn.addEventListener("mousedown", () => {
	downBtn.target = "_blank"
	downBtn.href =
		"https://genshin.hoyoverse.com/pc-launcher/?utm_source=SEA_google_ID_search_keywords_20201216&mhy_trace_channel=ga_channel&new=1&gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbhkj4gtz5mqoVzcbgNoCw_FtA6dKjpEffaDX2AvycTiTnnI27YJkikaAua3EALw_wcB#/";

})

let burger = document.getElementById("burger-menu-btn")
let mainNav = document.getElementById("main-nav");
let othNav = document.getElementById("other-nav");

// Navigation in Characters
let nav2 = document.getElementById("nav2");
// Navigation in Maps
let leftNav = document.getElementById("left-nav");

burger.addEventListener("mousedown", () => {
	
	if (mainNav.classList.contains("onclick")) {
		mainNav.classList.remove("onclick");
		othNav.style.display = "none";
		if(nav2)		nav2.style.display = "flex";
		if (leftNav)	leftNav.style.display = "flex";
	}
	else {
		mainNav.classList.add("onclick");
		othNav.style.display = "flex";
		if (nav2) 		nav2.style.display = "none";
		if (leftNav) 	leftNav.style.display = "none";
	}
})
window.addEventListener("resize", function (event) {
	mainNav.classList.remove("onclick");
	othNav.style.display = "none";
	if (nav2) 		nav2.style.display = "flex";
	if (leftNav) 	leftNav.style.display = "flex";
});


const menuBtn = document.querySelector(".burger-menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuBtn.classList.add("open");
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});