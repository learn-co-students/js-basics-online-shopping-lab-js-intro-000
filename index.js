var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  var returnString = `In your cart, you have `;
  if (cart.length === 1) {
    returnString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    returnString += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      var prep;
      if (i === cart.length - 2) {
        prep = ", and ";
      } else if (i === cart.length-1) {
        prep = "";
      } else {
        prep = ", ";
      }
      returnString += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + prep + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  return console.log(returnString)
}

function total() {
  var total = 0;
  for (var i = 0; i <= cart.length-1; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  console.log(`Your total cost is $` + total() + `, which will be charged to the card ${cardNumber}.`)
  cart = [];
  return
}
