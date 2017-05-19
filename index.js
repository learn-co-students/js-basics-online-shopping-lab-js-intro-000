var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor(Math.random() * 10);

  newItem[item] = price;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  if(!cart.length){
  console.log('Your shopping cart is empty.');
  }

  var inCart = [];
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    inCart.push(`${item} at $${cart[i][item]}`);
  }

  console.log(`In your cart, you have ${inCart.join(', ')}.`);
}

function total() {
  var totalCost = 0;

    for(var i = 0; i < cart.length; i++){
      var itemPrice = Object.keys(cart[i]);
      totalCost += cart[i][itemPrice];
    }

  return totalCost;
}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
        return cart;
      }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
