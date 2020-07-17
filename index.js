var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 var price = Math.random() * 99 + 1
 var item = {itemName: name, itemPrice:price}
 cart.push(item)
 return `${name} has been added to your cart.`
 // write your code here
}

function viewCart() {
  var returnString = "In your cart, you have"
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  else {
    for (let i = 0; i<cart.length;i++){
      returnString = `${returnString} ${cart[i].itemName} at $${cart[i].itemPrice}`
      if (cart.length==1 || i==cart.length-1) {
        returnString = returnString
      }
      else if (i==cart.length-2) {
        returnString = `${returnString}, and`
      }
      else {
        returnString = `${returnString},`
      }
    }
   return `${returnString}.`
  }
}

function total() {
  var sum = 0
  for (let i = 0; i<cart.length;i++){
    sum = sum + cart[i].itemPrice
}
return sum
}

function removeFromCart(item) {
  for (let i = 0; i<cart.length;i++){
  if (item == cart[i].itemName) {
    cart.splice(i,1)
    return cart
  }
 }
 return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (arguments.length == 0) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    var sum = total()
    cart.splice(0,cart.length)
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
