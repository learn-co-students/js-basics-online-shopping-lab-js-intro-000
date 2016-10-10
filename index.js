var cart = new Array();

function getCart() {
  return cart;
}

function addToCart(item) {
  cart[item] = Math.floor(Math.random() * 100);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    for (var item in cart) {
      console.log(`In your cart you have ${item} - ${cart[item]}.`);
    }
    } else {
      console.log("Your shopping cart is empty.");
    }
}
function removeFromCart(item) {
  cart.hasOwnProperty('item') ? delete cart['item'] : console.log("That item is not in your cart.");
  return cart;
}
function placeHolder(cardNumber) {
  var creditCardEmpty = cardNumber;
  typeof creditCardEmpty !== 'undefined' ? console.log("We don't have a credit card on file for you to place your order.") :
  console.log(`"Your total cost is $${total()}, which will be charged to the card ${cardNumber}."`);
}
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
