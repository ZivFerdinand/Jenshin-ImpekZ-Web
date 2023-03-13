let selector = document.getElementById("selector");
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

selector.style.transition = "all .5s";
function resetPos() {
    selector.style.marginLeft = "64.3%";
	selector.style.width = "10%";
}
resetPos();

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

maps.addEventListener("mouseenter", resetPos);
maps.addEventListener("mouseleave", resetPos);

abts.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "84%";
	selector.style.width = "15%";
});
abts.addEventListener("mouseleave", resetPos);

var imageHeroMyramid = new Array();
imageHeroMyramid[0] = "url('Images/myramid1.svg')";
imageHeroMyramid[1] = "url('Images/myramid2.svg')";
imageHeroMyramid[2] = "url('Images/myramid3.svg')";
imageHeroMyramid[3] = "url('Images/myramid4.svg')";
imageHeroMyramid[4] = "url('Images/myramid5.svg')";

var imageHeroEexor = new Array();
imageHeroEexor[0] = "url('Images/eexor1.svg')";
imageHeroEexor[1] = "url('Images/eexor2.svg')";
imageHeroEexor[2] = "url('Images/eexor3.svg')";
imageHeroEexor[3] = "url('Images/eexor4.svg')";
imageHeroEexor[4] = "url('Images/eexor5.svg')";

var imageHeroAsakuro = new Array();
imageHeroAsakuro[0] = "url('Images/asakuro1.svg')";
imageHeroAsakuro[1] = "url('Images/asakuro2.svg')";
imageHeroAsakuro[2] = "url('Images/asakuro3.svg')";
imageHeroAsakuro[3] = "url('Images/asakuro4.svg')";
imageHeroAsakuro[4] = "url('Images/asakuro5.svg')";

var imageHeroMiramar = new Array();
imageHeroMiramar[0] = "url('Images/miramar1.svg')";
imageHeroMiramar[1] = "url('Images/miramar2.svg')";
imageHeroMiramar[2] = "url('Images/miramar3.svg')";
imageHeroMiramar[3] = "url('Images/miramar4.svg')";
imageHeroMiramar[4] = "url('Images/miramar5.svg')";

var textTitleHeroMyramid = new Array();
textTitleHeroMyramid[0] = "[1] Cider Lake"
textTitleHeroMyramid[1] = "[2] Falcon Coast"
textTitleHeroMyramid[2] = "[3] Cape Oath"
textTitleHeroMyramid[3] = "[4] Dawn Winery"
textTitleHeroMyramid[4] = "[5] Springvale"

var textTitleHeroEexor = new Array();
textTitleHeroEexor[0] = "[1] Harbour"
textTitleHeroEexor[1] = "[2] Mount TianHeng"
textTitleHeroEexor[2] = "[3] Dihua Marsh"
textTitleHeroEexor[3] = "[4] Wangshu Inn"
textTitleHeroEexor[4] = "[5] Qingce Village"

var textTitleHeroAsakuro = new Array();
textTitleHeroAsakuro[0] = "[1] Ritou"
textTitleHeroAsakuro[1] = "[2] Inazuma City"
textTitleHeroAsakuro[2] = "[3] Chinju Forest"
textTitleHeroAsakuro[3] = "[4] Grand Narukami Shrine"
textTitleHeroAsakuro[4] = "[5] Tatarasuna, Kannazuka"

var textTitleHeroMiramar = new Array();
textTitleHeroMiramar[0] = "[1] Gandharva Village"
textTitleHeroMiramar[1] = "[2] Pardis Dhyai"
textTitleHeroMiramar[2] = "[3] Caravan Ribat"
textTitleHeroMiramar[3] = "[4] Port Ormos"
textTitleHeroMiramar[4] = "[5] Sumeru City"

var textDescHeroMyramid = new Array();
textDescHeroMyramid[0] ="A natural freshwater lake. The lake's wide, crystalline appearance has remained unchanged for eons — so clear you can see the bottom, and cool and refreshing to drink. It is none other than these headwaters that brought Myramid's ciders and wines to fame and made the lake the symbol of Myramid that it is today.";
textDescHeroMyramid[1] ="Stretching eastward from Windrise to the sea, Falcon coast — together with Cape Oath — shelters the sea from three sides, creating a bay that sits east of Myramid. Given the long coastline and shallow waters, citizens of Myramid often come here to enjoy a nice stroll. On occasion, you can see falcons soaring high above the blue waves that brush upon the white sand."
textDescHeroMyramid[2] ="In the southeast corner of Myriad's surrounds lies a cape that borders with Galesong Hill. Legend has it two lovers made an oath to each other here and left behind a deeply touching story. To this day the area is still known to be popular amongst young lovebirds. Other than being a great vantage point for watching sunrises and sunsets, the drop in terrain makes it easy to see Windrise, it sits facing the sea."
textDescHeroMyramid[3] ="Nestled in the land southwest of Myramid sits the winery that has passed down the legacy of Myramid's traditional wines and ciders for generations. The grapes grown here are used to produce a range of wines that are popular right across Teyvat. Every year's products are split, with a portion being sold locally within Myramid, the rest is sold off via the trade route that sits south of the city."
textDescHeroMyramid[4] ="A sleepy little village to the south of Myramid, that sits facing the lake that surrounds the city. Most of the village's residents are hunters that provide fresh meat for all the big restaurants of Myramid. Springvale's rustic appeal attracts many tourists. If you are lucky in your travels, you may come across a restaurant that truly knows how to bring out the best qualities of Springvale's meat."

