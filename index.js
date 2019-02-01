var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100) + 1;
  var newitem = {itemName: item, itemPrice: price };
  cart.push(newitem);
  return item + " has been added to your cart."
}

function viewCart() {
  if (cart === undefined || cart.length == 0) {
    return "Your shopping cart is empty.";
  } else {
    if (cart.length===1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
      var thing = "In your cart, you have ";
    for (var i = 0; i < cart.length -1; i++) {
      thing += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
    thing += `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`
          }
      return thing
    }
}

function total() {
var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
}
return sum}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (item === cart[i].itemName) {
      return cart.splice(i,1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let text = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return text;
}
}
