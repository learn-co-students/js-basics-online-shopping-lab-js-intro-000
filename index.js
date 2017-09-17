var cart = [];

function getCart() {
 return cart;
};

function setCart(c) {
  cart = c;
  return cart;
};

function addToCart(item) {

 var price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: price });


  console.log(`${item} has been added to your cart.`);

  return cart;
};

function viewCart() {

  if(!cart.length) {
    console.log("Your shopping cart is empty.");
  }

  var prices = [];

  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    if(cart.length === 1) {
      prices.push(`${item} at $${price}.`);
    } else if(cart.length === 2 && i === 0) {
      prices.push(`${item} at $${price}`);
    }
    else if(i === cart.length -1) {
      prices.push(`and ${item} at $${price}.`);
    } else {
      prices.push(`${item} at $${price},`);
    }
  }
  console.log(`In your cart, you have ${prices.join(' ')}`);
};

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
          total += cart[i][item]
    }
  }
  return total;
};

function removeFromCart(item) {
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }

  if(!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
};

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
};
