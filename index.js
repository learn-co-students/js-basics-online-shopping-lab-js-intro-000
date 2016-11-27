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
  return cart;
}

function addToCart(theItem){
  var price = Math.floor (Math.random()*100)

  cart.push({[theItem]: price})
  console.log(`${theItem} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length===0){
    console.log('Your shopping cart is empty.')
  }

  var i = 0;
  var comboStrings = [];

  while(i<cart.length){
    var itemAndPricePair = cart[i];
    var item = Object.keys(itemAndPricePair);
    var price = itemAndPricePair[item];
    comboStrings.push(`${item} at $${price}`);
    i++
  }

  console.log(`In your cart, you have ${comboStrings.join(', ')}.`)
}


function removeFromCart(remItem){
  var i=0;
  var check=false;
    for(var i=0; cart.length>0; i++){
      if(cart[i].hasOwnProperty(remItem))
        check=true;
        cart.splice(i,1);
    }

    if(check===false){
      console.log('That item is not in your cart.')
    }

}

function placeOrder(ccNum){
    if (!ccNum) {
      console.log("We don't have a credit card on file for you to place your order.")
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
      cart = [];
    }
}
