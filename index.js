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
 var price = Math.floor(Math.random()*100+1);
 var sent = {itemName: item, itemPrice: price}
 cart.push(sent);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

    if (cart.length ===0){
      return "Your shopping cart is empty."
    }
    var say = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    if(cart.length === 1){
      return `${say}.`
    }
     for(let i = 1; i < cart.length - 1;i++){
      say = `${say}, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      return `${say}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}

function total() {
  // write your code here
  var hex = 0
  for (var i = 0; i < cart.length; i++){
    hex += cart[i].itemPrice;
  }
  return hex
}

function removeFromCart(item) {
  // write your code here
  for(let i=0; i < cart.length; i++){
    //loop exist to loop over array
    if (cart[i].itemName === item){
    //compares the values of the items that being searched for
      return cart.splice(i,1)
      //search id the index while deleting 1
    }
  }
    return 'That item is not in your cart.'

}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
      return `Sorry, we don't have a credit card on file for you.`
  }else{
  var cost = total()
  cart.splice(0,cart.length)
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
