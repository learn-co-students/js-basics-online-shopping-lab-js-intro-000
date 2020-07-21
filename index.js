var cart = [];
var numbers = []
var sum = 0

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //randomly generate price between 1 and 100
 let min = 1
 let max = 100
 let random = Math.floor(Math.random() * (max - min)) + min
//create new object representing item consisting of itemName: itemPrice
var itemObject = {
  itemName: item,
  itemPrice: random
}
//add items to cart
cart.push(itemObject)
//return itemName has been added to your cart. after adding new item to cart
return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    var oneItem =  `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return oneItem;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length >= 3) {
      for (let i = 0; i < cart.length; i++) {
        var threePlusItems = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}${threePlusItems}`
}
}

function total() {
  // write your code here
let numbers = []
let sum = 0
for (let i = 0; i < cart.length; i++) {
  numbers.push(cart[i].itemPrice)
    sum += numbers[i]
}
return sum;
}

function removeFromCart(item) {
  // write your code here
//if item is there, remove from cart destructively
const itemName = []
for (let i = 0; i < cart.length; i++) {
  itemName.push(cart[i].itemName)
}
const index = itemName.indexOf(item)
if (index > - 1) {
  cart.splice(index,1)
  return cart
} else {
  return `That item is not in your cart.`
}
}
//if not, return "that item is not in your cart"


function placeOrder(cardNumber) {
  // write your code here
if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you."
} else {
  const total1 = total()
  cart = []
  return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
}
}
