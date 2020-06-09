var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var item = {itemName: `${item}`, itemPrice: Math.floor(Math.random() * (100 - 1) + 1)};
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length == []) {
  return `Your shopping cart is empty.`
} else if (cart.length === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
} else if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
} else {
  var myString = "In your cart, you have "
  for(var i = 0; i < cart.length - 1; i++) {
    myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}
}



function total() {
  // write your code here
  var cartSum = cart.reduce(function(a, b) {
    return a + b.itemPrice;
  }, 0);
  return cartSum;
}

function removeFromCart(item) {
  // write your code here
  if(cart.length == 0) {
    return `That item is not in your cart.`
  } else {
    for(let i = 0; i < cart.length; i++) {
      if (item === cart[i].itemName) {
      cart.splice(i, 1); //removes 1 item at index i
      return cart;
    }
    }
  }
}

function placeOrder(cardNumber) {
  if(cardNumber !== undefined) {
    let cartTotal = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}
