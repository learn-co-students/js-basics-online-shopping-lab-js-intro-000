var cart;

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


var cart = [];

undefined
function getCart (){
return cart
}


function addToCart (item) {
var price = Math.floor(Math.random()*100);
cart.push ({[price]:item})
console.log (item + " has been added to your cart.")
return getCart ()
}

function viewCart (){
if (cart.length == 0) {
console.log ("Your shopping cart is empty.")
}
else {
var textobject = {};
var textkeyarray = [];
var text = '';
for (var i=0; i<(cart.length-1); i++) {
textobject = cart [i];
textkeyarray = Object.keys (textobject);
text = text + textobject[textkeyarray] +" at $" + textkeyarray[0] + ", ";
}
textobject = cart [i++];
textkeyarray = Object.keys (textobject);
  console.log ("In your cart, you have " + text + textobject[textkeyarray] +" at $" + textkeyarray[0] + "!")
return
}
}

function removeFromCart (item){
var textobject = {};
var textkeyarray = [];
var text = '';
for (var i=0; i<(cart.length); i++) {
textobject = cart [i];
textkeyarray = Object.keys (textobject);
if (item == textobject[textkeyarray]) {
cart.splice (i,1);
return cart
}
else console.log ("That item is not in your cart.")
}
}


function placeOrder (creditcardnumber) {
if (typeof creditcardnumber != "number"){
console.log ("We don't have a credit card on file for you to place your order.")
}
else {
for (var i=0, costs=0; i<(cart.length); i++) {
textobject = cart [i];
textkeyarray = Object.keys (textobject);
costs = costs + Number (textkeyarray[0]);
}
cart.splice (0, cart.length);
console.log ("Your total cost is $" + costs + ", which will be charged to the card " + creditcardnumber +".")
}
}
