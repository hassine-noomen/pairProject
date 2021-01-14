

var createAccount = function(){
    var user = {};
    if(document.getElementById("firstName").value && document.getElementById("lastName").value && document.getElementById("email").value && document.getElementById("pass").value) {
        if (document.getElementById("pass").value !== document.getElementById("confirmPass").value) {
            document.getElementById("message").style.backgroundColor = "orange"
            document.getElementById("message").style.color = "black"
            document.getElementById("message").innerText="Check your password...!";
        } 
        else {
            user.firstName = document.getElementById("firstName").value;
            user.lastName = document.getElementById("lastName").value;
            user.email = document.getElementById("email").value;
            user.pass = document.getElementById("pass").value;
            document.getElementById("message").style.backgroundColor = "lightgreen"
            document.getElementById("message").style.color = "black"
            document.getElementById("message").innerText = "Thank you " + user.firstName + " " + user.lastName + ". Your account successfully created.";
            window.localStorage.setItem('E-mail', user.email);
            window.localStorage.setItem("Password", user.pass);
        }
    }
    else {
        document.getElementById("message").style.backgroundColor = "red"
        document.getElementById("message").style.color = "black"
        document.getElementById("message").innerText="Please fill up the form to proceed...!";
    }
}

