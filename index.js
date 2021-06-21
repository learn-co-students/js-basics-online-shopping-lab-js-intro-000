var cart = [];
 var numbers = []
 var sum = 0

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min
  
   var itemHash = {
     itemName: item,
     itemPrice: random
   }
   
   cart.push(itemHash)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
    if (!cart.length) {
    console.log("Your shopping cart is empty.")
  } 
  
  var itemAndPrices = []
  var items = Object.keys(cart)
  for (var i=0; i<cart.length; i++) {
    var item = items[i]
    var price = cart[item]
    
        itemAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`)
}


function total(){
  let numbers = []
  let sum = 0 
  
  for (var i = 0; i < cart.length; i++) {
    numbers.push(cart[i].itemPrice)
    sum += numbers[i]
  }
  return sum
}

function removeFromCart(item) {
  const itemName = []
    
  for(var i = 0; i < cart.length; i++){
    itemName.push(cart[i].itemName)
    }
  
  const index = itemName.indexOf(item)
  
  if(index > -1){
     cart.splice(index, 1)
     return cart
  } else {
    return `That item is not in your cart.`
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