var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100);
  var obj = {[item] : randomPrice};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {



  if (Object.keys(cart).length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var str = "In your cart, you have ";
    var currentItem;
    for (var i = 0; i < cart.length; i++) {
      currentItem = cart[i];

      for (var key in currentItem) {
        str += `${key} at $${currentItem[key]}`;
      }

      if (i !== cart.length - 1) {
        str += ", ";
      } else {
        str += ".";
      }
    }
    console.log(str);
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  } // Close for loop

  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
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
