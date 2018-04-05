var cart = [];

/* Function used from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   section entitled "Getting a random integer between two values, inclusive" */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemObj = new Object();
 itemObj.itemName = item;
 itemObj.itemPrice = getRandomIntInclusive(1, 100);
 cart.push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`;
  } else {
    let cartString = `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`;
    for (let i = 1; i <= cart.length - 2; i++) {
      cartString += `, ${cart[i].itemName} at \$${cart[i].itemPrice}`;
    }
    cartString += `, and ${cart[cart.length - 1].itemName} at \$${cart[cart.length - 1].itemPrice}.`;
    return cartString;
  }
}

function total() {
  let runningTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    runningTotal += cart[i].itemPrice;
  }
  return runningTotal;
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    let checkoutStr = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return checkoutStr;
  }
}
