var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = parseInt(Math.random() * (100 - 1) + 1, 10);
    console.log(`${item} has been added to your cart.`);
      cart.push({[item]: itemPrice});
        return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
  var itemPrices = []

  for (let i = 0; i < cart.length; i++) {
    var currentObject = cart[i]
    var keys = Object.keys(currentObject)[0]
    var price = currentObject[keys]
    var currentString = `${keys} at $${price}`
    itemPrices.push(currentString)
  }
  if (cart.length === 1){
    return console.log("In your cart, you have " + itemPrices[0] + ".")
  }
  if (cart.length === 2){
    return console.log("In your cart, you have " + itemPrices.join(" and ") + ".")
  }
  if (cart.length >= 3){
    var firstItems = itemPrices.slice(0, -1)
    return console.log("In your cart, you have " + firstItems.join(', ') + ", and " + itemPrices[itemPrices.length-1] + ".")
  }
}

function total() { //cart= [{apples: 2}, {lemons:2}]
  var total = 0;

  for (let i = 0; i < cart.length; i++) {
    var currentObject = cart[i]
    var keys = Object.keys(currentObject)[0]
    var price = currentObject[keys]
    total += price
  }

  return total
}


function removeFromCart(item) {
  var index = false
  for (let i = 0; i < cart.length; i++) {
    var currentObject = cart[i]

    if (currentObject.hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
  if (!index) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  var cartTotal = total();


   if (cardNumber) {
     console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
     console.log(cart.length = 0)
   } else {
     console.log("Sorry, we don't have a credit card on file for you.");
  }
}
