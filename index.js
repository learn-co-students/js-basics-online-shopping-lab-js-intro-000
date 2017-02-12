var cart =[];

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

function getCart () {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart (){
  if (cart.length>0){
    //In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.
  var cartItemsList = "In your cart, you have "
  for (var i=0,countDown=cart.length;i<cart.length;i++,countDown--) {
    for (var items in cart[i]){
    cartItemsList = cartItemsList + `${items} at \$${cart[i][items]}${countDown===1?".":", "}`
  }
  }
  console.log(cartItemsList)
}
else if(cart.length===0) {
  console.log("Your shopping cart is empty.")
}
}

function removeFromCart (dunlikit) {
  if (cart.length > 0){
  for(var i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(dunlikit)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
} else{
  console.log("That item is not in your cart.")
}
}

function placeOrder(cardNumber) {
if (arguments.length===0){
  console.log("We don't have a credit card on file for you to place your order.")
} else if (arguments.length>0 && cardNumber >0){
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
}
  setCart([])
}
