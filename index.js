var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cart = getCart();
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var inventory = 'In your cart, you have ';
    for(var i = 0; i < cart.length; i++) {
      if(i !== 0) inventory += ', ';
      if(i === cart.length - 1 && cart.length !== 1) inventory += 'and ';
      inventory += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
    }
    return inventory + '.';
  }
}

function total() {
  var cart = getCart();
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  var cart = getCart();
  var itemWasInCart = false;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i]['itemName'] !== item) continue;

    itemWasInCart = true;
    cart.splice(i, 1);
    setCart(cart);
    break;
  }
  if(!itemWasInCart) return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you."

  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart([]);
  return message;
}
