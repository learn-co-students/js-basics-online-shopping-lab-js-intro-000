var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 var price = Math.floor((Math.random() * 100) + 1)
 var object = {itemName : name, itemPrice : price};
 cart.push(object);
 return `${name} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${Object.values(cart[0])} at $${Object.values(cart[0])}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
