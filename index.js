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
};


function getCart()  {
  return cart;
};


function addToCart(item)  {
  var price = Math.floor(Math.random(0, 100) * 100);
  var obj = {
    [item]: price
  }
  cart.push(obj);
  console.log(item+ " has been added to your cart.");
  return cart;
};


function viewCart() {
  var cartStructure = [];

  if (!cart.length)  {
    console.log("Your shopping cart is empty.");
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      var bothCombined = cart[i];
      var extractItem = Object.keys(bothCombined);
      var extractPrice = bothCombined[extractItem];
      cartStructure.push(`${extractItem} at \$${extractPrice}`);
    }
    var joinAll = cartStructure.join(', ');
    console.log("In your cart, you have " +joinAll+ ".");
  }
};


function removeFromCart(item) {

  var inCartFlag = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCartFlag = true;
      cart.splice(i, 1);
    }
  }
  if (!inCartFlag)  {
    console.log("That item is not in your cart.");
  }
  return cart;
};


function placeOrder(cardNumber) {
  if (!cardNumber)  {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
