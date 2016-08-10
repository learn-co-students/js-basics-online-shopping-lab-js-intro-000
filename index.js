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

function addToCart(cartItemBuy){
  var price = Math.floor(Math.random() * 100)
  cart.push({[cartItemBuy]: price})
  console.log(`${cartItemBuy} has been added to your cart.`)
  return cart
}

function viewCart(){
  var empty = ""
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        if(i === cart.length - 1){
          empty += `${item} at $${cart[i][item]}`
        }
        else{
          empty += `${item} at $${cart[i][item]}, `
        }
        // empty.push(`${item} at $${cart[i][item]}`)
      //   console.log(`In your cart, you have [${item} and ${cart[i][item]} pairs].`)
      }
    }
    console.log(`In your cart, you have ${empty}.`)
  }
  else{
    var str = "Your shopping cart is empty."
    console.log(str)
    return str
  }
}

function removeFromCart(itemName){

  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      if(cart[i].hasOwnProperty(itemName)){
        delete cart.splice(i, 1)
        return cart
       }
     }
   }
   var str = "That item is not in your cart."
   console.log(str)
   return str
}

function placeOrder(creditCardNum){
  if(creditCardNum === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
    return false
  }
  else{
    var str = `Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`
    console.log(str)
    for(var i = 0; i < cart.length; i++){
      delete cart.splice(i, 1)
    }
  }
}
