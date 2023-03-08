const inputPassword = document.getElementById("inputPassword")
const inputAge = document.getElementById("inputAge")
const inputEmail = document.getElementById("inputEmail")
const inputName = document.getElementById("inputName")
const inputUsername = document.getElementById("inputUsername")
const buttonSubmit = document.getElementById("signup")
const divErrorForUsername = document.getElementById("divErrorForUsername")

const divErrorForName = document.getElementById("divErrorForName");
const divErrorForEmail = document.getElementById("divErrorForEmail");
const divErrorForPassword = document.getElementById("divErrorForPassword");

const incrBtn = document.getElementById("up-btn");
const decrBtn = document.getElementById("down-btn");

incrBtn.addEventListener("click", () => {
    if (inputAge.value == "" || inputAge.value < 14)
    {
        inputAge.value = "15"    
    }
    else
    {
        inputAge.value++;    
    }
})
decrBtn.addEventListener("click", () => {
	if (inputAge.value == "" || inputAge.value < 16) {
		inputAge.value = "15";
	} else {
		inputAge.value--;
	}
});

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    var errortext = ""
    const name = inputName.value
    if (name == "") {
        inputName.value = "";
        inputName.placeholder = "Name cannot be empty";
        inputName.classList.add('on-error-name')
	}
    const username = inputUsername.value
    if (username == "") {
        //divErrorForName.innerHTML = "Username cannot be empty";
        inputUsername.placeholder = "Username cannot be empty";
        inputUsername.classList.add("on-error-usrnm");
        
    }
    const email = inputEmail.value
    if (!email.includes("@gmail.com")) {
        inputEmail.placeholder = "Email must include @gmail.com";
        inputEmail.classList.add("on-error-em");
    }
    const password = inputPassword.value
    if (password.length > 10 || password.length < 8) {
        inputPassword.placeholder =
					"Password must be in 8-10 characters long";
        inputPassword.classList.add("on-error-pw");
    }
    const number = inputAge.value
    if (number < 15) {
        inputAge.value="    "
        inputAge.placeholder = "User must be 15 or over";
        inputAge.classList.add("on-error-age");

    }
})