var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randNum = Math.floor(Math.random() * 100 + 1);
  var newItem = {
    itemName: item,
    itemPrice: randNum
  }
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;

}

function viewCart() {
  var count;

  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  var inYourCart = "In your cart, you have ";
  if(cart.length === 1){
    inYourCart += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return inYourCart;
  }
  if(cart.length ===2){
    count = 0;
    inYourCart += `${cart[count].itemName} at $${cart[count].itemPrice}, `
    count +=1;
    inYourCart += `and ${cart[count].itemName} at $${cart[count].itemPrice}.`
   return inYourCart;
  }

  if(cart.length > 2){
    count = 0;
    while(count <= cart.length - 1){
      if (count === cart.length - 1)
      {
        inYourCart += `and ${cart[count].itemName} at $${cart[count].itemPrice}.`
        break;

      }
    inYourCart += `${cart[count].itemName} at $${cart[count].itemPrice}, `
    count++;
    }
    return inYourCart;
  }
}

function total() {
  let fullTotal = 0;
  for(let count = 0; count < getCart().length; count++)
  {
    fullTotal += getCart()[count].itemPrice;
  }
  return fullTotal;
}

function removeFromCart(item) {
  for(var count = 0; count < cart.length; count++)
  {
    if(item === cart[count].itemName)
    {
      cart.splice(count, 1);
      return cart;
    }
  }return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var yourTotal = total();

  if(typeof cardNumber !== "undefined"){
    cart.splice(0, cart.length);
    return `Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`;
  }
  else{
    return "Sorry, we don\'t have a credit card on file for you."
  }
}
