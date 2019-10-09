var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  cart.push({ [item]: itemPrice });
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
var itemsAtValue= [];
if (cart.length === 0) {
  console.log(`Your shopping cart is empty.`);
}else if(cart.length === 1) {
    var keyone = Object.keys(cart[0])[0];
    var valueone = cart[0][keyone];
  console.log(`In your cart, you have ${keyone} at $${valueone}.`)
}else if (cart.length === 2) {
    var keyone = Object.keys(cart[0])[0];
    var valueone = cart[0][keyone];
    var keytwo = Object.keys(cart[1])[0];
    var valuetwo = cart[1][keytwo];
  console.log(`In your cart, you have ${keyone} at $${valueone} and ${keytwo} at $${valuetwo}.`);
  }else{
  for (var i = 0; i<cart.length; i++ ) {
    var key = Object.keys(cart[i])[0];
    var value = cart[i][key];
    itemsAtValue.push(key+ " at " +"$"+value);
  }
    var lastItem = itemsAtValue.pop();
    console.log(`In your cart, you have ${itemsAtValue.join(", ")}, and ${lastItem}.`);
}
}

function total() {
  var final =[];
  for (var i = 0; i<cart.length; i++ ) {
    var key = Object.keys(cart[i])[0];
    var value = cart[i][key];
    final.push(value);
  }
  var total = 0;
  for ( var x = 0; x < final.length; x++ ){
    total += final[x];
}
  console.log(`total is ${total}`);
  return total;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(creditCard) {
  if (creditCard == undefined){
console.log("Sorry, we don't have a credit card on file for you.")
  } else {
console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
cart.length = 0;
  }
}
