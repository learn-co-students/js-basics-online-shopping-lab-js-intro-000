var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 99) + 1; // assigns itemPrice random number between 1-100
  var newItem = { [itemName] : itemPrice }; // creates newItem object with key-value pair

  cart.push(newItem); // destructively adds newItem to cart
  console.log(`${itemName} has been added to your cart.`); // logs addition of newItem to cart
  return cart;
}

function viewCart() {
  var i = cart.length;
  var itemsInCart = "";

  // prints message if cart is empty
  if (i === 0) {
    console.log("Your shopping cart is empty.");
  }
  // prints message if cart has one item
  else if (i === 1) {
    itemsInCart = `${Object.keys(cart[i - 1])} at $${cart[i - 1][Object.keys(cart[i - 1])]}`;
  }
  // prints message if cart has two items
  else if (i === 2) {
    itemsInCart = `${Object.keys(cart[i - 2])} at $${cart[i - 2][Object.keys(cart[i - 2])]} and ${Object.keys(cart[i - 1])} at $${cart[i - 1][Object.keys(cart[i - 1])]}`;
  }
  // prints message if cart has more than two items
  else if (i > 2) {
    for (let x = 1; x < i; x++) {
      itemsInCart += `${Object.keys(cart[x - 1])} at $${cart[x - 1][Object.keys(cart[x - 1])]}, `;
    }
    itemsInCart += `and ${Object.keys(cart[i - 1])} at $${cart[i - 1][Object.keys(cart[i - 1])]}`;
  }
  console.log(`In your cart, you have ${itemsInCart}.`);
}

function total() {
  var i = cart.length;
  var totalValue = 0;

  for (let x = 0; x < i; x++) {
    totalValue += cart[x][Object.keys(cart[x])];
  }
  return totalValue;
}

function removeFromCart(item) {
  var i = cart.length;

  for (let x = 0; x < i; x++) {
    if (cart[x].hasOwnProperty(item)) {
      cart.splice(x, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  cart = [];
}
