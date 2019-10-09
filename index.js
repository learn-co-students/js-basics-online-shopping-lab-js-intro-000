var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100) + 1;
var itemObject = {};
itemObject[item] = price
cart.push(itemObject)
console.log(item +" has been added to your cart.");
return cart
}

function viewCart() {
if (cart.length === 0) {
  console.log("Your shopping cart is empty.")
} else {
  var items = [];
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
    items.push(item + " at $" + cart[i][item])
  }
}
if (cart.length < 3){
console.log("In your cart, you have " + items.join(" and ") + ".")
}
else {
console.log("In your cart, you have " items.slice(0, -1).join(", ") + ", and " + items.slice(-1) + ".")
}
}
}

function total() {
let tot = 0
for (var i = 0; i < cart.length; i++){
  for (var item in cart[i]){
    tot += cart[i][item]
  }
}
return tot
}

function removeFromCart(item) {
var itemInCart = false
for (var i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item)){
    itemInCart = true;
    cart.splice(i, 1);
  }
}
if (!itemInCart){
  console.log("That item is not in your cart.");
}
}

function placeOrder(cardNumber) {
if (!cardNumber){
  console.log("Sorry, we don't have a credit card on file for you.");
} else {
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  cart = [];
}
}
