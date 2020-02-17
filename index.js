var cart = []; // This is an array of objects

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObject = { itemName:`${item}`, itemPrice: Math.floor(Math.random()*100) }
 cart.push(itemObject);
  return itemObject.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var moreThanTwoItems = 'In your cart, you have '
    for (var i = 0; i < cart.length - 1; i++) {
      moreThanTwoItems = moreThanTwoItems + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return moreThanTwoItems + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    // Note: cart.length - 1 accounts for the index of the first item being 0
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
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1); // Removes 1 item at index i
      return cart;
    }
  }
  if (item != cart[item]) {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    var totalAmount = total();
    cart = [];
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`
    } else {
      return 'Sorry, we don\'t have a credit card on file for you.'
    }
}
