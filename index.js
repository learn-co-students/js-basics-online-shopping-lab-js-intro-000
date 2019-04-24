var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cartList = { 'itemName' : `${item}`, 'itemPrice' : Math.floor(Math.random() * Math.floor(100)) };
 console.log(cartList);
 return (cart.push(cartList) ? `${item} has been added to your cart.` : `${item} was not added to your cart.`);
}

function viewCart() {
  var cartContents = "In your cart, you have ";
  var endOfCartArray = cart.length - 1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length && cart.length > 1 && i != endOfCartArray) {
        console.log(cart);
        cartContents = cartContents + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
      else if (cart.length == 1) {
        console.log(cart);
        cartContents = cartContents + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else {
        console.log(cart);
        cartContents = cartContents + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
  }
  else {
    cartContents = "Your shopping cart is empty.";
  }
  return cartContents;
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  console.log(cart.length);
  for (var i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total = total + cart[i].itemPrice;
    }
    cart.splice(0, cart.length);
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  }
  return "Sorry, we don't have a credit card on file for you.";
}
