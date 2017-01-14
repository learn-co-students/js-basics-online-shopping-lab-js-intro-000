var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;

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

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1);
  cart.push({ [item] : price });
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  var contents = "In your cart, you have";

  for (var i = 0; i < cart.length; i++) {
    var items = cart[i];
    for (var item in items) {
      if (i < cart.length - 1) {
        contents += " " + item + " at $" + items[item] + ",";
      } else {
        contents += " " + item + " at $" + items[item] + ".";
      }
    }
  }
  console.log(contents);
}

function removeFromCart(item) {
  var it = true;

  for (var i = 0; i < cart.length; i++) {
    var items = cart[i];
    if (items.hasOwnProperty(item)) {
      cart.splice(i, 1);
      it = false;
    }
  }

  if (it) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }

  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
  cart = [];
}
