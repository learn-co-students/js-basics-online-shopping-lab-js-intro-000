var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your coherede 
 var price = Math.floor(Math.random() * 100 + 1);
 var itemObject = { itemName: item, itemPrice: price};
 
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length < 1){
  return "Your shopping cart is empty.";
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.` ;
  } else {
    var message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, ` ;
    for(let i = 2; i < cart.length -1; i++){
       message = message + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    message = message + `and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`; 
    return message;
}
}

function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < cart.length; i++){
    total+= cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemsRemoved = 0;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      itemsRemoved++;
    }
  }
  if(itemsRemoved === 0){
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
  return "Sorry, we don't have a credit card on file for you.";
  }else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    
  }
}

