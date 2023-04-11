let selector = document.getElementById("selector");
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

function resetPos() {
	selector.style.marginLeft = "84%";
	selector.style.width = "15%";
	
	activateClass();
}
function resetClass() {
	if (abts.classList.contains("is-activated") == true) {
		abts.classList.remove("is-activated");
		abts.classList.add("isnt-activated");
	}
}
function activateClass() {
	if (abts.classList.contains("isnt-activated") == true) {
		abts.classList.add("is-activated");
		abts.classList.remove("isnt-activated");
	}
}
resetPos();
home.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "8.5%";
	selector.style.width = "12%";
  resetClass();
});
home.addEventListener("mouseleave", resetPos);

char.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "30%";
	selector.style.width = "24%";
  resetClass();
});
char.addEventListener("mouseleave", resetPos);

maps.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "64.3%";
	selector.style.width = "10%";
  resetClass();
});
maps.addEventListener("mouseleave", resetPos);

abts.addEventListener("mouseenter", resetPos);
abts.addEventListener("mouseleave", resetPos);
