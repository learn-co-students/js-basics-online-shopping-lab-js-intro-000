var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemDetails = {
   itemName: item,
   itemPrice: getRandomInt(100)
  };

  cart.push(itemDetails);
  return `${item} has been added to your cart.`
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function viewCart() {
  var cartSummary = "In your cart, you have"

  var cart2 = getCart()

   if(cart2.length === 0){
    return 'Your shopping cart is empty.';
    return;
   }

  for(var i = 0; i < cart2.length; i++){
    var foodItem = cart2[i]

    if(cart2.length === 1){
       cartSummary += (` ${foodItem["itemName"]} at $${foodItem["itemPrice"]}.`)
     } else if(foodItem === cart2[cart2.length - 1]){
       cartSummary += (` and ${foodItem["itemName"]} at $${foodItem["itemPrice"]}.`)
    } else {
      cartSummary += (` ${foodItem["itemName"]} at $${foodItem["itemPrice"]},`)
    }
  }

  return cartSummary;
}

function total() {
  // var cart = getCart()
  var totalVal = 0;

  for(var i = 0; i < cart.length; i++){
    // var foodItem = cart[i]
    totalVal += cart[i].itemPrice
  }

  return totalVal;
}


function removeFromCart(item) {
  var cart2 = getCart()

  for(var i = 0; i < cart2.length; i++){
    if(cart2[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
    return "That item is not in your cart."
}

function placeOrder(cardNum){
  // var kart = getCart()

  if(!cardNum){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    // for(var i = 0; i < kart.length; i++) {
    //     cart.splice(i, 1);
    // }
    var totalSum = total()
    cart = [];
    return `Your total cost is $${totalSum}, which will be charged to the card ${cardNum}.`
  }
}
