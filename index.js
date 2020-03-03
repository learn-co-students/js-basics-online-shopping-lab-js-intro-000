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
 var objItem = new Object();

 var itemPrice = Math.floor(Math.random() * 100);
 objItem = { itemName: item, itemPrice: itemPrice }
 cart.push(objItem);

 return item + " has been added to your cart.";
}


function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var x = " ";
  var i = 0;
  var int = parseInt(cart.length);
  const list = []

  if(int === 1) {
    return 'In your cart, you have ' + cart[0].itemName + " at " + '$' + cart[0].itemPrice + '.';
  }
  else if(int === 2){

    for (let i = 0, l = int-1; i < l; i++) {

       x +=  cart[i].itemName + " at " + '$' + cart[i].itemPrice + ', ';
    }
    x += "and "+ cart[i+1].itemName + " at " + '$' + cart[i+1].itemPrice;
    return 'In your cart, you have' + x + ".";
  }
  else{

    for (let i = 0, l = int-1; i < l; i++) {

       x +=  cart[i].itemName + " at " + '$' + cart[i].itemPrice + ', ';
    }
    x += "and "+ cart[int-1].itemName + " at " + '$' + cart[int-1].itemPrice;
    return 'In your cart, you have' + x + ".";
  }

}


function total() {
  // write your code here
  var i = 0;
  var total = 0;
  var int = parseInt(cart.length);

  for (let i = 0, l = int; i < l; i++) {
    total += cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  var int = parseInt(cart.length);

  for (let i = 0, l = int; i < l; i++) {
    if(cart[i].itemName === item) {

        cart.splice(i, 1);
        return cart;
    }
  }
  return 'That item is not in your cart.';
}


function placeOrder(cardNumber) {
  // write your code here

  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
    //return "Your total cost is " + "$" + total + ", which will be charged to the card " + cardNumber + ".";
  }
  else{
    var tot = total();
    setCart([]);
    return "Your total cost is " + "$" + tot + ", which will be charged to the card " + cardNumber + ".";
  }


}
