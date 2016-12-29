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

function getCart() {
  return cart;
}

function addToCart (item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart (){
  if (cart.length > 0){
    var printLine = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0];
      var price = cart[i][item];
      printLine += ` ${item} at $${price}`
        if (i < cart.length - 1) {
          printLine += ","
        }
          else {
            printLine += "."
          }
      }
      console.log(printLine)
}

 else {
   console.log("Your shopping cart is empty.")
 }
}

function removeFromCart (item){
    var location;
    for (var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i])[0];
      if (item === key){
         location = i;
         break;
      }
    }
    if (location !== undefined) {
    cart = cart.slice(0, location) + cart.slice(location + 1);
    }
    else {
      console.log('That item is not in your cart.')
    }
  }



function placeOrder (cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")

  }
  cart = [];
}
