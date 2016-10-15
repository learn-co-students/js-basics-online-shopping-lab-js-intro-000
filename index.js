var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
    return t
}
function getCart() { return cart }

function addToCart(item){

  var flatPrice = Math.floor(Math.random()*100)
  var itemNPrice = {[item]:flatPrice}
  cart.push(itemNPrice)
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
for ( var i = 0 ; i < cart.length; i++ ){

if (i < cart.length){
console.log(`In your cart, you have socks at $${cart[0].socks}, puppy at $${cart[1].puppy}, iPhone at $${cart[2].iPhone}.`)
}
} console.log ('Your shopping cart is empty.')
}

function removeFromCart(v){
  var toFalse = false
  for ( var i = 0 ; i < cart.length  ; i++)
  {
if (cart[i].hasOwnProperty(v)){
cart.splice(i,i+1)
toFalse = true
return cart
}
}
 if (toFalse === false ) {
  console.log("That item is not in your cart.")
}
}

function placeOrder (c){
 var  i = 0
if (i < cart.length){
  console.log(`Your total cost is $${total()}, which will be charged to the card ${c}.`)
cart.splice(i,i+1)
}
  console.log("We don\'t have a credit card on file for you to place your order.")
}
