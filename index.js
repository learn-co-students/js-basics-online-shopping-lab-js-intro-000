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
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = [];
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {
        for (let i = 0; i < cart.length; i++) {
          for (var items in cart[i]) {
            result.push(items + " at $" + cart[i][items]);
          }
    }
    console.log("In your cart, you have " + result.join(", ") + ".");
  }
}

function removeFromCart(item) {
  var count = 0;
  for (let i = 0; i < cart.length; i ++) {
    for (var items in cart[i]) {
      if (item === items) {
      cart.splice(i, 1);
      count++;
      }
    }
  }
  if (count === 0) {
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
