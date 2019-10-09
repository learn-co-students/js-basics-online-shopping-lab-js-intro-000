var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {}
 obj[item] = Math.floor(Math.random() * 100)
 cart.push(obj)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length == 1){
    var item = Object.keys(getCart()[0])[0]
    var price = getCart()[0][Object.keys(getCart()[0])[0]]
    console.log("In your cart, you have " + item + " at $" + price + ".")
  }
  else{
    var list = []
    for (var i = 0; i < cart.length; i++){
      var item = Object.keys(getCart()[i])[0]
      var price = getCart()[i][Object.keys(getCart()[i])[0]]
      list.push(" " +item + " at $" + price)
    }
    if(cart.length == 2){
      console.log("In your cart, you have" + list[0] + " and" + list[1] +".")
    }
    if(cart.length > 2){
      var speak = list
      speak[speak.length-1] = " and" + list[list.length-1]
      console.log("In your cart, you have" + speak + ".")
    }
  }
}

function total() {
  // write your code here
  var amount = 0
  for (var i = 0; i < cart.length; i++){
    var price = getCart()[i][Object.keys(getCart()[i])[0]]
    amount = amount + price
  }
  return amount
}

function removeFromCart(item) {
  // write your code here
  var del = false
  for(var i = 0; i < cart.length; i++){
    if(Object.keys(getCart()[i])[0] == item){
      del = true;
      cart = [...cart.slice(0, i), ...cart.slice(i+1)]
    }
  }
  if(del ==  true){
    return cart
  }
  else {
  console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber < 100000000){
    var amount = total()
    console.log("Your total cost is $" + amount + ", which will be charged to the card " + cardNumber + ".")
    cart = []
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
