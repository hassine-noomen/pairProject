window.onload= function(){


    var checkPass = function(){
        if (document.getElementById("pass").value !== document.getElementById("confirmPass").value) {
        console.log(document.getElementById("pass").value);
        console.log(document.getElementById("confirmPass").value);
        document.getElementById("message").value = "Check your password";
        }
    }


}