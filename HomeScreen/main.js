let upperMidFooter = document.getElementById("upper-mid-area");
let upperMidFooterChild = document.getElementById("upper-mid-area-content");
const mainBG = document.getElementById("mainMega");

let selector = document.getElementById("selector")
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

selector.style.transition = "all .5s"
function resetPos() {
	selector.style.marginLeft = "8.5%";
	selector.style.width = "12%";
}
resetPos()
home.addEventListener("mouseenter", resetPos)
char.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "30%";
	selector.style.width = "24%";
})
char.addEventListener("mouseleave", resetPos)

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

const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

mainBG.style.transition = "all 0.7s";
mainBG.addEventListener("mousemove", (e) => {
	let mouseX = e.clientX / windowWidth - 1;
	let mouseY = e.clientY / windowHeight;

	mainBG.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

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
