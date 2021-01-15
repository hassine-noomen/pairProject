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
var addItem = function() {
    var item = {};
    
    localStorage.setItem("cart",itemList);
    
    item.description = document.getElementById("description").innerText;
    item.price = parseFloat(document.getElementById("price").innerText.slice(4));
    
    itemList.push(item);

    var total = 0;
    for(i=0;i<itemList.length;i++){
        total+=itemList[i].price;
    }
    total=total.toFixed(3);

    
    // var cartItemsContainer = document.getElementById("shop").getElementsByClassName("items");
    // //var items = cartItemsContainer.getElementsbyClassName("items");
    // for(i=0;i<cartItemsContainer.length;i++){
    //     item = cartItemsContainer[i].innerText;
    //     console.log(item)
    // }

    // console.log(cartItemsContainer);
    // //console.log(items);



    $("#cartList").append("<li>"+item.description + " - TND " + item.price+"</li>");
    
    document.getElementById("total").innerHTML="<strong>Total: TND </strong>"+total;
    $("#total").append('<br><br><button id="pay" type="button" onclick="">Pay now</button>');

    

}