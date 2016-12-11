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


function addToCart(item) {
var itemPrice = [];
  itemPrice.push(Math.floor( Math.random() * 100 ));
  //Do not forget variables need []; [variable]:element
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  };

  var itemAndPrices = [];

  for (let i = 0; i < cart.length; i++){
    //Object.keys returns an ARRAY of keys************
    var items = Object.keys(cart[i])[0];
    var prices = cart[i][items];
    itemAndPrices.push(`${items} at \$${prices}`);
  };

  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`);

};

function removeFromCart(itemToRemove){
  var itemNotFound = 0;

  for (var i = 0; i < cart.length; i++){

    if (itemToRemove == Object.keys(cart[i])){
      cart.splice(i, 1);
      itemNotFound++;
      return(itemNotFound);
    };
  };

  if (itemNotFound !== 1){
      console.log('That item is not in your cart.');
    };

return cart;

};

function total(){
  var cartTotal = 0;
  for(let i = 0; i < cart.length; i++){
      cartTotal += (cart[i][Object.keys(cart[i])[0]])
  };
  return parseInt(cartTotal);
};

function placeOrder(creditCard){
  if(!creditCard){
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  };
  cart = [];
};
