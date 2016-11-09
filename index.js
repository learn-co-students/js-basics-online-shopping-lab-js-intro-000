var cart = [];

function getCart(){
  return cart
}

function setCart(newCart){
  cart = newCart;
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart(){
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var ProductsAndPrices = [];

    for (var i = 0; i<cart.length; i++) {
      var productObject = cart[i];
      var productName = Object.keys(productObject);
      var productPrice = productObject[productName];
      ProductsAndPrices.push(` ${productName} at $${productPrice}`);
      }
      console.log (`In your cart, you have${ProductsAndPrices}.`);
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


function removeFromCart(product){
  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] == product) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log ("That item is not in your cart.");
}


function placeOrder(cardNumber){
  if (cardNumber == undefined) {
    console.log (`We don't have a credit card on file for you to place your order.`);
  } else {
      let t = 0

      for (var i = 0, l = cart.length; i < l; i++) {
        for (var item in cart[i]) {
          t += cart[i][item]
        }
      }
    console.log (`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
  }
  cart = cart.slice(cart.length);
}
