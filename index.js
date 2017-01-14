var cart = []; //At this point, the array of objects has a length of 1
cart.length = 0;//...but we need it to start at 0.
var atIndex;

function getCart(){
  return cart;
}

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

function addToCart(item){
  var price = Math.floor(100*Math.random())
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
    if (getCart().length === 0){
    console.log("Your shopping cart is empty.");
  }
    else {
      var myString = "In your cart, you have "
      for (var item = 0; item < cart.length; item++){
        var key = Object.keys(cart[item])
        myString = myString.concat(`${key} at $${cart[item][key]}, `)
      }
      myString = myString.slice(0, myString.length-2)+"."
      console.log(myString);
  }
}

function searchForItem(item){
  var theResult = new Object();
  for(var i = 0; i < getCart().length; i++){
    if(cart[i].hasOwnProperty(item)){
      theResult.state = true;
      theResult.atIndex = i;
      return theResult;
      break;
    }
  }
  theResult = {state:false};
  return theResult;
}

function removeFromCart(item){
  var searchResult = searchForItem(item)
  if (searchResult.state === false){
    console.log("That item is not in your cart.");
  }
  else {
    cart.splice(atIndex, 1);
  }
}

function placeOrder(CCNumber){
  if (!CCNumber){
    console.log("We don't have a credit card on file for you to place your order.");
    return 0;
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${CCNumber}.`)
    cart.length = 0
  }
}
