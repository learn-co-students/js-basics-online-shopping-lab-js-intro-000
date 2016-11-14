var cart = [];

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
  return cart;
}

// MY CODE HERE


function addToCart(item) {
//My price variable appears to be the issue. I think that adding the item to the array cart
//is not an issue but adding it as an object with the price variable is messing me up
  var price = Math.floor(Math.random() * 100)

  cart.push( {item: price} )

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
    }
  else {
    for (var itemNames in cart) {
    console.log(`In your cart you have ${itemNames} at ${cart[itemNames]}`)
    }
  }
}

function removeFromCart(thing) {
  if (cart.hasOwnProperty(thing)) {
    //remove the thing
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber.length == 0) {
    console.log("We don't have a credit card on file for you to place your order.")

  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    //empty the cart here
  }

}
