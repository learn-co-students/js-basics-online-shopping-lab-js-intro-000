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
 var newCartItem = {itemName:item, itemPrice:Math.floor(Math.random()*100)}
 cart.push(newCartItem);
 return `${cart[cart.length-1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
//Initial statement on Cart Contents return string
    let cartContents = `In your cart, you have`
    if (cart.length > 1){
      for(let i=0; i < cart.length; i++){
        //When reaching the last entry in the Cart, start with 'and' end with a period.
        if(i === cart.length-1){
          cartContents += ` and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
        }
        //If this is not the last entry of the cart, concatenate a comma.
        else{
          cartContents = `${cartContents} ${cart[i].itemName} at \$${cart[i].itemPrice},`
        }
      }
    }
    else{
      //If the cart only has one item
      cartContents += ` ${cart[0].itemName} at \$${cart[0].itemPrice}.`
    }
    return cartContents;
  }
  else{
    return `Your shopping cart is empty.`
  }
}

function total() {
  // write your code here
  var cartTotal = 0;
  for(let i=0; i < getCart().length; i++){
    cartTotal += getCart()[i].itemPrice;
  }
  return cartTotal;
//return getCart()[0].itemPrice + getCart()[1].itemPrice;
}

function removeFromCart(item) {
  // write your code here
  for(let i=0;i<getCart().length;i++){
    if (getCart()[i].itemName === item){
      getCart().splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var orderPlaced = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return orderPlaced;
  }
  else{
    return `Sorry, we don\'t have a credit card on file for you.`
  }
}
