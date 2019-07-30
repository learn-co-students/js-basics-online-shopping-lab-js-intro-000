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
var obj = {
itemName: item,
itemPrice: Math.floor(Math.random() * 100) + 1}
cart.push(obj)
return `${item} has been added to your cart.`
}






function viewCart() {
if (cart.length === 0){
  return `Your shopping cart is empty.`
}
var arr = []
for(var i = 0; i < cart.length; i++){
  if ( ! i<1 && i === cart.length - 1){
    arr.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }else{
  arr.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
}
}
return `In your cart, you have${arr}.`
}


function total() {
var totalvalue = 0
for ( var i = 0; i < cart.length; i++){
  totalvalue += cart[i].itemPrice
}
return totalvalue
}


function removeFromCart(item) {
for ( var i = 0; i < cart.length; i++){
  if ( item === cart[i].itemName){
    cart.splice(i, 1)
  return cart
}
}
      return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  }
  var sum = total()
  cart.length = 0
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
