var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName:item,itemPrice:(Math.floor(Math.random()*100))})
return `${item} has been added to your cart.`
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
 var sum=0
 for(var i=0;i<cart.length;i++){
 sum += cart[i].itemPrice
 }
 return sum
}

function removeFromCart(item) {
  var sum = 0
  for (let i = 0; i < cart.length; i += 1) {
    if (item !== cart[i].itemName) {
      sum += 0
    } else if (item === cart[i].itemName) {
      sum += 1;
      cart.splice(i, 1);
    }
  }
  if (sum === 0) {
    return "That item is not in your cart."
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)  {
  return "Sorry, we don't have a credit card on file for you."
} else {
  let sum = total();
  cart.splice(0);
  return "Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".";
}
}
