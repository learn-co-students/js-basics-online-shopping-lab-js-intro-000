var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var newItem = {}
 var price = Math.floor(Math.random() * 100);

 newItem[item] = price
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)

 return cart
}

function viewCart() {
  // write your code here
  if (!cart.length) {
      return console.log('Your shopping cart is empty.')
     }

     var itemsNPrice = []
     for (var i = 0; i < cart.length; i++) {
    var itemAttrs = cart[i]
       var item = Object.keys(itemAttrs)[0]
       var price = itemAttrs[item]

       itemsNPrice.push(`${item} at $${price}`)
     }
     console.log(`In your cart, you have ${itemsNPrice.join(", ")}.`)
    }

function total() {
  // write your code here
  var total= 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
 let isInCart = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
 }
  if (!isInCart) {
    console.log("That item is not in your cart.")
  }
 }
function placeOrder(cardNumber) {
  if (!cardNumber) {
      console.log("We don't have a credit card on file for you to place your order.")
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
    }
   }
