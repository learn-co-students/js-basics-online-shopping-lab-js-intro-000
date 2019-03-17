var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random()*10))})
 console.log(cart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    var inventory = []
    for (var i in cart) {
      var nameHolder = Object.entries((cart)[i])[1]
      var priceHolder = Object.entries((cart)[i])[3]
      inventory.push(`${nameHolder[0]} at $${priceHolder[1]}`)
    }
    return `In your cart, you have ${inventory}.`
  }
  else {
    return `Your shopping cart is empty.`
  }
}

function total() {
  let cartTotal = []
  for (let i = 0; i < cart.length; i++){
    cartTotal.push(cart[i].itemPrice)
  }
  return cartTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].itemName === item) {
    return cart.splice(i,1)

    }
    else {
      return `That item is not in your cart.`
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`), (cart=[])
  }
}
