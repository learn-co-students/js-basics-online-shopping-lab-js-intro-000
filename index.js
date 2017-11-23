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

function getCart(){
  return cart;
}

function addToCart(item){
  var obj = Object();
  obj[item] = Math.floor(Math.random() * 100);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var cartList = "In your cart, you have";
  if(cart.length < 1){
    console.log("Your shopping cart is empty.");
    return;
  }
  for(var i = 0; i < cart.length; i++){
    var tracker = Object.keys(cart[i]);
    cartList += ` ${tracker} at $${cart[i][tracker]}${i < cart.length-1 ? ',' : '.'}`;
  }
  console.log(cartList);
  return;
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return;
    }
  }
  console.log('That item is not in your cart.');
  return;
}

function placeOrder(ccNumber){
  if(ccNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
    cart = [];
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
  return;
}
