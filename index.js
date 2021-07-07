var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var message;
 var item = { itemName: itemName, itemPrice: Math.floor(Math.random()*100) };
 cart.push(item)
 message = `${itemName} has been added to your cart.`
 return message;
}

function viewCart() {
  // write your code here
  var i;
  var output;
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    output = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice},`;
    for (i = 2; i < cart.length; i++) {
      if (i === cart.length - 1){
        output = output.concat(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      } else {
        output = output.concat(` ${cart[i].itemName} at $${cart[i].itemPrice},`)
      }
    }
    return output;
  }
}

function total() {
  // write your code here
  var i;
  var totalprice = 0;
  for (i = 0; i < cart.length; i++) {
    totalprice += cart[i].itemPrice
  }
  return totalprice;
}

function removeFromCart(input) {
  // write your code here
  var i;
  if (cart.length === 0) {
    return "That item is not in your cart."
  } else {
    for (i = 0; i < cart.length; i++) {
      if (cart[i].itemName === input) {
        cart.splice(i,1);
      } else if (i === cart.length - 1) {
        return "That item is not in your cart.";
      }
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var message;
  if (cardNumber) {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
    message = "Sorry, we don\'t have a credit card on file for you.";
  }
  cart = []
  return message;
  }
