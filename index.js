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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.` )
  return cart;
}

// function makeItems(){
//   var items = [];
//   for (let i=0; i< cart.length; i++){
//     var item = Object.keys(cart[i])[0];
//     items.push(item.toString());
// }
// console.log(items);
// }


function viewCart() {
  if (Object.keys(cart).length === 0){
    console.log('Your shopping cart is empty.');
  }else{
    var productPairs = [];
    for (var i in cart){
      var product = Object.keys(cart[i])[0];
      productPairs.push(` ${product} at $${cart[i][product]}`)
    }
    console.log(`In your cart, you have${productPairs}.`);
  }
  }


function removeFromCart(item){
  var nope = false;
  for (var i = 0; i< cart.length; i++){
    for (var product in cart[i]) {
      if (product === item){
      cart.splice([i],1);
      var nope = true;
      console.log(nope);
      }
  }
}if (nope == false){
console.log("That item is not in your cart.");
}

}


function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
  for (var i = 0; i< cart.length; i++){
    removeFromCart(Object.keys(cart[i])[0]);
  }
}
//revise "cart is empty" logic
//figure out array structure of items and why hasOwnProperty isn't working



function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
  for (var i = 0; i< cart.length; i++){
    var item = Object.keys(cart[i])[0];
    console.log(item);
    removeFromCart(item);
  }
}
//revise "cart is empty" logic
//figure out array structure of items and why hasOwnProperty isn't working
