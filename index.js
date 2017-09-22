//var cart = [{oranges: 5}, {mango:4}, {banana:5}];
//var cart = [{mango:4}, {banana:5}];
var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item] : Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }else if (cart.length ===1) {
    const price = cart[0][Object.keys(cart[0])]
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${price}.`)
  }else if (cart.length ===2) {
    const price = cart[0][Object.keys(cart[0])]
    const price1 = cart[1][Object.keys(cart[1])]
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${price} and ${Object.keys(cart[1])} at $${price1}.`)
  }else {
    var lastItemKey = Object.keys(cart[cart.length -1])[0]
    var lastItemPrice = " and " + lastItemKey + " at $" + cart[cart.length -1][lastItemKey] + "."
    var concat = []
    for (var i = 0; i < cart.length-1; i++) {
      var key = Object.keys(cart[i])[0]
      var price = cart[i][key]
      concat.push(" "+ key + " at $" + price)
    }
    concat.push(lastItemPrice)
    console.log("In your cart, you have" + concat)
  }
}

//viewCart()

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0]
    total += cart[i][key]
  }
  return total
}

function removeFromCart(item) {
  var orginalLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    if (obj.hasOwnProperty(item)) {
      cart.splice(i,1)
    }else {
    }
  }
  if (orginalLength === cart.length){
    console.log("That item is not in your cart.")
  }else {
  }
  return cart
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "number") {
    const cartTotal = total()
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
