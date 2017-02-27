var cart = [];

function getCart(){
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var list = 'In your cart, you have';

  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      list += ` ${item} at $${cart[i][item]},`;
    }
  }
  list = list.slice(0, list.length-1) + '.';
  console.log(list);
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
//      delete cart[i];
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cc) {
  if (typeof cc === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
  cart = [];
}

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
