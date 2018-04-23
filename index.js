var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var myobj = {
    "itemName":item,
    "itemPrice": Math.floor(Math.random()* (100 - 1) + 1)
  }
 cart.push(myobj);
 return(item + " has been added to your cart.");
}

function viewCart() {
  if(cart.length<1) {
    return("Your shopping cart is empty.");
  } else {
    var myStr = "In your cart, you have ";
    for(let i = 0; i<cart.length; i++) {
      myStr = myStr + cart[i]["itemName"] + " at $" + cart[i]["itemPrice"].toString();
      if (cart.length===2 & i<(cart.length-1)) {
        myStr = myStr + ", and ";
      }
      if (cart.length>2 & i<(cart.length-2)) {
        myStr = myStr + ", ";
      }
      if (cart.length>2 & i===(cart.length-2)) {
        myStr = myStr + ", and ";
      }
    }
    myStr = myStr + ".";
    return(myStr);
  }
}

function total() {
  var tot = [];
  for(let i = 0; i<cart.length; i++) {
     tot = +tot + +cart[i]["itemPrice"];
  }
  return(tot);
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item) {
        cart.splice(i,1);
        return(cart);
        break;
     }
  }
  return("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined) {
    return("Sorry, we don't have a credit card on file for you.");
  }
  else{
    var mySentence = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".";
    cart = [];
    return(mySentence);
  }
}
