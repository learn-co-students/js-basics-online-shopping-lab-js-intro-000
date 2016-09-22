var cart=[]
function getCart(){
  return cart
}
function addToCart(item){
  var price=Math.floor((Math.random()*10))
  var product={[item]:price}
  cart.push(product)
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart(){
  if (cart.length==0){
    console.log( "Your shopping cart is empty.")
  }
  var string="In your cart, you have"
  for( var i=0;i<cart.length;i++){

     string+= ` ${Object.keys(getCart()[i])} at $${getCart()[i][Object.keys(getCart()[i])]},`
  }
     string=string.substring(0, string.length-1)
     string+='.'
  console.log(string)
}
function placeOrder(number){
  if (number ==undefined){
    console.log( "We don't have a credit card on file for you to place your order.")
  }

    console.log( `Your total cost is $${total()}, which will be charged to the card ${number}.`)

  cart=[]
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function removeFromCart(item){
  for(var i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i)
      return cart

    }
  }
  console.log("That item is not in your cart.")

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
