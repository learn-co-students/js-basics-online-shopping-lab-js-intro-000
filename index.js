var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  cart.push(new Object({[item] : Math.floor(Math.random() * 100)}))
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (!getCart().length)
    console.log( "Your shopping cart is empty.")
  else{
    var out = "In your cart, you have "
    for (let i = 0 ; i < cart.length; i++)
      for (var item in cart[i])
        out += `${item} at $${cart[i][item]}${i < cart.length - 1 ? ', ' : '.'}`
    console.log(out)
  }
}

function total() {
  var count = 0
  for (var item in cart)
    for (var price in cart[item])
      count += cart[item][price]
  return count
}

function removeFromCart(item) {
  var exist = false
  for (let i = 0; i < cart.length; i++)
    for (var item_c in cart[i])
      if (item_c === item){
        cart.splice(i, 1)
        exist = true
      }
  console.log(`${exist ? '' : "That item is not in your cart."}`)
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    console.log("We don't have a credit card on file for you to place your order.")
  else
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.length = 0
  return cart
}
