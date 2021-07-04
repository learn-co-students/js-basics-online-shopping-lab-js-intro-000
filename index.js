var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemInfo = {
    itemName: item,
    itemPrice: price
  };
  cart.push(itemInfo);
 return (`${item} has been added to your cart.`);
}

function viewCart() {

  if (cart.length === 0) { return 'Your shopping cart is empty.'}
  if (cart.length === 1) { return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`}

  var result = "In your cart, you have "
  for(var i=0; i<cart.length; i++) {
    if (i > 0) { result += ", " }
    if (i === cart.length - 1) { result += "and " }
    result += `${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
  result += ".";
  return result;
}

function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal
}

function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item) {
    cart.splice(i, 1);
    return cart;
  }
}
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
    if (cardNumber) {
      var cartTotal = total();
      cart = [];
    return (`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
return ("Sorry, we don\'t have a credit card on file for you.");

}
