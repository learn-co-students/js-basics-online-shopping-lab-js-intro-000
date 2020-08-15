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
 var itemPriceNumber = Math.floor(Math.random() * (100)) + 1;
 var groceries = { itemName: item, itemPrice: itemPriceNumber }
 if (cart.push(groceries)) {
  return `${groceries.itemName} has been added to your cart.`
 }
}

function viewCart() {
  // write your code here
  var shoppingItems = []
  for (let i=0; i < cart.length; i++) {
    var itemName = Object.values(cart[i])[0]
    var itemPrice = Object.values(cart[i])[1]
    shoppingItems.push(`${itemName} at $${itemPrice}`)
  }
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${shoppingItems.join('')}.`;
  } else if (cart.length > 1) {
    var lastItem = shoppingItems.pop();
    return "In your cart, you have " + shoppingItems.join(", ") + ", and " + lastItem + '.';
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    // parsesFloat parses a string and returns a number
    sum += parseFloat(Object.values(cart[i])[1]);
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
    return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    const totalCost = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0, cart.length)
    return totalCost
  }
}
