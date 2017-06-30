var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 99) + 1
 var obj = new Object({[item]:price})
 cart.push(obj)

 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  var s = ""
  if (cart.length === 0) {
    s += "Your shopping cart is empty"
  } else {
    s += "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      let itemName = Object.keys(cart[i])[0];
      let itemPrice = cart[i][itemName];
      s += " " + itemName + " at $" + itemPrice

      // three or more
      if (cart.length > 2 && i < cart.length-1) {
        s += ","
      }

      //more than one
      if (cart.length > 1 && i === cart.length-2) {
        s+= " and"
      }
    }
  }

  s += "."
  console.log(s)
  return s

}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    let itemName = Object.keys(cart[i])[0];
    let itemPrice = cart[i][itemName];
    total += itemPrice
  }

  return total
}

function removeFromCart(item) {
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      cart.splice(i,1)
      removed = true
    }
  }

  if (!removed) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  var s = ""

  if (!cardNumber) {
    s = "Sorry, we don\'t have a credit card on file for you."
  } else {
    var t = total()
    s += "Your total cost is $" + t + ", which will be charged to the card " + cardNumber + "."
    cart = []
  }

  console.log(s)
}
