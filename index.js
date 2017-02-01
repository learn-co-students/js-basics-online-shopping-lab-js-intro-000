var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)

  cart.push({ [item] : price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  const hasItem = cart.length

  if(!hasItem) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsTotals = []

  for (let i = 0; i < hasItem; i++) {
    let itemTotal = cart[i]
    let item = Object.keys(itemTotal)[0]
    let price = itemTotal[item]

    itemsTotals.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsTotals.join(', ')}.`)
}

function removeFromCart(item) {
    let cartHasItem = false

    for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cartHasItem = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if(!cartHasItem) {
    console.log("That item is not in your cart.")
  }
  return cart
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

function placeOrder(creditCard) {
  if (!creditCard) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)

  cart = []
}
