window.onload= function(){

}


var checkPass = function(){
    
}

var createAccount = function(){
    var user = {};
    if (document.getElementById("pass").value !== document.getElementById("confirmPass").value) {
        document.getElementById("message").innerText="Check your password";
    } 
    else {
        user.login = document.getElementById("login").value;
        user.email = document.getElementById("email").value;
        user.pass = document.getElementById("pass").value;
        document.getElementById("message").innerText="Thank you "+user.login+"Your account successfully created";
    }
}