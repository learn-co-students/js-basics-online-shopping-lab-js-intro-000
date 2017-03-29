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
  var price = Math.floor((Math.random() * 100));
  cart.push({[item]: price});
  console.log(item+" has been added to your cart.")
  return cart;
}

function viewCart() {
  //var price = Object.keys(cart);
  var totalPrice = 0;
  var itemAndPrice = "In your cart, you have";
  if (cart.length===0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var index in cart) {
      var item = cart[index];
      itemAndPrice = `${itemAndPrice} ${item} at ${cart[item]}, `;
    }
    var subString = `In your cart, you have ${itemAndPrice}`;
    var string = (0,subString.length-2);
    console.log(string + ".");
  }
}

function removeFromCart(item) {
  if (cart.hasOwnProperty([item]) === "true") {
    delete cart.item;
  } else {
  return "That item is not in your cart."
  }
  return cart;
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  }
  cart = [];
}
