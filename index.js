var cart = []

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
  var price = Math.floor(Math.random()*100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart() {
  if (cart.length === 0){
      console.log("Your shopping cart is empty.")
    }else{
      var cartArray = []
      var output = "In your cart, you have"
      for (var i = 0 ; i < cart.length ; i++) {
         var item = Object.keys(cart[i])
         cartArray.push(` ${item} at $${cart[i][item]}`)
       }
    console.log(output + cartArray + ".")
  }
}
function removeFromCart(item) {
  for (var i = 0; i < cart.length ; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.shift(item)
      return cart
    }
  }
      console.log("That item is not in your cart.")
}

function placeOrder(ccN) {
  if (ccN == null){
    var text = 'We don\'t have a credit card on file for you to place your order.'
    console.log(text)
  }console.log(`Your total cost is $${total()}, which will be charged to the card ${ccN}.`)
  return cart = []
}
