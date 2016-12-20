var cart = [];
var t = 0;

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  let x = "In your cart, you have";
  if(cart.length == 0){
      console.log("Your shopping cart is empty.")
    }
  else{
    for(let i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i])[0]
      var price = cart[i][item]
      x = x + " " + item + " at $" + price + ",";
    }
  }
  x = x.slice(0, -1);
  x = x+"."
  console.log(x);
}


function setCart(newCart) {
  cart = newCart;
}

function total() {
  for (let i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    t = t + price;
  }
  return t;
}

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

function check(item){
  return
}

function removeFromCart(item){
  for (let i = 0; i < cart.length; i++){
    if (Object.keys(cart[i])== item){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log("Your total cost is $" + t + ", which will be charged to the card " + cardNumber +".");
  cart = [];
}

total();
placeOrder();
