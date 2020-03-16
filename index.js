var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let currentItem = {}
  currentItem.itemName = item
  currentItem.itemPrice = Math.floor(Math.random()*100)
  cart.push(currentItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else {
    let currentlyInCart = ["In your cart, you have"]
    for (let i = 0; i < cart.length; i++){
      if (i ===0){
        currentlyInCart[0] += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if (i !== cart.length-1 && i !== 0){
        currentlyInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      else if (i === cart.length-1 && cart.length > 1){
        currentlyInCart.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
    let ans = (currentlyInCart.join(", "))
    return ans += "."
  }
}

function total() {
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      return cart.splice(i, 1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    let returnMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return returnMessage
  }
}
