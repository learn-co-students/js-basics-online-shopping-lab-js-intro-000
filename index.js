var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem= {itemName: item, itemPrice: Math.random()*10}
  cart.push(newItem)
  return `${item} has been added to your cart.`
}


function viewCart() {
  var inCart = ''
  if (cart.length===0) {
    return "Your shopping cart is empty."

  } else if (cart.length===1){
    var oneItem= `${cart[0].itemName} at $${cart[0].itemPrice}`
    return 'In your cart, you have ' + oneItem +'.'

  } else {
    for (let i=0; i<(cart.length-1); i+=1) {
      inCart += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    var lastItem= `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`
    var showCart= 'In your cart, you have ' + inCart + lastItem + '.'
  }
  return showCart
}


function total() {
  var sum = 0
   for (let i=0; i<(cart.length); i+=1) {
     sum += cart[i].itemPrice
   }
   return sum
}

function removeFromCart(item) {
  for (let i=0; i<(cart.length); i+=1) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    } else {
      return 'That item is not in your cart.'
    }
}

function placeOrder(cardNumber) {
  var cardTotal = total()
  if (cardNumber >0) {
    var cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }

}
