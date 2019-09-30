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
  var addItem = {
        itemName: item,
        itemPrice: Math.floor(Math.random()*100)
      }
    cart.push(addItem);
    return addItem.itemName + ' has been added to your cart.'
};

function viewCart() {
  // write your code here
  var list = []

  if (cart.length > 0) {
  for (let i = 0; i < cart.length; i++) {
    var shopping =
    (i !== 0 && i === cart.length - 1) ? `and ${cart[i].itemName} at $${cart[i].itemPrice}` : `${cart[i].itemName} at $${cart[i].itemPrice}`;
    list.push(shopping)
  }
    return 'In your cart, you have ' + list.join(', ') + '.';
  }
  return 'Your shopping cart is empty.'
}

function total() {
  // write your code here
  if (cart.length > 0) {
  var totalCost = cart.reduce(function(curr, val) {
    return curr += val.itemPrice}, 0)
    return totalCost
  }
   return totalCost = 0
  }



function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(cart.indexOf(cart[i]), 1)
      return cart
      }
  }
  return 'That item is not in your cart.'
};

function placeOrder(cardNumber) {
  // write your code here
    if (cardNumber > 0) {
    var msg = 'Your total cost is $' + total() + `, which will be charged to the card ${cardNumber}.`
    cart = []
    return msg
  }
  return 'Sorry, we don\'t have a credit card on file for you.'
}
