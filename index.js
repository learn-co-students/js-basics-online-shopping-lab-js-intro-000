var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 var itemDetails = {itemName: item, itemPrice: getRandomInt(1, 100)};
 cart.push(itemDetails);

 return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  else {
    var x = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice},`;
    for (let i=1; i < cart.length; i++) {
      if (i === cart.length-1) {
        x = x + ` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
        return x;
      }
      else {
        x = x + ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
      }
    }
  }
}

function total() {
  var totalPrice = 0;
  for (let i=0; i < cart.length; i++) {
    totalPrice = totalPrice + getCart()[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var x = 0;
  for (let i=0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
      cart.splice(i, 1);
      x = 1;
      return getCart();
    }
  }
  if (x === 0) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var totalCost = total();
    cart.splice(0);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
