var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here; 
 var price = Math.random() *  100
 price = Math.floor(price)
 cart[cart.length]={itemName: item, itemPrice: price}
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var str = `In your cart, you have`
  if (cart.length === 1) {  str += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
      return str}
  if (cart.length === 0)  {return "Your shopping cart is empty." }  
  
  for (let i = 0; i < cart.length; i++) {
    if (i===cart.length-1)  { str += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`  }
    else { str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`  }
    
  }
  return str
  
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
    }  
  return total
}

function removeFromCart(item) {
  // write your code here
  var whichItem = 0
  for (let i = 0; i < cart.length+1; i++) { 
    if (i === cart.length) {  return "That item is not in your cart." }
    
    if (cart[i].itemName === item) {  whichItem = i
    break} 
   
  }
    
    
   if (whichItem===0) {cart.shift()
   return 0
   }
   
   else if (whichItem===cart.length-1) {cart.pop()  
   return 0}
   
   else {cart.splice(whichItem,1)
     return 0
   } 
    
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var n = total()
    for (let i = 0; i < cart.length+2; i++) { 
      cart.pop()   }
    
    return `Your total cost is $${n}, which will be charged to the card ${cardNumber}.`
  }
  else { return "Sorry, we don't have a credit card on file for you."  }
}


addToCart("a")
addToCart("b")
addToCart("c")
console.log(placeOrder(9))
console.log(cart)
