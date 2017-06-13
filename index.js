var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price;
  price = Math.floor(Math.random() + 100)
  cart.push({[item]: "price"})
  console.log(`${[item]} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var list = [];
  for( var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      list.push(`${item} at $${cart[i][item]}`)
    }
  }
  console.log(`In your cart, you have ${list.join(', ')}.`);
}


function total() {
  var total = "";
  for( var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      total += cart[i][item]
    }
  }
  return total
}

/*function removeFromCart(item) {
  for( var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)) {
        delete cart[i];
        return cart;
      }
      else {
        console.log('That item is not in your cart.')
        return cart

      }
    }
} */

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
          cart.splice(i,1);
          return cart;
        }
    }
    console.log('That item is not in your cart.')
    return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    /*for (var i = 0; i < cart.length; i++) {
      delete cart[i];*/
    cart = [];
    }
  }
