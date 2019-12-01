var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: `${item}`,
    itemPrice: Math.floor(Math.random() * 100) + 1
  })
  var counter = cart.length - 1

  return `${cart[counter].itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) return 'Your shopping cart is empty.'
  if(cart.length === 1) return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  var itemList = [];
  for(var i=0; i < cart.length-1; i++){
      itemList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  itemList.push(` and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`)
  return `In your cart, you have${itemList}`
}

function total() {
  var sum = 0
  for(var i=0; i < cart.length; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var count;
  for(var i=0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1)
      count = 1
    }
  }
  if(count !== 1) return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) return 'Sorry, we don\'t have a credit card on file for you.'
  var totalSum = 0;
  for(var i=0; i < cart.length; i++){
    console.log(cart[i].itemPrice)
    totalSum = cart[i].itemPrice
  }
  cart = 0
  return `Your total cost is $${totalSum}, which will be charged to the card ${cardNumber}.`
}
