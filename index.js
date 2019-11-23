var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 obj = { "itemName" : item , "itemPrice" : Math.floor(Math.random() * 100) + 1};
 cart.push(obj);
 return(`${item} has been added to your cart.`);
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty.";
  } else if(cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var stringArray = [];
    for (var i=0; i<cart.length; i++){
      stringArray.push(`${(i==cart.length-1 ? 'and ' : '')}${cart[i].itemName} at $${cart[i].itemPrice}${(i==cart.length-1 ? '' : ', ')}`);
    }
    var itemString = stringArray.join('');
    return `In your cart, you have ${itemString}.`;
  }
}

function total() {
  var s = 0;
  for (var element of cart){
    s += element.itemPrice;
  }
  return s;
}

function removeFromCart(item){
  var stringArray = [];
  var q;
  for (var i=0; i<cart.length; i++){
    stringArray.push(cart[i].itemName);
  }
  q = stringArray.indexOf(item);
  if (q >= 0){
    cart.splice(q, 1);
    return viewCart();
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  var t = total();
  cart = [];
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  }
}