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
var randomNumber = Math.floor(Math.random()*100)+1;
var items = {};
items[item] = randomNumber;
cart.push(items);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  // write your code here
  var cartKeys = [];
  var cartPrice = [];
  for (let i = 0; i < cart.length; i++) {
  cartKeys.push(Object.keys(cart[i])[0]);
  }

  for (let i = 0; i < cart.length; i++) {
  cartPrice.push(cart[i][cartKeys[i]]);
  }

  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }

  if (cart.length === 1) {
    console.log(`In your cart, you have ${cartKeys[0]} at $${cartPrice[0]}.`);
  }

  if (cart.length === 2) {
    console.log(`In your cart, you have ${cartKeys[0]} at $${cartPrice[0]} and ${cartKeys[1]} at $${cartPrice[1]}.`);
  }

  if (cart.length >= 3) {
    var moreThanTwoItems = `In your cart, you have`;
    for (let i = 0; i < cart.length; i++) {
    moreThanTwoItems += ` ${cartKeys[i]} at $${cartPrice[i]},`;
    }
    var threeOrMore = moreThanTwoItems.slice(0,moreThanTwoItems.length - 1);
    threeOrMore = threeOrMore.replace(/,([^,]*)$/,"\, and$1");
    threeOrMore += '.';
    console.log(`${threeOrMore}`);
  }
}

function total() {
  // write your code here
  var totalValue = 0;
  var cartKeys = [];
  var cartPrice = [];
  for (let i = 0; i < cart.length; i++) {
    cartKeys.push(Object.keys(cart[i])[0]);

  }

  for (let i = 0; i < cart.length; i++) {
    cartPrice.push(cart[i][cartKeys[i]]);
  }

  for (let i = 0; i < cart.length;i++) {
    totalValue += cartPrice[i];
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  var cartKeys = [];
  var cartPrice = [];
  for (let i = 0; i < cart.length; i++) {
  cartKeys.push(Object.keys(cart[i])[0]);
  }

  for (let i = 0; i < cart.length; i++) {
  cartPrice.push(cart[i][cartKeys[i]]);
  }

  if (cartKeys.indexOf(item) > -1) {
      var index = cartKeys.indexOf(item);
      cart.splice(index, 1);
      return cart;
    } else {
      console.log(`That item is not in your cart.`);
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber > 0) {
    var totalV = total();
    console.log(`Your total cost is $${totalV}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
