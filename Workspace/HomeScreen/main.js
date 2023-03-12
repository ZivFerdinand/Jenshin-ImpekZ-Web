const mainBG = document.getElementById("mainMega");

let selector = document.getElementById("selector")
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
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


var imagesHero = new Array();
let x = 0
imagesHero[0] = "Images/ghosties.svg"
imagesHero[1] = "Images/ghosties_2.svg";
imagesHero[2] = "Images/ghosties_3.svg";

imagesHero[3] = "Images/weap.svg"
imagesHero[4] = "Images/weap_2.svg";
imagesHero[5] = "Images/weap_3.svg";

var textTitleHero = new Array();
textTitleHero[0] = "[1] Hu Tao"
textTitleHero[1] = "[2] Yelan";
textTitleHero[2] = "[3] Xiao";

textTitleHero[3] = "[1] Musou no Hitotachi";
textTitleHero[4] = "[2] Prototype Rancour";
textTitleHero[5] = "[3] Royal Longsword";

var textDescHero = new Array();
textDescHero[0] = "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang. Aside from this, she is also a talented poet whose many \"masterpieces\" have passed around Eexor's populace by word of mouth."
textDescHero[1] = "A mysterious person who claims to work for the Ministry of Civil Affairs, but is a \"non-entity\" on the Ministry of Civil Affairs' list.Elusive, enigmatic, erratic - all of these are Yelan's hallmarks."
textDescHero[2] = "One of the mighty and illuminated adepti guarding Liyue, also heralded as the \"Vigilant Yaksha. \"Despite his youthful appearance, tales of his exploits have been documented for millennia. He is especially fond of Wangshu Inn's Almond Tofu. This is because it tastes just like the sweet dreams he used to devour."

textDescHero[3] =
	"The profoundest of the profound is the Musou no Hitotachi. A sword art without parallel in all the world.";
textDescHero[4] =
	"An ancient longsword discovered in the Blackcliff Forge that cuts through rocks like a hot knife through butter.";
textDescHero[5] =
	"An old longsword that belonged to the erstwhile rulers of Mondstadt. Exquisitely crafted, the carvings and embellishments testify to the stature of its owner.";

var starHero = new Array();
starHero[0] = 5
starHero[1] = 4
starHero[2] = 5

starHero[3] = 5
starHero[4] = 4;
starHero[5] = 4;

let isHeroCurrent = true
let iImage = document.getElementById("ilustration-image");
let iTitle = document.getElementById("ilustration-ttl");
let iDesc = document.getElementById("ilustration-desc-full");
let iStar = document.getElementById("ilustration-star");
let undrln = document.getElementById("undrln");
iImage.style.transition = ".5s"
iTitle.style.transition = ".5s";
iDesc.style.transition = ".5s";
iStar.style.transition = ".5s";
undrln.style.transition = ".5s";

async function changeImage(imgToChange, ttlToChange, descToChange, strToChange, imgs, ttls, descs, strs, isHero) {
	imgToChange.style.opacity = "0"
	ttlToChange.style.opacity = "0";
	descToChange.style.opacity = "0";
	strToChange.style.opacity = "0";
	undrln.style.opacity = "0"
	if(isHeroCurrent == isHero)
  await delay(500)
  
	imgToChange.style.background = imgs[x];
	imgToChange.src = imgs[x];
	ttlToChange.innerHTML = ttls[x];
	descToChange.innerHTML = descs[x];
	let tempStars = ""
	for (let i = 0; i < strs[x]; i++)
	{
		tempStars += "<img src=\"Images/star_.svg\">";
		}
	strToChange.innerHTML = tempStars;
	if (isHeroCurrent == isHero) await delay(500);
  
	imgToChange.style.opacity = "1";
	ttlToChange.style.opacity = "1";
	descToChange.style.opacity = "1";
	strToChange.style.opacity = "1";
	undrln.style.opacity = "1";
	if (isHeroCurrent)
	{
		x++;
		if (x >= 3) {
			x = 0;
		} 
	}
	else
	{
		x++;
		if (x < 3 || x > 5) {
			x = 3;
		}
	}
	
  
	if (isHeroCurrent === isHero) { await delay(3000); }
  changeImage(imgToChange, ttlToChange, descToChange, strToChange, imgs, ttls, descs, strs, isHeroCurrent)
}

changeImage(iImage, iTitle, iDesc, iStar, imagesHero, textTitleHero, textDescHero, starHero, isHeroCurrent)

let heroSelect = document.getElementById("hero-select")
let weapSelect = document.getElementById("weap-select")

heroSelect.addEventListener("mousedown", () => {
	weapSelect.classList.remove("ttl-active")
	heroSelect.classList.add("ttl-active");
	isHeroCurrent = true;
x = 0;
})
weapSelect.addEventListener("mousedown", () => {
	heroSelect.classList.remove("ttl-active");
	weapSelect.classList.add("ttl-active")
	isHeroCurrent = false
	x=3
});