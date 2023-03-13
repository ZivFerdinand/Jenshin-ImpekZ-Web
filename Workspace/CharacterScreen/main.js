
let selector = document.getElementById("selector");
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

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

char.addEventListener("mouseenter", resetPos);
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


const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function on(x) {
	document.getElementById(x).style.opacity = "0";
	document.getElementById(x).style.display = "flex";
	await delay(500)
	
	document.getElementById(x).style.opacity = "1";
}

async function off(x) {
	document.getElementById(x).style.opacity = "0";
	await delay(500)
	document.getElementById(x).style.display = "none";
}



let janeDOvrly = document.getElementById('janeDOvrly')
janeDOvrly.addEventListener("mousedown", () => on("ovlyJaneD"))
let miyaOvrly = document.getElementById('miyaOvrly')
miyaOvrly.addEventListener("mousedown", () => on("ovlyMiya"))
let auntyOvrly = document.getElementById('auntyOvrly')
auntyOvrly.addEventListener("mousedown", () => on("ovlyAunty"))
let shamsuiOvrly = document.getElementById('shamsuiOvrly')
shamsuiOvrly.addEventListener("mousedown", () => on("ovlyShamsui"))
let zivenOvrly = document.getElementById('zivenOvrly')
zivenOvrly.addEventListener("mousedown", () => on("ovlyZiven"))

let roxyOvrly = document.getElementById('roxyOvrly')
roxyOvrly.addEventListener("mousedown", () => on("ovlyRoxy"))
let nancyOvrly = document.getElementById('nancyOvrly')
nancyOvrly.addEventListener("mousedown", () => on("ovlyNancy"))
let chichiOvrly = document.getElementById('chichiOvrly')
chichiOvrly.addEventListener("mousedown", () => on("ovlyChichi"))
let hayaOvrly = document.getElementById('hayaOvrly')
hayaOvrly.addEventListener("mousedown", () => on("ovlyHaya"))
let xingOvrly = document.getElementById('xingOvrly')
xingOvrly.addEventListener("mousedown", () => on("ovlyXing"))

let niniOvrly = document.getElementById('niniOvrly')
niniOvrly.addEventListener("mousedown", () => on("ovlyNini"))
let sayakaOvrly = document.getElementById('sayakaOvrly')
sayakaOvrly.addEventListener("mousedown", () => on("ovlySayaka"))
let kaguyaOvrly = document.getElementById('kaguyaOvrly')
kaguyaOvrly.addEventListener("mousedown", () => on("ovlyKaguya"))
let annaOvrly = document.getElementById('annaOvrly')
annaOvrly.addEventListener("mousedown", () => on("ovlyAnna"))
let toumaOvrly = document.getElementById('toumaOvrly')
toumaOvrly.addEventListener("mousedown", () => on("ovlyTouma"))

let nilaOvrly = document.getElementById('nilaOvrly')
nilaOvrly.addEventListener("mousedown", () => on("ovlyNila"))
let luluOvrly = document.getElementById('luluOvrly')
luluOvrly.addEventListener("mousedown", () => on("ovlyLulu"))
let luckyOvrly = document.getElementById('luckyOvrly')
luckyOvrly.addEventListener("mousedown", () => on("ovlyLucky"))
let venoraOvrly = document.getElementById('venoraOvrly')
venoraOvrly.addEventListener("mousedown", () => on("ovlyVenora"))
let cleoOvrly = document.getElementById('cleoOvrly')
cleoOvrly.addEventListener("mousedown", () => on("ovlyCleo"))