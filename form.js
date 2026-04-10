const SignForm = document.querySelector("#sign-form");


const messageArea = document.querySelector("#message-area");

//preventing reloading
SignFormignUpForm.addEventListener("submit", function(event) { 
    event.preventDefault(); 
})

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
//const passwordInput = document.getElementById("password");

const name = nameInput.value.trim();
const email = emailInput.value.trim();

if (name === "") {
    messageArea.textContent = "Please enter your name.";
    messageArea.style.color = "red";
} else if (email === "") {
    messageArea.textContent = "Please enter your email.";
    messageArea.style.color = "red";
} else {
    messageArea.textContent = "Thank you for signing up!" + name + "!";
    messageArea.style.color = "green";
}