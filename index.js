var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
var price = 0
 price = Math.floor(Math.random()*101)
 cart[cart.length] = {[item]:price}
 console.log(`${item} has been added to your cart.`)
 return cart
}
  for(var item in cart){console.log(`In your cart, you have ${item} at ${cart[i][item]}.`)}

function viewCart() {
  var printline = ""
  for (let i=0;i < cart.length;i++){
    if (i > 0) {printline = printline + ", "}
    for (item in cart[i]){printline = printline + `${item} at $${cart[i][item]}`}
  }
if (cart.length === 0) {console.log('Your shopping cart is empty.')}
   else {console.log("In your cart, you have " + printline +".")}
}


function total() {
  var totalsum = 0
  for (let i=0;i < cart.length;i++){
    for (item in cart[i]){totalsum = totalsum+cart[i][item]}
  }
  return totalsum
}

function removeFromCart(item) {
var removed = false
  for (let i=0;i < cart.length;i++){if (isNaN(cart[i][item])){}
  else {delete cart[i][item];cart[i]="Nada";removed=true}
    }
    if (removed){} else {console.log('That item is not in your cart.')}
  return
}


function placeOrder(cardNumber) {
var t = total()
if (isNaN(cardNumber)) {console.log('We don\'t have a credit card on file for you to place your order.')}
else{console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);cart.length=0}  // write your code here
}
