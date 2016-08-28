var cart = [];
//var itemName = Object.keys(cart)


function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random()*100))
  cart.push({item: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){

  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  else{
    console.log(`In your cart you have `)
    //var itemNames = Object.keys(cart)

    for (var i=0; i<cart.length; i++){
      if (i!= cart.length-1){
        var itemName = Object.keys(cart[i])
        console.log(`${itemName[0]} at \$${cart[i][itemName[0]]}, `)
      }
      else{
        console.log(`${itemName[0]} at \$${cart[i][itemName[0]]}.`)
      }
    }
  }
}

function removeFromCart(item){
  for (var i=0; i<cart.length; i++){
    var itemName = Object.keys(cart[i])
    if (itemName[0] === item){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}



function placeOrder(cardNumber){
  if(cardNumber === null){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`)
    cart.splice(0)
  }
}

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
