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

function getCart () {
  return cart;
}

function addToCart (itemName) {
var price = Math.floor(Math.random() * (100 - 1) + 1);
  cart.push({[itemName] : price});
  console.log(itemName + ' has been added to your cart.');
  return getCart();
}


function viewCart () {
  if(cart.length > 0) {
    var inCart = [];
    for(var i = 0, l = cart.length; i < l; i++) {
    for(var item in cart[i]) {
      inCart.push(" " + item + " at $" + cart[i][item]);
    console.log("In your cart, you have" + inCart + ".");
      }
    }
  }
else {
  console.log("Your shopping cart is empty.")
}
}

function removeFromCart (item) {
  for(var item in cart) {
    if(item.hasOwnProperty(item)) {
      cart.splice(item, 1)
      getCart();
    }
  }
  if(item.hasOwnProperty(item) === false) {
    console.log("That item is not in your cart.");
  }
}



function placeOrder (cardNumber) {
if(cardNumber === undefined) {
  console.log("We don't have a credit card on file for you to place your order.");
}
else {
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  cart = [];
}
}
