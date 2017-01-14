var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * 101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  var str = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    for(var itemPrice in cart[i]) {
      str += `${itemPrice} at $${cart[i][itemPrice]}`;
      if(i === cart.length-1) {
        str += '.'
      }
      else {
        str += ', '
      }
  }
}
  console.log(str);
}

function removeFromCart(itemToRemove) {
  let currentCart = false;
  for (var i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemToRemove)) {
      currentCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if(!currentCart) {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber === NaN || cardNumber === null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart = [];
}
