var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  const p = createPrice();
  function createPrice() {
    return Math.floor(Math.random() * 100);
  }

  console.log(`${item} has been added to your cart.`);
  return cart.item = "p";
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  else {
    const itemAndPrice = [];

    for (var itemPrice in cart) {
      itemAndPrice.push(`${cart} at ${cart[itemPrice]}`);
      console.log(`In your cart you have ${itemAndPrice.join(", ")}`);
    }
  }
}

function removeFromCart(item) {
  for (var item in cart) {
    if (cart.hasOwnProperty(item) === false) {
      console.log("That item is not in your cart.")
    }
    else {
      cart.pop(item);
      return cart;
    }
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

function placeOrder(cc) {
  if (cc === NaN || 0) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is ${t}, which will be charged to the card ${cc}.`)
  }
}
