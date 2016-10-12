var cart = {}

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
function getCart() { return cart}

function addToCart(item){
  var itemPrice =  Math.floor()
  var itemNPrice = {item:itemPrice}
  cart.push(itemNPrice)
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var s = {socks:Math.floor()}
  var p = {puppy:Math.floor()}
  var i = {iPhone:Math.floor()}
  cart.push(s)
  cart.push(p)
  cart.push(i)

for ( var i = 0 ; i < cart.length ; i++ ){
console.log (`In your cart, you have socks at $${cart.socks}, puppy at $${cart.puppy}, iPhone at $${cart.iPhone}.`)

} console.log ('Your shopping cart is empty.')
}


function removeFromCart(v){
  var toFalse = false
  for ( var i = 0 ; i < cart.length + 1 ; i++)
  {
if (cart[i].hasOwnProperty(v)){
 toFalse = true
cart.splice(i,i+1)
}
}
 if (toFalse === false) {
  console.log("That item is not in your cart.")
}
}

function placeOrder(card){

for ( let i=0; i < cart.length ; i++){
  if(cart.hasOwnProperty(card)){
    console.log(`Your total cost is ${total()}, which will be charged to the ${card}`)
  }
  else if (cart.hasOwnProperty(card))
  cart.splice(i,i+1)
  else {
    console.log (" We don\''t have a credit card on file for you to place your order.")
  }
}

}
