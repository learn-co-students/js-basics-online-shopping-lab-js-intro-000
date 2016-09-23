var cart = [{pizza: 90}, {icecream: 30}];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100+1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    let items = []
    cart.forEach(item => items.push(`${Object.keys(item)[0]} at $${item[Object.keys(item)[0]]}`))
    console.log('In your cart, you have ' + items.join(', ') + '.')
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(removeMe) {
  let cartLength = cart.length
  cart = cart.filter( item => Object.keys(item)[0] !== removeMe)
  if (cart.length == cartLength) {
    console.log('That item is not in your cart.')
  }
}


function placeOrder(creditCardNum) {
  if (creditCardNum) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`)
    setCart([])
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}











