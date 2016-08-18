var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item){
  var obj = {};
  obj[item] = Math.floor(Math.random() * 100);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var response = "In your cart, you have";
    for (var i=0; i<cart.length; i++){
      for (var item in cart[i]) {
        response += ` ${item} at $${cart[i][item]},`;
      }
    }
    response = response.substring(0, response.length - 1) + ".";
    console.log(response);
  }
}

function removeFromCart(item) {
  var itemFound = false;
  for (var i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      itemFound = true;
    }
  }
  if (!itemFound) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null){
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
