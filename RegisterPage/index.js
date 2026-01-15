const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});




let passwordInput = document.getElementById("password");
let passwordInputVir = document.getElementById("password_vir");

function ToggleText(){
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function ToggleTextVir(){
    passwordInputVir.type = passwordInputVir.type == "password" ? "text" : "password";
}