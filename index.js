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
 var itemObject = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
 cart.push(itemObject);
 return itemObject.itemName + ' has been added to your cart.'
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have " 
    for (var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length -1].itemName} at $${cart[cart.length - 1].itemPrice}.` 
  }
}

function total() {
  // write your code here
  var num = [];
  var sum = 0; 
  for(var i = 0 ; i < cart.length; i++) {
    num.push(cart[i].itemPrice);
    sum += num[i]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
for (var i = 0; i < cart.length; i++) {
  if (item === cart[i].itemName) {
    cart.splice(i, 1);
    return cart;
  }
}
if (item != cart[item]) {
  return "That item is not in your cart."
}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart = []
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}