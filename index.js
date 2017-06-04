var cart = []

function getCart() {
 return cart
}

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);
  cart.push( {[item]: price} );
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length) {
    var items = [];
    for (var each in cart) {
      for (var item in cart[each]) {
        items.push(item + " at $" + cart[each][item]);
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  var total = 0;
  for (var each in cart) {
    for (var item in cart[each]) {
      total += cart[each][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  var notInCart = true;
  for (var each in cart) {
    if (cart[each].hasOwnProperty(item)) {
      cart.splice(each, 1);
      notInCart = false;
      return cart;
    }
  }
  if (notInCart) {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
