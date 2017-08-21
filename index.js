
var cart = [];
var cartTotal = 0;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push(Object.assign( {}, { [itemName]: Math.floor(Math.random()*100) }) );
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

function viewCart() {

  var totalString;
  var itemName;
  var itemPrice;

  if (cart.length > 2) {

    totalString = "";

    for (let i = 0; i < cart.length; i++ ) {
      itemName = Object.keys(cart[i]);
      itemPrice = cart[i][Object.keys(cart[i])];

      if ((i + 1) != cart.length) {
        var myString = `${itemName} at $${itemPrice}, `;
        totalString += myString;
      } else if ((i + 1) === cart.length) {
        var myString = `and ${itemName} at $${itemPrice}.`;
        totalString += myString;
      }
    }

    console.log(`In your cart, you have ${totalString}`);

  } else if (cart.length === 2) {

    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)

  } else if (cart.length === 1) {
      itemName = Object.keys(cart[0]);
      itemPrice = cart[0][itemName];
      console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
  } else {
    console.log("Your shopping cart is empty.")
  }
}




function total() {
  var cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i][Object.keys(cart[i])];
  }

  return cartTotal;
}

function removeFromCart(item) {

  var isItemInCart = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      isItemInCart = true;
    }
  }

  if (isItemInCart === true) {
    return cart;
  } else {
    console.log("That item is not in your cart.");
    return cart;
  }
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
      console.log("Sorry, we don't have a credit card on file for you.");
      return false;
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
}
