var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price});

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const cartLength = cart.length;

  if (!cartLength) {
    return console.log('Your shopping cart is empty.');
  }

  const itemsAndPrices = [];

  for(let i = 0; i < cartLength; i++) {
    let itemsAndPrice = cart[i];

    let item = Object.keys(itemsAndPrice)[0];

    let price = itemsAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function total() {
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item];
    }
  }

  return total;
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.splice(0, i).concat(cart.slice(i+1))
    }
  }

  if (!itemInCart) {
    console.log('That item is not in your cart.');
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
