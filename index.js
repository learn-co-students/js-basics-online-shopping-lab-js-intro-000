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

function getCart(){
  return cart
}

function addToCart(item){
  let value = Math.floor(Math.random() * 100 + 1);
      cart.push({ [item]: value });
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart(){
  if(cart.length > 0){
    var itemsInCart = []
      var text = "In your cart, you have"
  cart.forEach(function (obj){
    var key = Object.keys(obj)[0]
      var price = obj[key]
        itemsInCart.push(` ${key} at $${price}`)
  })
    console.log(`${text}${itemsInCart}.`);
}

  else{
    console.log("Your shopping cart is empty.");
  }

}

function removeFromCart(removeItem){
  if(cart.length === 0){
      console.log("That item is not in your cart.")
    }
  else{
        cart.forEach(function (obj){
            cart.hasOwnProperty(removeItem) === true
        })
        cart.shift(removeItem);
          return cart

      }
  }

  function placeOrder(arg){
    if(arg == null){
      console.log("We don\'t have a credit card on file for you to place your order.")
    }

    else{
      console.log(`Your total cost is $${total()}, which will be charged to the card ${arg}.`)
    }
     cart = [];
      
  }
