var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  cart.push({ [`${item}`]: Math.floor(Math.random() * 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  } else {
    const itemsAndPrices = [];
    for (let i = 0; i < cart.length; i++) {
      for (var name in cart[i]) {
        itemsAndPrices.push(`${name} at \$${cart[i][name]}`);
      }
    }
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
  }
}

function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    for (var name in cart[i]) {
      sum += cart[i][name];
    }
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    for (var name in cart[i]) {
      if (name === item) {
        cart.splice(i, 1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
}
