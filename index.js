var cart=[];

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

function addToCart(item) {
  var itemObj ={};
  var itemPrice = Math.floor(100*Math.random());
  var itemName=item;
  itemObj[item] = itemPrice;
  cart.push(itemObj);
  console.log(item +" has been added to your cart.");
  return cart;
}


function getCart() {
  return cart;
}

function viewCart () {
  var retStr="";
  if (cart.length === 0) {
      retStr="Your shopping cart is empty.";
      console.log(retStr);
      return retStr;
  }

  retStr = "In your cart, you have ";

  for (var i=0;i<cart.length;i++ ) {
    var itemObj = cart[i];
    var keyArray = Object.keys(itemObj);
    retStr = retStr + keyArray[0] +" at $" + itemObj[keyArray[0]] + (i<cart.length-1?", ":".");
  }

  console.log(retStr);
  return retStr;
}

function removeFromCart (item) {
  var retStr="";
  var found = false;
  for (var i=0;i<cart.length;i++) {
    var keyArray = Object.keys(cart[i]);
    if (keyArray[0] === item) {
       cart.splice(i,i+1);
       found = true;
    }
  }
if (found === false ) {
console.log( "That item is not in your cart."); }

}


function placeOrder(ccNumber) {
  if (ccNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }

  console.log("Your total cost is $"+total()+", which will be charged to the card "+ccNumber+".");
  cart=[];
}
