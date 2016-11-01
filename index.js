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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*101);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var coll = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i=0; i<cart.length; i++) {
      for (var key in cart[i]) {
        coll.push(key + " at $" + cart[i][key]);
      }
    }
    console.log("In your cart, you have " + coll.join(", ") + ".");
  }
}

function removeFromCart(removeItem) {
  var newCart = [];
  var inCart = false;
  cart.forEach(function(item) {
    if (item.hasOwnProperty(removeItem)) {
      inCart = true;
    } else {
      newCart.push(item);
    }
  });
  if (!inCart) {
    console.log("That item is not in your cart.");
  }
  cart = newCart;
  return cart;
}

function placeOrder(cardNum) {
  if (arguments.length === 0) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`);
    cart.length = 0
  }
}
