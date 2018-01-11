var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor(math.random() *100)};
  cart.push(newItem);
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length ===0){
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1){
  console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
} else if (cart.length === 2){
  console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`);
}
else if (cart.length > 2){
  var cartList =[];
  cartList.unshift(`In your cart,you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} `);
  for (let i = 1; i < cart.length - 1; i++) {
  cartList.push(` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`);
}
 cartList.push(` and ${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}`)
 console.log(cartList.toString());
}



function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
