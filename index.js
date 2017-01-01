var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsAndPrices = [];

  if (!cart.length) {
    console.log('Your shopping cart is empty.');
  }

  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at $${price}`);
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function removeFromCart(item) {
  var itemInCart = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }

  if (!itemInCart) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(ccn) {
  if (!ccn) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`);
  }

  cart = [];
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
addToCart('puppy');
addToCart('cat');
addToCart('fluid');
viewCart();
console.log(cart);
