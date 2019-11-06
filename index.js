var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  let newItem = {
    itemName: item,
    itemPrice: price
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let array = [];
  let shoppingList = 'In your cart, you have ';
  for (var i = 0; i < cart.length; i++) {
    array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (cart.length === 0) {
      return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      return shoppingList + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
      return shoppingList + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
      let lastItem = array.pop();
      return shoppingList + `${array.join(', ')}, and ${lastItem}.`
    }
}

function total() {
  let totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    let item = cart[i];
    totalPrice += item.itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var isItemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    let cartItem = cart[i];
    if(cartItem.itemName === item) {
      cart.splice(i, 1);
      isItemInCart = true;
      return cart;
    }
  }
  if (isItemInCart === false) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    let chargeStatement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return chargeStatement;
  } else {
      return `Sorry, we don't have a credit card on file for you.`;
  }
}

cardNumber(3223);
