var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  // write your code here
  cart.push(makeCartItem(item));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function makeCartItem(item) {
  var cartItem = {};
  cartItem.itemName = item;
  cartItem.itemPrice = Math.floor(Math.random() * 100);
  return cartItem;
}

function viewCart() {

    if (getCart().length == 0) {
      console.log("Your shopping cart is empty.");
    } else {

      var output = "In your cart, you have ";
      var itemNames = getCartItemNames();

      for (var i = 0; i < cart.length; i++) {

        if (i == cart.length - 1) {
          output += `${itemNames[i]} at $${cart[i].itemPrice}.`;
        } else {
          output += `${itemNames[i]} at $${cart[i].itemPrice}, `;
        }
      }
      console.log(output);
    }

}

function getCartItemNames() {
  var theKeys = [];
  for (var i = 0; i < cart.length; i++) {
    theKeys.push(cart[i].itemName);
  }
  return theKeys;
}

function total() {
  var amount = 0;

  for (var i = 0; i < cart.length; i++) {
    amount += parseInt(cart[i].itemPrice);
  }

  return amount;
}

function removeFromCart(item) {

    var position = hasAMatchInCartFor(item);

    if (typeof position === 'number') {
      delete cart[position];
      removeNullItems();
    } else {
      console.log("That item is not in your cart.");
    }
  
}

function hasAMatchInCartFor(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      return i;
    }
  }
    return false;
}

function removeNullItems() {
  var NonNullArray = [];

  for (var i = 0; i < cart.length; i++) {
    if (cart[i] != null) {
      NonNullArray.push(cart[i]);
    }
  }
  cart = NonNullArray;
}


function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}
