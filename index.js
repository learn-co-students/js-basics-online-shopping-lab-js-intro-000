var cart;

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
function getCart(){
  return cart
}
function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart=[...cart, {[item]: 5}]
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var str = ""
  if (cart.length) {
  //console.log(`In your cart, you have socks at $5, puppy at $5, iPhone at $5.`)
    str += "In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        str += `${item} at $${cart[i][item]}`
      }
      if (i===l-1)
        str += "."
      else
        str += ", "
      }
      console.log(str)
  }
  else
    console.log("Your shopping cart is empty.")
}

function removeFromCart(item){
  let i = 0
  if (cart.length) {
    do {
        if (cart[i].hasOwnProperty(item)){
          cart = cart.splice(i+1)
          return cart
        }

      } while (i++ < cart.length)

    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  //"Your total cost is $${total()}, which will be charged to the card ${cardNumber}.". The function should empty the cart array.
  if (cardNumber) {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = new Array()
    return cart

  }
  else {
    console.log ("We don\'t have a credit card on file for you to place your order.")
  }
}
