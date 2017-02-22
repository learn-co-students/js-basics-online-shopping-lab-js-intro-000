var cart=[];

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

function addToCart (item) {
  //generate a random price to the item
  var min = 0 ,
      max = 100;
  var price = Math.floor(Math.random()*100+min)
  //Adds the item to the cart
  cart.push({[item]: price}) // {pizza: 24}
  var message  = `${item} has been added to your cart.`
  console.log(message)
  return cart
}

function viewCart(){
  var message
  if (cart.length === 0) {
    message  = "Your shopping cart is empty"
  }else{
    var l = cart.length;
    message = "In your cart, you have "
    for (var i=0; i<l; i++) {
       var key = Object.keys(cart[i])
        message += `${key[0]} at $${cart[i][key[0]]}`
        if (i<l-1) {
          message +=", "
        }
    }
  }
  message += "."
  console.log(message)
}

function removeFromCart(item){
    for (var i = 0; i<cart.length; i++){
      if (cart[i].hasOwnProperty(item)){
            //delete the item from the cart
            // delete cart[i][item] [{}]
            cart.splice(i, 1)
            return cart;
      }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var message
  if (cardNumber == null ) {
    message = "We don't have a credit card on file for you to place your order."
  }else{
    message  = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  console.log(message)
  cart = []
  return cart
}
