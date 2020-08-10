var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100));
  var newItem = {itemName: item, itemPrice: price};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else if (cart.length > 2) {

    var start =  `In your cart, you have`;

    var middle = []
    for (let i = 0; i < cart.length - 1; i++) {
      middle.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }

    var end = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;

    return start + middle + end;
  }
}

function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  var order = []
  if (cardNumber === undefined) {
    return(`Sorry, we don't have a credit card on file for you.`);
  } else {
    order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = []
    return order
  }
}
