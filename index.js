var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cart = getCart();

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }

  var output = 'In your cart, you have ';
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
       output += `${item} at $${cart[i][item]}`;
    }
    output += (i < cart.length - 1) ? ', ' : '.';
  }

  console.log(output);
}

function removeFromCart(item) {
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.pop(i);
      removed = true;
    }
  }
  if (removed) {
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cc) {
  if (typeof cc != 'number') {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = []; // Empty cart
  }
}
