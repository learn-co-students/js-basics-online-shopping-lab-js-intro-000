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
 var randPrice = Math.floor(Math.random() * 100);
 var itemInCart = {itemName: item, itemPrice: randPrice};
 cart.push(itemInCart);
 return `${item} has been added to your cart.`

}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return "Your shopping cart is empty.";
  }

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  var n = cart.length;
  var string = `In your cart, you have `;

  for (var i = 0; i < n; i++) {
    if (i === n-1) {
        string = string + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else {
        string = string + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    }
    return string
}

function total() {
  // write your code here
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].itemPrice
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber != null) {
    var charge = total();
    cart = [];
    return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
