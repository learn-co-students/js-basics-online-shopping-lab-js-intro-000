var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100) + 1
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var output = "In your cart, you have "
    for (var index in cart){
      for (var item in cart[index]){
        output += `${item} at $${cart[index][item]}`
      }
      if (index < cart.length - 1){
        output += ", "
      }
      else {
        output += "."
      }
    }
    console.log(output)
  }
}

function removeFromCart(item){
  var found = false
  for (var index in cart){
    if(cart[index].hasOwnProperty(item)){
      cart.splice(index,1)
      found = true
      return cart
    }
  }
  if(!found){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccNumber){
  if (ccNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
  }
  cart = []
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
