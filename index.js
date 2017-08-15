var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemPrice = Math.round(Math.random(99) + 1);
 var theItem = new Object({ [item]: itemPrice })
 cart.push(theItem);
 console.log(item + " has been added to your cart.")
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length > 0) {
    var theString = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      var theKey = new Object();
      theKey = Object.keys(cart[i]);
      var keyString = theKey.toString();
      theString += " " + theKey + " at $" + cart[i][keyString];
      if (i <= (cart.length - 2) && cart.length > 2){
        theString += ",";
      }
      if ((i == (cart.length - 2)) && (cart.length > 1)) {
        theString += " and";
      }
    //  theString += theKey + " at $" + cart[i][keyString];
    }
  }
  theString += ".";
  console.log(theString);
}

function total() {
  // write your code here
  var totalValue = 0;
  for(var i = 0; i < cart.length; i++) {
    var theKey = Object.keys(cart[i]);
    var keyString = theKey.toString();
    var itemPrice = cart[i][keyString];
    totalValue += itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  for(var i = 0; i < cart.length; i++) {
    var theKey = Object.keys(cart[i]);
    var keyString = theKey.toString();
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      found = true;
    }
  }
  if(!found) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var totalValue = total();
  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else if (cardNumber != null) {
    console.log("Your total cost is $" + totalValue + ", which will be charged to the card " + cardNumber + ".")
    cart = [];
  }
}
