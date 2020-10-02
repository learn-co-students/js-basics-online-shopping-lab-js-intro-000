var cart = [{}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)});
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  var i = 0, str = "In your cart, you have ";
  if (cart.length === 0) { 
    return "Your shopping cart is empty.";
  } else {
    while(i < cart.length) {
      
      if(i === cart.length - 1 && cart.length != 1) {
        str += ", and ";
      }
      
      str += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      
      if(i === cart.length - 1) {
        str += ".";
      } else if(i < cart.length - 2) {
        str += ", ";
      }
      i+= 1;
    }
    return str;
  }
}

function total() {
  var i = 0, sum = 0;
  while (i < cart.length){
    sum += cart[i].itemPrice;
    i+= 1;
  }
  return sum;
}

function removeFromCart(item) {
  var i = 0;
  while( i < cart.length) {
    if(cart[i].itemName === item){
      cart.splice(i, 1)
      return;
    }
    i+= 1;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
      var final = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      cart = [];
      return final;
  }
}
