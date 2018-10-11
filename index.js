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
 var item = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(item)
 return `${item["itemName"]} has been added to your cart.`
}

function viewCart() {
  // write your code here
if (cart.length > 1) {{
  var list = []
  for (let i = 0; i < cart.length - 1; i++) {list.push(` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)}
} return `In your cart, you have${list}, and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
} else if (cart.length == 1) {
  return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
} else {
  return "Your shopping cart is empty."
}}

function total() {{
  // write your code here
var total = 0
for (let i = 0; i < cart.length; i++) {
  total = total + cart[i]["itemPrice"]
}
return total}
}

function removeFromCart(item) {
  // write your code here
var index = cart.map(function(o) {return o.itemName}).indexOf(item);
    if(index >= 0) {
cart.splice(index,1)
return cart}
else {
return "That item is not in your cart."
}}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
  return "Sorry, we don't have a credit card on file for you."}
  else {
var sumTotal = total();
cart = [];
  return `Your total cost is $${sumTotal}, which will be charged to the card ${cardNumber}.`;
   }}
