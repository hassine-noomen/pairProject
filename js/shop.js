var createAccount = function(){
    var user = {};
    if(document.getElementById("firstName").value && document.getElementById("lastName").value && document.getElementById("email").value && document.getElementById("pass").value) {
        if (document.getElementById("pass").value !== document.getElementById("confirmPass").value) {
            document.getElementById("message").style.backgroundColor = "orange"
            document.getElementById("message").style.color = "red"
            document.getElementById("message").innerText="Check your password...!";
        } 
        else {
            user.firstName = document.getElementById("firstName").value;
            user.lastName = document.getElementById("lastName").value;
            user.email = document.getElementById("email").value;
            user.pass = document.getElementById("pass").value;
            localStorage.setItem('firstName',user.firstName);
            localStorage.setItem('lastName',user.lastName);
            localStorage.setItem('email',user.email);
            localStorage.setItem('pass',user.pass);
            //location.reload();
            document.getElementById("message").style.backgroundColor = "lightgreen"
            document.getElementById("message").style.color = "green"
            document.getElementById("message").innerHTML = "Thank you " + user.firstName + " " + user.lastName + ". Your account successfully created. <a href='html/login.html'>Log In</a>";
        }
    }
    else {
        document.getElementById("message").style.backgroundColor = "lightgrey"
        document.getElementById("message").style.color = "blue"
        document.getElementById("message").innerText="Please fill up the form to proceed...!";
    }
}

var loginAccount = function(){
    var user = {};
    if(document.getElementById("email").value && document.getElementById("pass").value) {
        if (document.getElementById("email").value !== localStorage.email || document.getElementById("pass").value !== localStorage.pass) {
            document.getElementById("message").style.backgroundColor = "orange"
            document.getElementById("message").style.color = "red"
            document.getElementById("message").innerText="Wrong email or password...!";
        } 
        else {
            
            location.replace("shop.html")
            
        }
    }
    else {
        document.getElementById("message").style.backgroundColor = "lightgrey"
        document.getElementById("message").style.color = "blue"
        document.getElementById("message").innerText="Please fill up with your email and password...!";
    }
}