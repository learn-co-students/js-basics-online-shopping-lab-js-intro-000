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
 var itemDescription = {itemName: item, itemPrice: Math.floor(Math.random()*100)+1}
 cart.push(itemDescription)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    return 'Your shopping cart is empty.'
  }
  var itemsAtPrice = []
  for (let i=0; i<cart.length; i++) {
    itemsAtPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (itemsAtPrice.length === 1) {
    return `In your cart, you have ${itemsAtPrice}.`
  }
  itemsAtPrice[itemsAtPrice.length-1] = `and ${itemsAtPrice[itemsAtPrice.length-1]}`
  return `In your cart, you have ${itemsAtPrice.join(', ')}.`
}


function total() {
  // write your code here
  var total=0
  for (let i=0; i<cart.length; i++) {
    total = parseInt(cart[i].itemPrice, 10) + total
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var matchIndex = []
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      matchIndex.push(i)
    }
  }
  if (matchIndex.length === 0) {
    return 'That item is not in your cart.'
  }
  cart.splice(matchIndex[0], 1)
  return cart
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  var order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return order
}
