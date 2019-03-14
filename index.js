var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let itemName = item;
 let itemPrice = Math.floor(Math.random() * 100);
 cart.push({itemName,itemPrice});
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length) {
    return cart.reduce((a,c,i,arr) => `${a} ${i === arr.length -1 && arr.length > 1? "and " : ""}${c.itemName} at $${c.itemPrice}${i === arr.length -1 ? "." : ","}`, `In your cart, you have`);
  }
  return `Your shopping cart is empty.`
}

function total() {
  // write your code here
  return cart.reduce((a,b) => a+b.itemPrice, 0 );
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  let totalCost = total();
  cart = [];
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
