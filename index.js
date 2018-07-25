var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100))
  cart.push({ itemName: item, itemPrice: price })
  {
   return `${ item } has been added to your cart.`
 }
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else {
  if(cart.length > 0) {
    var item = cart.itemName()
    var price = cart.itemPrice()
    for (var i = 0; i < cart.length; i++) {
    return `In your cart, you have, ${ item[i] } at $${ price[i] }.`
    }
    }
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
