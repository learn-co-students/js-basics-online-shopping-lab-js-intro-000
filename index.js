var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}
//declare a function called viewCart
function viewCart() {
  const l = cart.length
// if length is 0 or null, return this sentence
  if (!l) {
    return console.log("Your shopping cart is empty.")
  }
//declare an empty array
  const itemsAndPrices = []
// run a for loop
  for (let i = 0; i < l; i++) {
// let initalizes a block scope variable
// set itemAndPrice = cart[i], which is whatever value is in cart equal to position i
// so cart[0], cart[1]
    let itemAndPrice = cart[i]
// let item = sets item equal to all the keys in itemAndPrice
    let item = Object.keys(itemAndPrice)[0]
// let price equal itemAndPrice, with the object keys passed through
    let price = itemAndPrice[item]
// Then push these the key and the price to the array you've created
    itemsAndPrices.push(`${item} at \$${price}`)
  }
// Log your item and prices, and join the entire array
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
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
