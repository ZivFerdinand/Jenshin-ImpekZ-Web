const mainBG = document.getElementById("mainMega");

let selector = document.getElementById("selector")
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

function resetPos() {
	selector.style.marginLeft = "8.5%";
	selector.style.width = "12%";
}
resetPos()
home.addEventListener("mouseenter", resetPos)
home.addEventListener("mouseleave", resetPos)

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

