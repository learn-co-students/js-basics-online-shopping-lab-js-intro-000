var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    [item]: Math.floor(Math.random() * 100) + 1
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
      } else if (i === (cart.length - 2)) {
        result += cart.length === 2 ? `${Object.keys(cart[i])} at $${Object.values(cart[i])} and ` : `${Object.keys(cart[i])} at $${Object.values(cart[i])}, and `;
      } else {
        result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `;
      }
    }
    console.log(result);
  }
}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost += parseInt(Object.values(cart[i]));
  }
  return totalCost;
}

function removeFromCart(item) {
  var result = cart.length;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1);
    } else {
      result--;
    }
  }
  if (result === 0) {
    console.log('That item is not in your cart.');
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  var cost = total();
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
