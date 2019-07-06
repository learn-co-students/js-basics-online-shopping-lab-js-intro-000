var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var addedItem = { itemName: item, itemPrice: Math.floor(Math.random()*100) };
 cart.push(addedItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  const itemAndPrice = [];
 if (!cart.length){
   return 'Your shopping cart is empty.';
} else { for (var i = 0; i < cart.length - 2; i++){
  itemAndPrice.push(`${cart.i.itemName} at $${cart.i.itemPrice},)
  
}
  
}
  return `In your cart, you have ${itemAndPrice}, and ${length-1} `;
}}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}