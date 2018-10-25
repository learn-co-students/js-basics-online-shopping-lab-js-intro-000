var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1
 var obj = { itemName: item, itemPrice: price}
 cart.push(obj)
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length > 1) {
    var string = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      // var object = cart[i]
      var name = cart[i].itemName
      var price = cart[i].itemPrice
      if (i < cart.length - 1) {
        string = string.concat(name + " at $" + price + ", ")
      } else {
        string = string.concat("and " + name + " at $" + price + ".")
      }
    }
    return string
  } else if (cart.length === 1) {
    var string = "In your cart, you have "
    var name = cart[0].itemName
    var price = cart[0].itemPrice
    string = string.concat(name + " at $" + price + ".")
    return string
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var tot = 0
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    var price = obj.itemPrice
    tot = tot + price
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
  var initLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    var name = cart[i].itemName
    if (name === item) {
      var removed = cart.splice(i,1)
      return cart
    }
  }
  if (initLength === cart.length) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var price = total()
    cart = [];
    return "Your total cost is $" + price + ", which will be charged to the card " + cardNumber + "."
  }
}
