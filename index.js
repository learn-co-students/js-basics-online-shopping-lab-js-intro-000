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
 let min = 1
 let max = 100
 let random = Math.floor(Math.random() * (max - min)) + min

 var objecto = {
   itemName: item,
   itemPrice: random
 }

 cart.push(objecto)
 return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
 if (cart == 0) {
   return "Your shopping cart is empty."
 } else if (cart.length == 1) {
   return `In your cart, you have ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
} else if (cart.length > 1) {
  let cartItems = []

  let last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`

  for(let i = 0; i < cart.length - 1; i++){
    cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  return `In your cart, you have ${cartItems.join(', ')}, and ${last}`
}
}

function total() {
  // write your code here
  let numbers = []
   let sum = 0

   for (var i = 0; i < cart.length; i++) {
     numbers.push(cart[i].itemPrice)
     sum += numbers[i]
   }
   return sum
 }


function removeFromCart(item) {
  // write your code here
  if (cart == 0) {
    return "That item is not in your cart."
  } else {
    var itemToRemove = [];
    cart.splice(1,1);
    return itemToRemove
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cart == 0) {
    return `Sorry, we don\'t have a credit card on file for you.`
  } else {
    var total1 = total();
    cart = [];
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}
f
