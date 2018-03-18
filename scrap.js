function addToCart(item) {
 // write your code here
 cart.push( {[item]:Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function addToCart(item) {
 // write your code here
 var cart = {
   [item]:Math.floor(Math.random()*100)
 }
   console.log(`${item} has been added to your cart.`)
   return cart
}

function viewCart() {
  // write your code here
  var openingLine = 'In your cart, you have '
  var firstItem = cart[0]
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length > 1) {
    for (var i = 0; i < cart.length - 1; i++) {
      var itemSpread = []
      var currentItem = cart[i]
      itemSpread.push(`${currentItem} at $${cart.currentItem}`)
    }
          var finalItem = cart.length - 1
          itemSpread.push(`and ${finalItem} at $${cart.finalItem}.`)
        console.log(openingLine + itemSpread)
      }
        else {
          console.log(openingLine + `${firstItem} at $${cart.firstItem}` + '.')
        }
/*  else for (var i = 0; i < cart.length - 1; i++) {
    var openingLine = 'In your cart, you have '
    var itemSpread = []
    var currentItem = cart[i]
    itemSpread.push(`${currentItem} at $${cart.currentItem}`)
      if (cart.length > 1) {
        var finalItem = cart.length - 1
        itemSpread.push(`and ${finalItem} at $${cart.finalItem}.`)
      console.log(openingLine + itemSpread)
    }
      else {
        console.log(openingLine + itemSpread + '.')
      }
    }
    */
}

function total() {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    var recurringTotal
    var currentItem = `${cart[i]}`
    recurringTotal = recurringTotal + cart.currentItem
  }
  return recurringTotal
}

unction viewCart() {
  // write your code here
  var spreadCart = []
  var openingLine = 'In your cart, you have'
  for (var i = 0; i < cart.length - 1; i++) {
    spreadCart.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  if (cart.length > 1) {
    var finalItem = cart.length-1
    spreadCart.push(` and ${Object.keys(cart[finalItem])} at $${Object.values(cart[finalItem])}.`)
    console.log(openingLine + spreadCart)
  }
  else if (cart.length = 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    console.log(openingLine + ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}` + '.')
  }
}
