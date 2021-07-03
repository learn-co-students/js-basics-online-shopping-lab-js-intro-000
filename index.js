var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: getRandomInt(100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var strRet = "In your cart, you have";
  if (cart.length>0) {
    for (let i=0; i<cart.length; i++) {
      strRet = `${strRet} ${cart[i].itemName} at \$${cart[i].itemPrice}`;
      if (i < cart.length-1) {        // it is not the last element in the cart
        strRet = `${strRet},`;
      }
      if (i === cart.length-2) {        // it is the second to end element in the cart
        strRet = `${strRet} and`;
      }
      if (i === cart.length-1) {        // it is the last element in the cart
        strRet = `${strRet}.`;
      }
    }
  }
  else {
    strRet = "Your shopping cart is empty.";
  }
  return strRet;
}

function total() {
  // write your code here
  
  var numRet = 0;
  
  for (let i=0; i<cart.length; i++) {
    numRet += cart[i].itemPrice;
  }
  
  return numRet;
}

function removeFromCart(item) {
  // write your code here
  
  var ret;
  var iPos = -1;
  
  if (cart.length>0) {
    for (let i=0; i<cart.length; i++) {
      if (cart[i].itemName.toLowerCase() === item.toLowerCase()) {   // it exists
        iPos = i;
      }
    }
    if (iPos > -1) {         // item was found...
      cart.splice(iPos, 1);
      ret = cart;
    }
    else {                    // item was not found
      ret = "That item is not in your cart.";
    }
  }
  else {
    ret = "That item is not in your cart.";
  }
  return ret;
}

function placeOrder(cardNumber) {
  // write your code here
  
  var strRet = '';
  
  // console.warn(`placeOrder - begin - cardNumber: ${cardNumber}`);
  if (cardNumber === undefined) {
    strRet = 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    strRet = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
    while (cart.length>0) {
      cart.shift();
      // console.warn(`   shift - (${strRet})-> ${cart.length}`);
    }
  }
  // console.warn(`placeOrder - end`);
  return strRet;
}
