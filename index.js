var cart = []

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart(){
  const l = cart.length

  if(!l) {
    console.log ("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {

var checker = false

  for (let i = 0, l = cart.length; i < l; i++) {

    let checker = cart[i].hasOwnProperty(item)

    if (checker == true) {
      cart.splice(i , 1);
    }
  }

  if (checker == false){
    console.log ('That item is not in your cart.')
  }
  return cart;
}

function placeOrder (cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

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
