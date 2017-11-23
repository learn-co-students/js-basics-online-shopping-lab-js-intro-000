var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


function getCart() {
  return cart;
};

function addToCart(item) {
  cart.push({[item] : Math.floor(Math.random(0, 1))});
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
  if (cart.length > 0) {
    var result = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      for (var c in cart[i]) {
        result += ` ${c} at $${cart[i][c]},`;
      }
    }
    result = result.slice(0, result.length - 1);
    result += ".";
    console.log(result);
  }
  else {
    console.log("Your shopping cart is empty.")
  }
};


function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log("That item is not in your cart.");
};

function placeOrder(cardNumber = "") {
  if (cardNumber === "") {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
};
