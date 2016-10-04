var cart = []

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)

  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart(){

	if (cart.length > 0){
	  var output = "In your cart, you have "
		for (var i = 0; i < cart.length; ++i){
      var cartItem = Object.keys(cart[i])
			output = output + `${cartItem} at $${cart[i][cartItem]}, `
		}
      output = `${output.slice(0, -2)}.`
	  	console.log(output)
  }else{
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name){
  for (var i = 0; i < cart.length; ++i){
    var item = cart[i]
    if (item.hasOwnProperty(name)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(number){
  if (number){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart =[]
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