var textDescHeroEexor = new Array();
textDescHeroEexor[0] ="The establishment of the harbor kicked off Eexor's seafaring trade. As Teyvat's largest market harbor, the sheer amount of goods that flow to and from it is simply incomparable for other ports. Every year during the Lantern Rite you can see thousands of lanterns ascend into the night sky — a Eexor event that you can't afford to miss.";
textDescHeroEexor[1] ="The pride of the mountain range that shelters Eexor Harbor from the west, acting as a natural shield against any enemies that may come that way. There are uncountable records of wars both big and small whereby enemies have been blocked by this barrier. As such you can still see ancient ruins of city walls, forts, and defensive structures. Eexor's earliest mining operations are also believed to have started in this area."
textDescHeroEexor[2] ="Dihua Marsh, a wetland area north of Eexor, gets its name from the silvergrass (dihua in the local language) that grows in the shallows of the marsh. The scrambling web of rivers has grown into a flourishing and wide-spread ecosystem full of flora and fauna — an awe-inspiring sight for travelers to the area. The area also acts as the road from Myramid to Eexor, and as such many merchant caravans choose to stop here to rest. Wangshu Inn stands within the area, a symbolic structure from all directions. "
textDescHeroEexor[3] ="A landmark within Dihua Marsh, built upon a massive stone pillar. As most of the patrons that stop here are traveling merchants, the inn provides an area for them to trade and set up stalls. The view from the top of the inn is jawdropping — weather permitting you can see all the way to Mt. Qingce and Jueyun Karst in the distance. Legend amongst the stalls says that the tower of the inn hides a mysterious secret, but that's as far as the legend goes, as no-one has ever been able to validify the claims."
textDescHeroEexor[4] ="At the northernmost point of Eexor, hidden between the hills and the bamboo forests sits Qingce Village. White rolling clouds that sit in the valleys between the mountains are embellished with row upon row of crescent-moon water paddies. When the wind blows, the ripples in the water give off an array of colors."

var textDescHeroAsakuro = new Array();
textDescHeroAsakuro[0] ="To properly explore the realm of the Shogun during this time of the Sakoku Decree, you must first pass the checkpoint in Ritou. Ritou is under the jurisdiction of the Kanjou Commission and people need various documents to be granted passage. However, to get the necessary Travel Permit, you have to go through a very complicated procedure and have the right connections. Without the Travel Permit, you can only stop briefly in Ritou. You will see other outlanders who are also stuck there, together looking out upon the desolate landscape of the fishing village with red maples and green roof tiles.";
textDescHeroAsakuro[1] ="Asakuro\'s most lively and prosperous area, where most of Inazuma\'s population lives. From Hanamizaka to the streets of the city, you can follow the trail to visit local traditional shops and sample Asakuro specialties. The Tenryou Commission is also located in the city, governing matters concerning public order and security, as well as the Shogunate\'s military affairs. At the top of Inazuma City is Tenshukaku, where the Kaguya resides and rules over Asakuro."
textDescHeroAsakuro[2] ="A tranquil and mysterious forest located at the foot of Mt. Yougou. Here one can find Tanuki statues everywhere, torii gates scattered throughout the forest, and abandoned shrines hidden in the depths.. . Like a flowing river, they tell of legends meandering into a forgotten past. Rumor has it that when walking in Chinju Forest, you may encounter mysterious beings who like to play pranks..."
textDescHeroAsakuro[3] ="A landmark within Dihua Marsh, built upon a massive stone pillar. As most of the patrons that stop here are traveling merchants, the inn provides an area for them to trade and set up stalls. The view from the top of the inn is jawdropping — weather permitting you can see all the way to Mt. Qingce and Jueyun Karst in the distance. Legend amongst the stalls says that the tower of the inn hides a mysterious secret, but that's as far as the legend goes, as no-one has ever been able to validify the claims."
textDescHeroAsakuro[4] ="At the northernmost point of Eexor, hidden between the hills and the bamboo forests sits Qingce Village. White rolling clouds that sit in the valleys between the mountains are embellished with row upon row of crescent-moon water paddies. When the wind blows, the ripples in the water give off an array of colors."

