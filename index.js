var cart = [];

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var item = ''
    var string = 'In your cart, you have '
    for(var i=0;i<cart.length;i++){
      item = Object.keys(cart[i])[0]
      string += `${item} at $${getCart()[i][item]}`
      if(i<cart.length-1){
        string += ', '
      }
    }
    string += '.'
    console.log(string)
  }
}

function removeFromCart(item){
  for(var i=0;i<cart.length;i++){
    if(Object.keys(cart[i])[0] === item){
      setCart([...cart.slice(0,i),...cart.slice(i+1)])
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  setCart([])
}

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
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
