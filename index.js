var cart

cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price =  Math.floor((Math.random() * 100))
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var item;
  if(cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var string = "In your cart, you have"

    cart.forEach( function (arrayItem)
    {
      string += " " + (Object.keys(arrayItem))[0] + " at "
      string += "$" + (Object.values(arrayItem))[0] + ","
    })
    string = string.slice(0, -1);
    string += "."
    console.log(string)


  }
}

function removeFromCart(item_name){
  var itemFound = false
  var itemIndex
  for (var i = 0, l = cart.length; i < l; i++) {
    console.log(cart[i])
    if(cart[i].hasOwnProperty(item_name)){
      itemFound = true
      itemIndex = i
    }
  }
  if(itemFound){
    cart.splice(itemIndex,1)
    return cart
  }
  else{
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cc_number){
  if (typeof cc_number === 'undefined'){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cc_number}.`)
    cart = []
  }
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

addToCart("test")
viewCart()

addToCart("socks")
viewCart()
// removeFromCart("socks")
// viewCart()
// console.log(Object.values(cart[0]))
