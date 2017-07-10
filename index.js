var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = item;
 var itemPrice = Math.floor(Math.random() * 100 + 1);
 var item = {};
 item[itemName] = itemPrice;
 console.log(`${itemName} has been added to your cart.`);
 cart.push(item);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var shoppingCart = [];
    for (var i = 0; i < cart.length; i++) {
      var cartObject = cart[i];
      var itemName = Object.keys(cartObject)[0];
      var itemPrice = cartObject[itemName];
      shoppingCart.push(`${itemName} at $${itemPrice}`);
    }
    if (shoppingCart.length <= 2) {
      console.log(`In your cart, you have ${shoppingCart.join(' and ')}.`);
    } else {
      var last = shoppingCart.pop();
      console.log(`In your cart, you have ${shoppingCart.join(', ')}, and ${last}.`);
    }
  }
}

function total() {
  var totalPrice = [];
  for (var i = 0; i < cart.length; i++) {
    var cartObject = cart[i];
    var itemName = Object.keys(cartObject)[0];
    var itemPrice = cartObject[itemName];
    totalPrice.push(itemPrice);
  }
  var currentTotal = totalPrice.reduce(function(a, b) {
    return a + b;
  }, 0);
  return currentTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var cartObject = cart[i];
    if (cartObject.hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var totalPrice = [];
    for (var i = 0; i < cart.length; i++) {
      var cartObject = cart[i];
      var itemName = Object.keys(cartObject)[0];
      var itemPrice = cartObject[itemName];
      totalPrice.push(itemPrice);
      cart.shift();
    }
    var currentTotal = totalPrice.reduce(function(a, b) {
      return a + b;
    }, 0);
    console.log(`Your total cost is $${currentTotal}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
