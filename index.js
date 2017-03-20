var cart = [];

function getCart() {
  return cart;
}

// From getRandomInt MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  let price = getRandomInt(1, 25);
  cart.push({ [item]: price });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  let result = 'Your shopping cart is empty.';

  if (cart.length !== 0 && cart !== null && cart !== [] && cart !== undefined) {
    result = 'In your cart, you have ';

    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (l - 1 === i) {
          result += `${item} at $${cart[i][item]}.`;
        } else {
          result += `${item} at $${cart[i][item]}, `;
        }
      }
    }
  }
  console.log(result);
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}


function placeOrder(n) {
  if (n !== null && n !== undefined && typeof n === 'number' ) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`);
    cart = [];
  } else {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
