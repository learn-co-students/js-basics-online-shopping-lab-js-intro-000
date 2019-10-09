var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 var obj = {};
cart.push({[item]: price })
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var inYourCart = "In your cart, you have "
  if (cart.length > 0) {
    for (var i = 0; i < cart.length ; i++) {
        for (var key in cart[i]) {
          inYourCart += `${key} at $${cart[i][key]}`
            if (i === cart.length - 1) {
              inYourCart += "."
            }
            else {
              inYourCart += ", "
            }
        }
      }

    console.log(inYourCart) }
  else {
    console.log("Your shopping cart is empty.")
  }
}


function total() {
  var sum = 0
  for (var i = 0; i<cart.length; i++) {
    for (var key in cart[i]) {
      sum += cart[i][key]}
    }
  return sum;
}

function removeFromCart(item) {
  var itemInCart = false
  for (var i = 0; i<cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1)
        return cart;
      }
      }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
}



function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