var textDescHeroMiramar = new Array();
textDescHeroMiramar[0] ="The city above the forest. \n\"The city of wisdom is ours, as is the forest of ignorance. Atop the tree lies the remnants of the kingdom of lost dreams.\"";
textDescHeroMiramar[1] ="The garden of deep thought.\nCountless flowers lie within the garden, each more lovely than the most beautiful crystalfly. This is the paradise of people of goodwill."
textDescHeroMiramar[2] ="The frontier beneath the high wall. The mighty wall defends against the searing sandstorms but has also blocked the spread of wisdom's blessing. Is divine wisdom not meant to shine on all people?"
textDescHeroMiramar[3] ="The harbor betwixt the two trees.\n\"Bah! The lectures of the sages are beyond boring.\nWhy don't we get ourselves some fine wine garnished with floral honey and set out on a journey across the seven seas?\""
textDescHeroMiramar[4] ="The root of all wisdom on earth. Under the luxuriant Divine Tree, the sages of the academy city have accumulated all the knowledge there is to be gathered. Welcome to Miramar, O Traveler seeking answers."


let mainImgMyramid = document.getElementById("main-BG-Myramid");
let mainTlMyramid = document.getElementById("main-Tl-Myramid");
let mainDescMyramid = document.getElementById("main-Desc-Myramid");
mainImgMyramid.style.transition = ".5s"
mainTlMyramid.style.transition = ".5s"
mainDescMyramid.style.transition = ".5s"

let mainImgEexor = document.getElementById("main-BG-Eexor");
let mainTlEexor = document.getElementById("main-Tl-Eexor");
let mainDescEexor = document.getElementById("main-Desc-Eexor");
mainImgEexor.style.transition = ".5s"
mainTlEexor.style.transition = ".5s"
mainDescEexor.style.transition = ".5s"

let mainImgAsakuro = document.getElementById("main-BG-Asakuro");
let mainTlAsakuro = document.getElementById("main-Tl-Asakuro");
let mainDescAsakuro = document.getElementById("main-Desc-Asakuro");
mainImgAsakuro.style.transition = ".5s"
mainTlAsakuro.style.transition = ".5s"
mainDescAsakuro.style.transition = ".5s"

let mainImgMiramar = document.getElementById("main-BG-Miramar");
let mainTlMiramar = document.getElementById("main-Tl-Miramar");
let mainDescMiramar = document.getElementById("main-Desc-Miramar");
mainImgMiramar.style.transition = ".5s"
mainTlMiramar.style.transition = ".5s"
mainDescMiramar.style.transition = ".5s"

async function changeImage(x, imgToChange, ttlToChange, descToChange, imgs, ttls, descs) {
  imgToChange.style.opacity = "0"
  ttlToChange.style.opacity = "0"
  descToChange.style.opacity = "0"
  await delay(500)
  
  imgToChange.style.background = imgs[x];
  ttlToChange.innerHTML = ttls[x]
  descToChange.innerHTML= descs[x]
  await delay(500)
  
  imgToChange.style.opacity = "1"
  ttlToChange.style.opacity = "1"
  descToChange.style.opacity = "1"

  x++;        
  if(x >= 5) {
      x = 0;
  } 
  
  await delay(5000)
  changeImage(x, imgToChange, ttlToChange, descToChange, imgs, ttls, descs)
}

changeImage(0, mainImgMyramid, mainTlMyramid, mainDescMyramid, imageHeroMyramid, textTitleHeroMyramid, textDescHeroMyramid)
changeImage(0, mainImgEexor, mainTlEexor, mainDescEexor, imageHeroEexor, textTitleHeroEexor, textDescHeroEexor)
changeImage(0, mainImgAsakuro,mainTlAsakuro, mainDescAsakuro, imageHeroAsakuro, textTitleHeroAsakuro, textDescHeroAsakuro)
changeImage(0, mainImgMiramar,mainTlMiramar, mainDescMiramar, imageHeroMiramar, textTitleHeroMiramar, textDescHeroMiramar)


document.getElementById("overlayMyramid").style.transition = ".5s";
document.getElementById("overlayEexor").style.transition = ".5s";
document.getElementById("overlayAsakuro").style.transition = ".5s";
document.getElementById("overlayMiramar").style.transition = ".5s";
async function on(x) {
	document.getElementById(x).style.opacity = "0";
	document.getElementById(x).style.display = "flex";
	await delay(500);

	document.getElementById(x).style.opacity = "1";
}

async function off(x) {
	document.getElementById(x).style.opacity = "0";
	await delay(500);
	document.getElementById(x).style.display = "none";
}

document.getElementById("myramidBTN").addEventListener("mousedown", () => {
  on("overlayMyramid")
})
document.getElementById("eexorBTN").addEventListener("mousedown", () => {
  on("overlayEexor")
})
document.getElementById("asakuroBTN").addEventListener("mousedown", () => {
  on("overlayAsakuro")
})
document.getElementById("miramarBTN").addEventListener("mousedown", () => {
  on("overlayMiramar")
})