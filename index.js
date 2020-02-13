var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
 // write your code here
 cart.push({ ['itemName']: item, ['itemPrice']: getRandomInt(1, 100)});

 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (!getCart().length) {
    return "Your shopping cart is empty.";
  }

  const cartInText = [];
  if (getCart().length == 1) {
    cartInText.push(`${cart[0].itemName} at $${cart[0].itemPrice}`);
  } else {
    for (var i = 0; i < getCart().length - 1; i++) {
      cartInText.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }

    cartInText.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  return `In your cart, you have ${cartInText.join(', ')}.`;
}

function total() {
  // write your code here
  var total = 0;

  for (var i = 0; i < getCart().length; i++) {
    total += getCart()[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
