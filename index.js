var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1};
 cart.push(obj);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var cartData = [];
    for (var i = 0; i < cart.length-1; i++){
      cartData.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  return threePlusItems;
}

function total() {
  // write your code here
  var total = 0;
  for (var i=0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i=0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }else{
    var price = total();
    for (var i = cart.length; i >= 0; i--){
      cart.pop();
    }
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;

  }
}
