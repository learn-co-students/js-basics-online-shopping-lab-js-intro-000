var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var addItem = {itemName:item, itemPrice:Math.floor(Math.random()*100 + 1)}
 cart.push(addItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartItems = "In your cart, you have "
  switch (cart.length) {
    case(0) :
      return "Your shopping cart is empty."
    case(1) :
      return cartItems + `${cart[0].itemName} at $${cart[0].itemPrice}.`
    default :
      for (let i = 0; i < cart.length-1; i++) {
        cartItems+=`${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      return cartItems + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  var totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }

  return totalPrice
}

function removeFromCart(item) {

  for (let i = 0; i < cart.length; i ++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1)
      return cart
    }
  }

  return "That item is not in your cart."

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalPrice = total()


  while (cart.length != 0) {
    removeFromCart(cart[0].itemName)
  }

  return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
}
