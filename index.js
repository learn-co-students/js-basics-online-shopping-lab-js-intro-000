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
 var itemPrice = Math.floor(Math.random()*100)
 + 1;
 cart.push({[item]: itemPrice});
 console.log([`${item} has been added to your cart.`]);
 return cart;

}

function viewCart() {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    cart[i];

    console.log (`In your cart, you have bananas at ${Object.values(cart[i])},
    pancake batter at ${Object.values(cart[i])}, and eggs at ${Object.values(cart[i])}.`);
  }
}

function total() {
  // write your code here
  var itemPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    itemPrice += Object.values(cart[i])[0];
  }
  return itemPrice;
}

function removeFromCart(item) {
  // write your code here
  if (cart.hasOwnProperty("koodi")) {
    console.log("That item is not in your cart.");
  } else if (cart.hasOwnProperty(item)) {
    cart[item].pop();

  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${[total()]}, which will be charged to the card ${cardNumber}.`);
  }
    return cart.length = 0;
}
