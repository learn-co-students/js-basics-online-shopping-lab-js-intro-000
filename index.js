var cart = [];

function getCart() {
  return cart;
}

function addToCart( itemToPurchase ) {
  let itemPrice = Math.floor( Math.random() * 100 ) +1;
  var newObject = new Object();
  newObject = { [itemToPurchase] : itemPrice };
  cart.push( newObject );
  console.log( itemToPurchase + " has been added to your cart.")
  return cart;
}

function viewCart() {
  if ( cart.length === 0 ) {
    console.log("Your shopping cart is empty.");
  } else {
    let message = "In your cart, you have "
    for ( var i = 0; i < cart.length; i++ ) {
      for ( var item in cart[i] ) {
        message += item + " at $" + cart[i][item].toString();
        if ( i < cart.length - 1 ) {
          message += ", ";
        }
      }
    }
    message += ".";
    console.log( message );
  }
}

function removeFromCart( itemToRemove ){
  var itemToRemoveIndex = -1
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if ( item === itemToRemove ) {
        var itemToRemoveIndex = i;
      }
    }
  }
  if ( itemToRemoveIndex === -1 ) {
    console.log("That item is not in your cart.");
  } else {
    cart.splice( itemToRemoveIndex, 1);
    return cart;
  }
}


function placeOrder( creditCardNumber ) {
  if  ( creditCardNumber === undefined ) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  }
  cart = [];
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
