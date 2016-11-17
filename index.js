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

  var price = Math.floor(Math.random() * 100)

  cart.push({[item]: price})

  console.log(`${item} has been added to your cart.`)

  return cart
}

//I need "In your cart, you have " to be OUT of the loop part.

function viewCart() {
//try to make the first string a variable
//use variable += then the for loop... the for loop should tack the looped info
//onto the variable, and then at the bottom i can console.log the variable with the stuff stuck on

  var inCart = "In your cart, you have "

  if (cart.length > 0) {
    for (var i = 0, l = cart.length; i < l; i++) {
      inCart += `${cart[i]} at ${cart[cart[i]]}, `
    }
    console.log(inCart)
  }
  else {
    console.log("Your shopping cart is empty.")
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
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    //empty the cart here
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

}
