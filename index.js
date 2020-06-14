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
 var random = Math.floor(Math.random()*100) + 1;
 var newItemObject = {itemName:item, itemPrice: random};
 cart.push(newItemObject);
 return(`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  //if (cart.length == 0) {
  //  return("Your shopping cart is empty");
  //} else {
    switch (cart.length) {
      case 0:
        return("Your shopping cart is empty.");
        break;
      case 1:
        return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
        break;
      case 2:
        return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
        break;
      default:
        return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
        break;
    }
}

function total() {
  // write your code here
  var i = 0;
  var total = 0;
  while(i < cart.length) {
    total += cart[i].itemPrice;
    i+=1;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var itemNotFound = true;
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      itemNotFound = false;
    }
  }
  if (itemNotFound) {
    return("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber >= 0) {
    var messageForCard = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    /*for (var i = 0; i < cart.length; i++) {
      delete cart[i].itemName;
      delete cart[i].itemPrice;
    }*/
    return(messageForCard)
    //cart = [{}];
  } else {
    return("Sorry, we don't have a credit card on file for you.")
  }
}
