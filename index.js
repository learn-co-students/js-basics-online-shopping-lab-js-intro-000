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
};

function addToCart (item) {
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`)
  return cart;
};

function viewCart () {
  if (cart.length == 0) console.log("Your shopping cart is empty.");
  else {
  var text = 'In your cart, you have ';
  for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (i < cart.length - 1)
          text += item + ' at $' + cart[i][item] +', ';
        else {
          text += item + ' at $' + cart[i][item] +'.';
        }
}
}
  console.log(text);
  }
};

function removeFromCart (thing) {
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i])
  if (item == thing) {
    cart.splice(i,1);
    return cart;
  }
  }
  var not = 0;
  for (var i = 0; i < cart.length; i++) {
  if (!(cart[i].hasOwnProperty(thing)))
    not += 1;
  }
 if (not == cart.length)
    console.log('That item is not in your cart.');
};


function placeOrder (cardNumber) {
  if (cardNumber == null)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0;
};
