var cart = [];

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


function getCart() {
  return cart;
}

function addToCart(itemToPurchase) {
  var price = Math.random((Math.floor() * 100) + 1);
  var itemAndPrice = {};
  itemAndPrice[itemToPurchase] = price;
  cart.push(itemAndPrice);
  console.log(`${itemToPurchase} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var cartItems = [];
    for (var i = 0; i < cart.length; i++) {
      for (var itemToPurchase in cart[i]) {
        cartItems.push(`${itemToPurchase} at $${cart[i][itemToPurchase]}`);
      }
    }
        console.log("In your cart, you have " + cartItems.join(", ") + ".");
  }
}

function removeFromCart(itemToRemove) {
  for (var itemToPurchase in cart) {
     (cart.hasOwnProperty(itemToPurchase))
      cart.splice(itemToRemove);
      return cart;
  }
      console.log("That item is not in your cart.");
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart.shift();
  }
}
