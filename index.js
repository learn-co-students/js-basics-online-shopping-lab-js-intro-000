var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObj = {};
   var price = Math.floor(Math.random() * 10)

   if (cartObj[item] === undefined){
     cartObj[item] = price
     cart.push(cartObj)
     console.log(item + " has been added to your cart.")
   }
   return cart
 }

function viewCart() {
  var view = "In your cart, you have "

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var items = Object.keys(item)
    var itemPrice = item[items]
    var lastItem = cart.length - 1
    if (i !== lastItem) {
      view += items + " at " + "$" + itemPrice + ", "
    } else if (i === lastItem) {
      view += items + " at " + "$" + itemPrice + "."
    }
  }
  console.log(view)
}



function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var items = Object.keys(item)
    var price = item[items]
    sum += price
  }
  return sum
}

function removeFromCart(item){
    var cart = addToCart("pizza")
    var i = 0
    var theItem = cart[i]
    var name = theItem.hasOwnProperty(item)
    if (!name) {
      console.log ("That item is not in your cart.")
    } else {
      cart.splice(i)
      return cart
    }
  }

function placeOrder(cardNumber) {
  var t = total()
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else if (cardNumber !== undefined) {
    console.log("Your total cost is $" + t + ", which will be charged to the card " + cardNumber + ".")
  }
  cart.length = 0
}
