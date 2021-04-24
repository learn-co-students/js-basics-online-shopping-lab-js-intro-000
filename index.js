var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {
    itemName: `${item}`,
    itemPrice: getRandomPrice(1, 100)
  };

 
  function getRandomPrice(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    //make the max and min inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  cart.push(cartItem);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  var currentCart = [];

  if(cart.length === 0){
    return `Your shopping cart is empty.`;
  } else {
      for(var index = 0; index < cart.length; index++){

        //if at the end of the array, add the 'and'
        if(index > 0 && index === cart.length - 1 ){
          currentCart.push(`and ${cart[index].itemName} at $${cart[index].itemPrice}`);
        } else {
          currentCart.push(`${cart[index].itemName} at $${cart[index].itemPrice}`);

        }

      };
      if(cart.length === 1){
        return `In your cart, you have ${currentCart}.`;
      } else {
        return `In your cart, you have ${currentCart.join(`, `)}.`;
      }
  }
}

function total() {
  var cTotal = 0;

  if(cart.length === 0){
    return cTotal;
  } else {
      for(var index = 0; index < cart.length; index++){
        cTotal = cTotal + cart[index].itemPrice;
      };
  }

  return cTotal;
}

function removeFromCart(item) {
  for(var index = 0; index < cart.length; index++){
    if(cart[index].itemName === item){
      //delete item and return the updated cart
      cart.splice(index, 1);

      //decrement the index so that it doesn't skip the next item
      index--;

      console.log(`${item} is removed`);
      return cart;
    }
  };

  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  //Doesn't place the order if a credit card number is not provided
  if(cardNumber === undefined){
    return `Sorry, we don\'t have a credit card on file for you.`;
  } else {
    var totalCost = total();
    //cart = [];
    for(var index = 0; index < cart.length; index++){
      cart.shift();
    }

    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }

}
