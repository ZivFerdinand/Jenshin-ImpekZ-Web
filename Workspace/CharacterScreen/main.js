
let selector = document.getElementById("selector");
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

selector.style.transition = "all .5s";
function resetPos() {
	selector.style.marginLeft = "30%";
	selector.style.width = "24%";
}
resetPos()
home.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "8.5%";
	selector.style.width = "12%";
});
home.addEventListener("mouseleave", resetPos);

char.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "30%";
	selector.style.width = "24%";
});
char.addEventListener("mouseleave", resetPos);

maps.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "64.3%";
	selector.style.width = "10%";
});
maps.addEventListener("mouseleave", resetPos);

abts.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "84%";
	selector.style.width = "15%";
});
abts.addEventListener("mouseleave", resetPos);


function on() {
	document.getElementById("ovlyJaneD").style.display = "flex";
}

function off() {
	document.getElementById("ovlyJaneD").style.display = "none";
}