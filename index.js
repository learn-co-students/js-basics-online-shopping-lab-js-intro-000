var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(newObj)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}

function total() {
  var totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].itemPrice
    /* Also you can write totalCost =
    totalCost + cart[i].itemPrice like totalCost+= cart[i].itemPrice, its
    shorter notation for the same thing.*/
  }
  return totalCost
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you."
} else {
  var totals = total()
  cart = [];
}
return `Your total cost is $${totals}, which will be charged to the card ${cardNumber}.`
}

// helper functions
function getRandomInt(min, max) {
}

function generateCartItem(itemName) {

}
