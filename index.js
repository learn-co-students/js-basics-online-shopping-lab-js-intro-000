var cart;
function getCart(){
  return cart
}


function addToCart(item){
var price = Math.floor(Math.random()*100) ;

 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart(){
  var itemsandprices = []
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]){
      itemsandprices.push(item + " at $" + cart[i][item])
    }

  } if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }



  console.log("In your cart, you have " + itemsandprices.join(", ") + ".");
}

function removeFromCart(item){
var f = false
     for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
         cart.splice(i,1)
         return cart
}
}
 if(!f){
console.log("That item is not in your cart.");
}
return cart
}

function placeOrder(cardNumber){
  if (cardNumber === undefined) {
   console.log('We don\'t have a credit card on file for you to place your order.')
 }else {
console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
cart = []
return cart
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
