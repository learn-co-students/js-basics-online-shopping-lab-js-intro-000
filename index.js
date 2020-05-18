var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) + 1 };
cart.push(item);
return `${item.itemName} has been added to your cart.`
}

function viewCart() {
var newArray = []
for (let i = 0; i < cart.length; i++) {
  newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)}
  if (cart.length === 0) {return `Your shopping cart is empty.`}
  else if (cart.length === 1) {return `In your cart, you have${newArray}.`}
  else {return `In your cart, you have${newArray.slice(0, newArray.length - 1)}, and${newArray.slice(-1)}.`}
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++)
  {if (`${item}` === cart[i].itemName) {return cart.splice(i, 1)}
}
if (cart.includes(`${item}`) === false) {return `That item is not in your cart.`}
}

function placeOrder(cardNumber) {var cartTotal = total()
  {if (cardNumber === undefined) {return `Sorry, we don't have a credit card on file for you.`}
  else {cart.splice(0, cart.length);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`}}}
