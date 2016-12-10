var cart;

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

function getCart() {
  return cart
}

function addToCart(item){
   var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}


function viewCart(){
  if(cart.length == 0){
     console.log("Your shopping cart is empty.")
     return
  }
  var printing = "In your cart, you have"

  for (var i = 0; i < cart.length; i++){
    var element = cart[i];

    for (var item in element){// new js for loop
        printing += ( ` ${item} at $${element[item]}`)
    }
    if (i < cart.length - 1) {
      printing += ","
    }
  }
  console.log(printing + ".")
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    var toBeRemoved = cart[i];
    if(toBeRemoved.hasOwnProperty(item)){
    cart.splice(i,1)
    return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(!cardNumber){
  console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
