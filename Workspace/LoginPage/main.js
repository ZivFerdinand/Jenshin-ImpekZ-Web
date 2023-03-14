
const inputPassword = document.getElementById("inputPassword");
const inputAge = document.getElementById("inputAge");
const inputEmail = document.getElementById("inputEmail");
const inputName = document.getElementById("inputName");
const inputUsername = document.getElementById("inputUsername");
const inputTerms = document.getElementById("termsCheckbox");
const inputVerifyPassword = document.getElementById("inputVerifyPassword");

const buttonSubmit = document.getElementById("signup");

const divTermsError = document.getElementById("termsCheckboxLabel");

const incrBtn = document.getElementById("up-btn");
const decrBtn = document.getElementById("down-btn");

let selector = document.getElementById("selector");
let home = document.getElementById("home");
let char = document.getElementById("char");
let maps = document.getElementById("maps");
let abts = document.getElementById("abts");

function resetPos() {
	selector.style.marginLeft = "0%";
	selector.style.width = "0%";
}
resetPos();
home.addEventListener("mouseenter", () => {
	selector.style.marginLeft = "8.5%";
	selector.style.width = "12%";
});
home.addEventListener("mouseleave", resetPos);

char.addEventListener("mouseenter", () => {
	console.log("XX");
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

incrBtn.addEventListener("click", () => {
	if (inputAge.value == "" || inputAge.value < 14) {
		inputAge.value = "15";
	} else {
		inputAge.value++;
	}
});
decrBtn.addEventListener("click", () => {
	if (inputAge.value == "" || inputAge.value < 16) {
		inputAge.value = "15";
	} else {
		inputAge.value--;
	}
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

buttonSubmit.addEventListener("click", async (event) => {
	// console.log('asu')
	event.preventDefault();
	let errorStats = true;
	const name = inputName.value;
	if (name == "") {
		errorStats = false;
		inputName.value = "";
		inputName.placeholder = "Name Cannot Be Empty";
		inputName.classList.add("on-error-name");
	}
	const username = inputUsername.value;
	if (username == "") {
		errorStats = false;
		//divErrorForName.innerHTML = "Username cannot be empty";
		inputUsername.value = "";
		inputUsername.placeholder = "Username Cannot be Empty";
		inputUsername.classList.add("on-error-usrnm");
	}
	const email = inputEmail.value;
	if (!email.includes("@gmail.com")) {
		errorStats = false;
		inputEmail.value = "";
		inputEmail.placeholder = "Email Must Include @gmail.com";
		inputEmail.classList.add("on-error-em");
	}
	const password = inputPassword.value;
	if (password.length > 10 || password.length < 8) {
		errorStats = false;
		inputPassword.value = "";
		inputPassword.placeholder = "Password Must be In 8-10 Characters Long";
		inputPassword.classList.add("on-error-pw");
	}
	const verPassword = inputVerifyPassword.value;
	if (password.localeCompare(verPassword) != 0) {
		errorStats = false;
		inputVerifyPassword.value = "";
		inputVerifyPassword.placeholder = "Detected Password Does Not Match";
		inputVerifyPassword.classList.add("on-error-pw");
	}
	const number = inputAge.value;
	if (number < 15) {
		errorStats = false;
		inputAge.value = "";
		inputAge.placeholder = "User Must Be 15 or Over";
		inputAge.classList.add("on-error-age");
	}
	const terms = inputTerms.checked;
	if (terms == false) {
		divTermsError.style.color = "red";
	} else {
		divTermsError.style.color = "white";
	}

	buttonSubmit.innerHTML = "...";
	await delay(1000);
	if (terms == true && errorStats == true) {
		buttonSubmit.innerHTML = "Success";
		buttonSubmit.style.backgroundColor = "green";
        
        userDatas.push(new User(username, password))
        console.log(userDatas)
		await delay(1000);
		window.location.replace("../HomeScreen/main.html");
	} else {
		buttonSubmit.innerHTML = "Sign Up";
	}
});
