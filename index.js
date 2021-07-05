var cart = [];

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_object = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
  cart.push(item_object);
  return item_object.itemName + " has been added to your cart.";
}
//passed
function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var cartMsg = "In your cart, you have";
    for (var i = 0; i < cart.length - 1; i++) {
      cartMsg = cartMsg + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
    return cartMsg + ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  }
}
//passed
function total() {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}
//passed
function removeFromCart(item) {
  for (let i = 1; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
 }
 //passed


function placeOrder(cardNumber) {
  if (cardNumber) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
     total += cart[i].itemPrice;}
    for (let i = cart.length; i >= 0; i--) {
     cart.pop();

     return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  }
}
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
//passed
