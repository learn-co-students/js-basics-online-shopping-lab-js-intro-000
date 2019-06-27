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
 var cart_obj = {}
 cart_obj["itemName"] = item
 cart_obj["itemPrice"] = Math.floor(Math.random()*101)
 cart.push(cart_obj)
 return `${cart_obj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1) {
      return "Your shopping cart is empty."
  } else {
    //store the items string in an array
    var list = []
    for (var i = 0; i < cart.length; i++) {
      list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    if (list.length === 1) {
      //if list contains only one item
      return `In your cart, you have ${list[0]}.`
    } else {
      //if list contains two or more items
      var buffer = list.join(", ")
      //add "and" before the last element
      buffer = buffer.replace(`${list[list.length-1]}`, `and ${list[list.length-1]}.`)
      return `In your cart, you have ${buffer}`
    }
  }
}

function total() {
  // write your code here
  var i = 0
  var sum = 0
  while(i < cart.length) {
    sum += cart[i].itemPrice
    i += 1
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total()
    cart = [] //emptying cart
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
