
function setCart() {
  var cart = {};
}
function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var cart = getCart();
  cart[item] = price;
  console.log(`${item} has been added to your cart`);
  return cart;
}
