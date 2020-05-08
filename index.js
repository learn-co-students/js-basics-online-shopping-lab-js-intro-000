var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName:item, itemPrice:(Math.floor(Math.random()*100))})
return `${item} has been added to your cart.`

}

function viewCart() {
if (cart.length>0){
var cue = ""
let i = 0
for (i = 0; i<cart.length; i++){
  cue = `${cue}${cart[i].itemName} at $${cart[i].itemPrice}${i+2<cart.length ? ", " :""}${i+2==cart.length ? ", and " : "" }`
}
return `In your cart, you have ${cue}.`
}
else {
  return `Your shopping cart is empty.`
}
}

function total() {
let i = 0
let price = 0
for (i= 0; i<cart.length; i++){
price += cart[i].itemPrice
}
return price
}

function removeFromCart(item) {
let i = 0
while (i<cart.length)
 if (item != cart[i].itemName){
 i += 1
}
else {
  cart.splice(i,1)
  return cart
}
return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {
  return `Sorry, we don't have a credit card on file for you.`
}
else {
  cart = []
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
}
}
