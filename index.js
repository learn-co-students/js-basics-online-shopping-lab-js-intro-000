var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj.itemName = item;
  obj.itemPrice = Math.floor(Math.random() * 100);
  cart.push(obj);
  return `${obj.itemName} has been added to your cart.`
}
function viewCart() {
  // write your code here
  var msg = '';
  if (cart.length === 0) {
    msg = `Your shopping cart is empty`;
  } else {
    msg = `In your cart, you have `;
    for (var i = 0; i < cart.length; i++) {
      var addText = i === cart.length - 2 ? ', and ' : i < cart.length - 2 ? ', ' : '';
      msg += `${cart[i].itemName} at $${cart[i].itemPrice}${addText}`;
    }
  }
  msg += '.';
  return msg;
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}
function removeFromCart(item) {
  // write your code here
  var anyItem = cart.some(product => product.itemName === item);
  if (cart.length !== 0) {
    for (var i = 0; i < cart.length; i++) {
      if (anyItem) {
        cart.splice(i, 1);
        return cart;
      } else {
        return `That item is not in your cart.`;
      }
    }
   } else {
   return `That item is not in your cart.`;
 }

}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
   var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
   cart = [];
   return msg;
 } else {
   return `Sorry, we don\'t have a credit card on file for you.`;
 }
}
