var cart = new Array();

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = 0;
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

function addToCart(item) {
  const price = Math.floor((Math.random() * 100));
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;
  if (l == 0) {
    return console.log('Your shopping cart is empty.');
}
  const itemsPrices = new Array();
  for (let i = 0; i < l; i++) {
  let itemPrice = cart[i];
  let item = Object.keys(itemPrice)[0]
  let price = itemPrice[item]
  itemsPrices.push(`${item} at \$${price}`)
}
    console.log(`In your cart, you have ${itemsPrices.join(', ')}.`)
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart = cart.slice(0, i).concat(cart.slice(i + 1))
    return cart
  }
}
return console.log("That item is not in your cart.");
}

function placeOrder(credit) {
  if (credit) {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${credit}.`)
    cart = []
    return
  }
    return console.log("We don't have a credit card on file for you to place your order.")
  }
