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
 var anItem = {[item]:Math.floor(Math.random() * 100) + 1};
 cart.push(anItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var s = 'In your cart, you have';
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    var key = Object.keys(cart[0])[0];
    console.log(s + ` ${key} at $${cart[0][key]}.`)
  } else {
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0];
      if (i === 0) {
        if (cart.length > 2) {
          s = s + ` ${key} at $${cart[i][key]},`;
        } else {
          s = s + ` ${key} at $${cart[i][key]}`;
        }
      } else if (i === cart.length - 1) {
        s = s + ` and ${key} at $${cart[i][key]}.`;
      } else {
        s = s + ` ${key} at $${cart[i][key]},`;
      }
    }
    console.log(s);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    total = total + cart[i][key];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  var index = -1;
  for (var i = 0; i < cart.length; i++) {
    //var key = Object.keys(cart[i][0]);
    if (cart[i].hasOwnProperty(item)) {
      found = true;
      index = i;
      break;
    }
  }
  if (found) {
    cart.splice(index, 1);
  } else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart = [];
  }
}
