var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  obj.itemName = item
  obj.itemPrice = Math.floor(Math.random() * 100)
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    var tempString = `In your cart, you have `
    var groceryItem = Object.values(cart[0])
    tempString = tempString.concat(`${groceryItem[0]} at $${groceryItem[1]}.`)
  }
  else if (cart.length === 2) {
    var tempString = `In your cart, you have `
    var groceryItem = Object.values(cart[0])
    tempString = tempString.concat(`${groceryItem[0]} at $${groceryItem[1]},`)
    var groceryItem2 = Object.values(cart[1])
    tempString = tempString.concat(` and ${groceryItem2[0]} at $${groceryItem2[1]}.`)
  }
  else {
    var tempString = `In your cart, you have `
    var groceryItem = Object.values(cart[0])
    tempString = tempString.concat(`${groceryItem[0]} at $${groceryItem[1]},`)
    var groceryItem2 = Object.values(cart[1])
    tempString = tempString.concat(` ${groceryItem2[0]} at $${groceryItem2[1]},`)
    var groceryItem3 = Object.values(cart[2])
    tempString = tempString.concat(` and ${groceryItem3[0]} at $${groceryItem3[1]}.`)
  }
  return tempString
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    var objectPrices = Object.values(cart[i])
    var itemPrice = objectPrices[1]
    totalPrice = totalPrice + itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var tempArray = []
  for (var i = 0; i < cart.length; i++) {
    var objectNames = Object.values(cart[i])
    tempArray.push(objectNames[0])
  }
  if (tempArray.includes(item) === true) {
    var placeHolder
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i] === item) {
        placeHolder = i
      }
    }
    cart.splice(placeHolder,1)
  }
  else {
    return "That item is not in your cart."
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    var totalCost = total()
    cart.splice(0)
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
