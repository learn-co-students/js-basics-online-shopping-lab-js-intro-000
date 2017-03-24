var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(100 * Math.random());
  var newItem = {};
  newItem[item] = price;
  cart.push(newItem);
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var array = [];
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]);
      array.push(item + " at $" + cart[i][item]);
    }
    console.log("In your cart, you have " + array.join(", ") + ".");
  }
}

function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      itemInCart = true;
      return cart
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
