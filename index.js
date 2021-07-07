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
 var price = Math.floor(Math.random() * 10) + 1;
var objItem = {itemName: item, itemPrice: price};
 cart.push(objItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0) {
        return "Your shopping cart is empty.";
    } else {
        var message = "In your cart, you have ";
        if (cart.length === 1) {
            message += `${cart[0].itemName} at $${cart[0].itemPrice}`;
        } else {
            for (var i = 0; i < cart.length; i++) {
                message += `${cart[i].itemName} at $${cart[i].itemPrice}`;
                if (i === cart.length - 2) {
                    message += ", and ";
                } else if (i < cart.length - 2) {
                    message += ", ";
                }
            }
        }
        return message += "."
    }
}

function total() {
  // write your code here
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var inCart  = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item) {
            cart.splice(i, 1);
            inCart = true;
            return cart;
        }
    }
    if (inCart === false) {
        return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof(cardNumber) === "undefined") {
      return "Sorry, we don't have a credit card on file for you.";
  } else {
      var totalCost = total()
      cart = [];
      return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
