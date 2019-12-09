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
 function getRandomIntInclusive(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
 }
 let newItem = {itemName: item, itemPrice: getRandomIntInclusive(1,100) }
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let str = "In your cart, you have "
  let counter = 0
  if (Array.isArray(cart) && cart.length) {
    while (counter < cart.length) {
      if (cart.length === 1) {
        return str += `${cart[counter].itemName} at $${cart[counter].itemPrice}.`
      } else if (counter === cart.length - 1) {
        str +=  `and ${cart[counter].itemName} at $${cart[counter].itemPrice}.`
        return str
      } else { 
        str += `${cart[counter].itemName} at $${cart[counter].itemPrice}, `
        counter++
      }
    }
  } else {
  return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  return cart.reduce((total, value) =>{
    return total + value.itemPrice
  }, 0)
}

function removeFromCart(item) {
  // write your code here
  let foundItem = cart.find(element => item === element.itemName)
  if (foundItem) {
    let index = cart.indexOf(foundItem)
    return cart.splice(index, 1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    let itemTotal = total(cart)
    cart = []
    return `Your total cost is $${itemTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
