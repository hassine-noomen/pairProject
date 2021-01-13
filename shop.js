const login = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirmPass");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

function checkPass() {
    if (document.getElementById("pass").value !== document.getElementById("confirmPass").value) {
        message.value = "Check your password"
    }

    console.log(pass.value);
    console.log(confirmPass.value);
}
