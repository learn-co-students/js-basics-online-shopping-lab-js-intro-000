var cart = [ {} ];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push( {[item]: price} );
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  var string = '';
  var returns;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        string += `${item} at $${cart[i][item]}, `
      }
    }
    returns = "In your cart, you have " + string;
    string = returns.slice(0,-2) + ".";
    console.log(string)
  }
}

function removeFromCart(item) {
  if (cart.length === 0) {
    console.log("That item is not in your cart.");
    return cart
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1);
        return cart
      }
    }
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([])
  }
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
