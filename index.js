// Define a global variable (use var at the top level) called cart. Initialize it as an empty array.
var cart = [];

// Define a function getCart that takes no arguments and returns the cart.
function getCart() {
  return cart;
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



// #addToCart should add an item to the cart
// #addToCart logs that the item has been added
// #addToCart returns the cart
// #addToCart adds item dynamically
function addToCart(item) {
    var price = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

// #viewCart should print each item in the cart and their cost
// #viewCart should print 'Your shopping cart is empty.' if the cart is empty
// #total adds up the prices of the items in the cart
function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var items = [];
    for(var i = 0; i < cart.length; i++) {
      for(var item in cart[i]) {
        items.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

// #removeFromCart removes the item from the cart
// #removeFromCart alerts you if you're trying to remove an item that isn't in your cart
function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

// #placeOrder doesn't let you place an order if you don't provide a credit card number
// #placeOrder lets you place an order with a credit card
// #placeOrder empties the cart
function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
