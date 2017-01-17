var cart = []
function getCart(){
  return cart
}

function addToCart(item){
//This function should automatically set a
//price for this item by generating a random number between 0 and 100
var price = Math.floor(Math.random() * 100)
//This function should add the item and the
//price as an object ({item: price}) to the cart array.
cart.push(`${item} : ${price}`)
console.log(`${item} has been added to your cart.`)
return cart
}



function viewCart(){
  for (let i = 0; i <= cart.length; i++){
    if (i < cart.length) {
    console.log(`In your cart, you have ${cart}.`)
  } else if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
    }
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

function removeFromCart(item){
  var index2 = cart.indexOf(item);
    if (cart.hasOwnProperty(index2)) {
       delete cart[index2];
    } else {
       console.log("That item is not in your cart.")
    }

  return cart
}


function placeOrder(cardNumber){
// this is the part that's totally fucked up...solve it when you start
// working on this thing again!!!
  if (cardNumber === undefined){
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
// The function should empty the cart array.
  }
 cart = []
}
