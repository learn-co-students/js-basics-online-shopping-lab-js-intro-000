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
 //create an Object
 let toAdd = {
   'itemName': item,
   'itemPrice': Math.floor(Math.random()*100)
 }
 console.log(toAdd)

 cart.push(toAdd)
  console.log(cart)
  console.log(getCart())

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  //iterate over contents of the cart
  // return strings as appropriate
  //check if cart is empty first
  if (getCart().length === 0) {
    return "Your shopping cart is empty."
  }
  else if (getCart().length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else if (getCart().length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  let result= "In your cart, you have "
  for (let i = 0; i < getCart().length -1; i++) {
    result+= getCart()[i]["itemName"] + " at $" + getCart()[i]["itemPrice"] + ", "
    
    
  }
  result += "and " + getCart()[cart.length -1]["itemName"] + " at $" + getCart()[cart.length-1]["itemPrice"] + "."
  return result
}

function total() {
  // var t=0
  // for (let i=0; i<cart.length; i++){
  //   t += cart[i]["itemPrice"]
  // }
  // return t 
  // write your code here
  return getCart().reduce((sum, i) => sum + i.itemPrice, 0)
}

function removeFromCart(item) {
  let cart = getCart()
  for (let i=0; i < cart.length; i++){
    if (cart[i].itemName === item ){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
