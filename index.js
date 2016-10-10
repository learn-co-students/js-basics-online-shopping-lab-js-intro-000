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
  var itemPrice =  Math.floor(Math.random()*100)
  var itemNPrice = {item:itemPrice}
  cart.push(itemNPrice)
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var s = {socks: 'Math.random' }
  var p = {puppy :'Math.random'}
  var i = {iPhone :'Math.random'}
  cart.push(s)
  cart.push(p)
  cart.push(i)

for ( var i = 0 ; i < cart.length ; i++ ){
console.log (`In your cart, you have socks at $${cart.socks}, puppy at $${cart.puppy}, iPhone at $${cart.iPhone}.`)

} console.log ('Your shopping cart is empty.')
}


function removeFromCart(itemName){
  var  i = 0
  var itemName = cart
if (itemName.hasOwnProperty(cart[i]) === cart[i]){
itemName.slice(0,1)
return cart
i++
}

else{
} console.log("That item is not in your cart.")
}
