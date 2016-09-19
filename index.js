var cart = [];

function getCart() {
  return cart;
}

function addToCart(name) {
  var price = Math.floor(Math.random() * 100);

  cart.push({ [name]: price });

  console.log(`${name} has been added to your cart.`);

  return cart;
}

// [0, 1, 2, 3, 4]
// remove '2'
// 0 -> (2-1) + (2+1) -> length

function removeFromCart(item) {
  var index = -1;
  if (cart.some((x, i) => {
    index = i;
    return Object.keys(x)[0] === item;
  })) {
    cart.splice(index, 1);
  } else {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function viewCart() {
  var EMPTYCART = 'Your shopping cart is empty.';
  var cartLen = cart.length;
  var output = 'In your cart, you have ';
  var i, item, name, price;

  if (!cartLen) {
    console.log(EMPTYCART);
    return EMPTYCART;
  };

  // cart = [ {socks: 42}, {pants: 57}, {sunglasses: 12} ]
  // cart[0] = {socks: 42}
  // Object.keys(cart[0]) = ["socks"]
  // Object.keys(cart[0])[0] = "socks"


  for (i = 0; i < cartLen; i += 1) {
    item = cart[i];
    name = Object.keys(item)[0];
    price = item[name];

    output += `${name} at $${price}`;
    output += (i < cartLen - 1) ? ', ' : '.';
  }

  console.log(output);

  return output;
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

function placeOrder(card) {
  if (!card) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
  cart = [];
  return cart;
}
