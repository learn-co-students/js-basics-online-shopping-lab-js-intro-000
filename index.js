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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
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

  var inCart = "In your cart, you have "

  if (cart.length > 0) {
    for (var i = 0; i < cart.length-1; i++) {
      var itemObject = cart[i]
      var itemNames = Object.keys(itemObject)

        for (var itemNames in itemObject){
          inCart += `${itemNames} at $${itemObject[itemNames]}, `
        }
    }
    var finalItem = cart[cart.length-1]
    inCart += `${Object.keys(finalItem)} at $${finalItem[Object.keys(finalItem)]}.`

    console.log(inCart)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(thing) {
  if (cart.length == 0) {
    console.log("That item is not in your cart.")
  }
  else {
    for (let i = 0; i < cart.length; i++){
      var itemObjects = cart[i]
      if (itemObjects.hasOwnProperty(thing) == false && i == cart.length-1){
        console.log('That item is not in your cart.')
      }
      else if (itemObjects.hasOwnProperty(thing) == true){
        cart.splice(i, 1)
        return cart
      }
    }
  }
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (let i = cart.length-1; cart.length > 0; i--){
      cart.pop()
    }
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

}
