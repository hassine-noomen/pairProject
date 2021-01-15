//Creating new account
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
            document.getElementById("message").style.backgroundColor = "lightgreen"
            document.getElementById("message").style.color = "green"
            document.getElementById("message").innerHTML = "Thank you " + user.firstName + " " + user.lastName + ". Your account successfully created. <a href='html/login.html'>Login now...</a>";
        }
    }
    else {
        document.getElementById("message").style.backgroundColor = "lightgrey"
        document.getElementById("message").style.color = "blue"
        document.getElementById("message").innerText="Please fill up the form to proceed...!";
    }
}

//Logging in existing account
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

//Say hello to the logged in user
var greeting = function() {
    document.getElementById("user").innerHTML="<strong>Hello " + localStorage.firstName+" "+localStorage.lastName+"</strong>";
    document.getElementById("cart").innerHTML="Your order is here: <br><ol id='cartList'></ol>";
}

//Adding items to cart
var itemList = []

var addItem = function(itemName) {
    var item = {};
    
    localStorage.setItem("cart",itemList);
    
    item.description = document.getElementById(itemName).children[1].innerText;
    item.price = parseFloat(document.getElementById(itemName).children[2].innerText.slice(4));

    itemList.push(item);
    
    var total = 0;
    for(i=0;i<itemList.length;i++){
        total+=itemList[i].price;
    }
    total=total.toFixed(3);

    $("#cartList").append("<li><div id='cartlist'>"+item.description + "</div> - <div id='cartlist'>TND " + item.price+"</div><button id='btn_remove' type='button' onclick='removeItem()'>Remove</button></li>");
    
    document.getElementById("total").innerHTML="<strong>Total: TND </strong>"+total;

    $("#total").append('<br><br><button id="pay" type="button" onclick="guessFunction()">Pay now</button>');

}

function guessFunction(){
    var TT = document.getElementById('total').innerText.slice(11);
    var tt = parseFloat(TT)
    var y = Math.floor(Math.random() * 5 + 1); 
    var number = prompt('Hello dear customer, choose a number between 1 and 5, if you guess the right number you will get a 80% discount', 'choose a number between 1 and 5');
    if(y === number){
        alert('Congratulation, you guess the number! the TOTAL now is '+tt*0.8+' TND')
    }
    else{
        alert('Nope! That wasnt it! Maybe next time, the TOTAL is '+tt+' TND')
    }
}
    
   

//Removing item from cart
var removeItem = function(){
    var list = document.getElementById("cartList");
    list.removeChild(list.childNodes[0]);

}