var cart = [];

function getCart () {
  return cart;
}

function addToCart (item) {
  var price = Math.random()*100;
  price = Math.floor(price);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart () {
  if (cart.length > 0) {
    var itemAdd = [];
    for (var i=0; i < cart.length; i++) {
      var cartItem = Object.keys(cart[i])[0];
      var cartPrice = cart[i][cartItem];
      itemAdd.push(`${cartItem} at \$${cartPrice}`);
    }
    console.log(`In your cart, you have ${itemAdd.join(', ')}.`);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart (item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
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

function placeOrder (ccNumber) {
  if (ccNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccNumber}.`);
    cart = [];
  }
}
