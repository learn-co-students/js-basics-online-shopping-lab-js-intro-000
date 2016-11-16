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
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }
  var goodness = [];
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var itemd in cart[i]) {
      goodness.push(`${itemd} at $${cart[i][itemd]}`)
    }
  }
  console.log(`In your cart, you have ${goodness.join(", ")}.`);
  return cart;
 }

function removeFromCart(del) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(del)) {
      cart.splice(cart[i],1)
    return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}
function placeOrder(card) {
  if (card === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
  cart = [];
}
