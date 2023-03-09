const inputPassword = document.getElementById("inputPassword")
const inputAge = document.getElementById("inputAge")
const inputEmail = document.getElementById("inputEmail")
const inputName = document.getElementById("inputName")
const inputUsername = document.getElementById("inputUsername")
const inputTerms = document.getElementById("termsCheckbox");
const inputVerifyPassword = document.getElementById("inputVerifyPassword");

const buttonSubmit = document.getElementById("signup");

const divTermsError = document.getElementById("CheckboxWarning")

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

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

buttonSubmit.addEventListener("click", async (event) => {
    // console.log('asu')   
    event.preventDefault()
    let errorStats = true
    const name = inputName.value
    if (name == "") {
        errorStats = false;
        inputName.value = "";
        inputName.placeholder = "Name Cannot Be Empty";
        inputName.classList.add('on-error-name')
    }
    const username = inputUsername.value
    if (username == "") {
        errorStats = false;
        //divErrorForName.innerHTML = "Username cannot be empty";
        inputUsername.value = ""
        inputUsername.placeholder = "Username Cannot be Empty";
        inputUsername.classList.add("on-error-usrnm");
        
    }
    const email = inputEmail.value
    if (!email.includes("@gmail.com")) {
        errorStats = false;
        inputEmail.value = ""
        inputEmail.placeholder = "Email Must Include @gmail.com";
        inputEmail.classList.add("on-error-em");
    }
    const password = inputPassword.value
    if (password.length > 10 || password.length < 8) {
        errorStats = false;
        inputPassword.value = ""
        inputPassword.placeholder =
            "Password Must be In 8-10 Characters Long";
        inputPassword.classList.add("on-error-pw");
    }
    const verPassword = inputVerifyPassword.value
    if (password.localeCompare(verPassword) != 0) {
        errorStats = false;
        inputVerifyPassword.value = "";
        inputVerifyPassword.placeholder =
            "Detected Password Does Not Match";
        inputVerifyPassword.classList.add("on-error-pw");
        
    }
    const number = inputAge.value
    if (number < 15) {
        errorStats = false;
        inputAge.value = ""
        inputAge.placeholder = "User Must Be 15 or Over";
        inputAge.classList.add("on-error-age");

    }
    const terms = inputTerms.checked
    if (terms == false) {

        divTermsError.innerHTML = "Agree First!";
    }
    else
    {
        divTermsError.innerHTML = "";
        
        }
    
    
    buttonSubmit.innerHTML = "...";
    await delay(1000);
    if (terms == true && errorStats == true)
    {
        buttonSubmit.innerHTML = "Success"
        buttonSubmit.style.backgroundColor = "green"

        await delay(1000);
        window.location.replace("../HomeScreen/main.html");
    }
    else
    {
        buttonSubmit.innerHTML = "Sign Up"
        
    }

})