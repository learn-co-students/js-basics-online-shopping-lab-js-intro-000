var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1
 var add = {"itemName": item, "itemPrice": price}
 cart.push(add)
 return (item + " has been added to your cart.")
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.")
  }
  else {
    var string = "In your cart, you have "
    for (var i = 1; i <= cart.length; i++) {
      if (i === cart.length && cart.length > 1) {
        string = string + "and " + cart[i - 1].itemName + " at $" + cart[i - 1].itemPrice + "."
      }
      else if (i === cart.length) {
        string = string + cart[i - 1].itemName + " at $" + cart[i - 1].itemPrice + "."
      }
      else {
        string = string + cart[i - 1].itemName + " at $" + cart[i - 1].itemPrice + ", "
      }
    }
  }
  return string
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,i)
      return "Item removed."
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var price = total()
    cart = []
    return ("Your total cost is $" + price + ", which will be charged to the card " + cardNumber + ".")
  }
}
