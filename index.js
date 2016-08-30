var cart = [];

function setCart(newCart) {
  cart = newCart;
}


function addToCart(item) {
  var price = Math.floor(Math.random()*10);
  var object = {[item]: price};
  cart.push(object);
  console.log(item + ' has been added to your cart.');
  console.log(cart.length);
  return(cart)
}

function viewCart(){
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }else {
    var statement = 'In your cart, you have '
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]){
        statement = (statement + `${item} at $${cart[i][item]}`);
        if (i+1 === cart.length){
          statement = (statement + ".");
          console.log(statement);
          return(statement)
        }else
          statement = (statement + ', ')
      }
    }
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

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
        return(cart)
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber != null){
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
                
    cart = [];

  }else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

function getCart() {
  return(cart)
}


/*

if(cart ===[]){
    return('Your shopping cart is empty.')
}else{
    return('In your cart, you have')
}
}





*/
