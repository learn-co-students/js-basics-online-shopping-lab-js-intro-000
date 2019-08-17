var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  cart.push({ [item]: itemPrice });
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
    if (!cart.length) {
      console.log('Your shopping cart is empty.')
    } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  } else if (cart.length >= 3) {
    var itemAndPrice = [];
    for (var i = 0; i < cart.length - 1; i++) {
      itemAndPrice.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    console.log(`In your cart, you have ${itemAndPrice.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
  }
}



function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
  sum += Number(Object.values(cart[i]));
  }
  return sum;
}


function removeFromCart(item) {
  var isItemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    var foundItem = Object.keys(cart[i]);
    console.log(`${item} vs ${foundItem}`);
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i, 1);
      isItemInCart = true;
    }
  }
  if (!isItemInCart) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  var s = total();
  if (!cardNumber) {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
  } else if (cardNumber){
    console.log(`Your total cost is $${s}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }

}
