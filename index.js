var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var ran = Math.random()

  cart.push({[item] : Math.floor(ran * 10)})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.')
  }
  var strings = [];
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var key = Object.keys(cart[i])[0];
    var value = obj[key];
    strings.push(`${key} at $${value}`);
    //console.log(`In your cart, you have ${key} at $${value}.`);
  }
  var words = 'In your cart, you have'
  if (cart.length === 1) {
    console.log(`${words} ${strings}.`)
  }
  if (cart.length === 2) {
  //  console.log(`${words} ${strings[0]} and ${strings[1]}.`)
   console.log(`${words} ${strings.join(' and ')}.`)
  }
  if (cart.length >= 3) {
    console.log(`${words} ${strings.slice(0, strings.length - 1).join(', ')}, and ${strings[strings.length - 1]}.`)
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var key = Object.keys(cart[i])[0];
    var value = obj[key];
    total += value;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    if (item === key) {
      cart.splice(i, 1);
    }
  }
  console.log('That item is not in your cart.')
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  for (var i = cart.length; i > -1; i--) {
    cart.pop(1);
  }
}
