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

document.getElementById("overlayMyramid").style.transition = ".5s"
async function on() {
	document.getElementById("overlayMyramid").style.opacity = "0";
	document.getElementById("overlayMyramid").style.display = "flex";
	await delay(500)
	
	document.getElementById("overlayMyramid").style.opacity = "1";
}

async function off() {
	document.getElementById("overlayMyramid").style.opacity = "0";
	await delay(500)
	document.getElementById("overlayMyramid").style.display = "none";
}

var imagesMyramid = new Array();
let x = 0
imagesMyramid[0] = "url('Images/myramid1.svg')";
imagesMyramid[1] = "url('Images/myramid2.svg')";
imagesMyramid[2] = "url('Images/myramid3.svg')";
imagesMyramid[3] = "url('Images/myramid4.svg')";
imagesMyramid[4] = "url('Images/myramid5.svg')";

var textMyramid = new Array();
textMyramid[0] = "[1] Cider Lake"
textMyramid[1] = "[2] Falcon Coast"
textMyramid[2] = "[3] Cape Oath"
textMyramid[3] = "[4] Dawn Winery"
textMyramid[4] = "[5] Springvale"

var descMyramid = new Array();
descMyramid[0] ="A natural freshwater lake. The lake's wide, crystalline appearance has remained unchanged for eons — so clear you can see the bottom, and cool and refreshing to drink. It is none other than these headwaters that brought Myramid's ciders and wines to fame and made the lake the symbol of Myramid that it is today.";
descMyramid[1] ="Stretching eastward from Windrise to the sea, Falcon coast — together with Cape Oath — shelters the sea from three sides, creating a bay that sits east of Myramid. Given the long coastline and shallow waters, citizens of Myramid often come here to enjoy a nice stroll. On occasion, you can see falcons soaring high above the blue waves that brush upon the white sand."
descMyramid[2] ="In the southeast corner of Myriad's surrounds lies a cape that borders with Galesong Hill. Legend has it two lovers made an oath to each other here and left behind a deeply touching story. To this day the area is still known to be popular amongst young lovebirds. Other than being a great vantage point for watching sunrises and sunsets, the drop in terrain makes it easy to see Windrise, it sits facing the sea."
descMyramid[3] ="Nestled in the land southwest of Myramid sits the winery that has passed down the legacy of Myramid's traditional wines and ciders for generations. The grapes grown here are used to produce a range of wines that are popular right across Teyvat. Every year's products are split, with a portion being sold locally within Myramid, the rest is sold off via the trade route that sits south of the city."
descMyramid[4] ="A sleepy little village to the south of Myramid, that sits facing the lake that surrounds the city. Most of the village's residents are hunters that provide fresh meat for all the big restaurants of Myramid. Springvale's rustic appeal attracts many tourists. If you are lucky in your travels, you may come across a restaurant that truly knows how to bring out the best qualities of Springvale's meat."


let mainImgMyramid = document.getElementById("main-BG-Myramid");
let mainTlMyramid = document.getElementById("main-Tl-Myramid");
let mainDescMyramid = document.getElementById("main-Desc-Myramid");
mainImgMyramid.style.transition = ".5s"
mainTlMyramid.style.transition = ".5s"
mainDescMyramid.style.transition = ".5s"

async function changeImage(imgToChange, ttlToChange, descToChange, imgs, ttls, descs) {
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
  changeImage(imgToChange, ttlToChange, descToChange, imgs, ttls, descs)
}

changeImage(mainImgMyramid, mainTlMyramid, mainDescMyramid, imagesMyramid, textMyramid, descMyramid)