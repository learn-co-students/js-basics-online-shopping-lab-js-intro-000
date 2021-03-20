var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var product = {itemName:item, itemPrice:Math.floor(Math.random() * 100)};
 cart.push(product);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  let i = 0;
  var str = "In your cart, you have";
  while(i < cart.length){
    var product = cart[i];
    if(cart.length === 1){
      return `${str} ${product.itemName} at $${product.itemPrice}.`;
    }else if(cart.length === i+1){
      str += ` and ${product.itemName} at $${product.itemPrice}.`;
      return str;
    }
    str += ` ${product.itemName} at $${product.itemPrice},`;
    i++;
  }
}

function total() {
  let i = 0;
  var total = 0;
  while(i < cart.length){
    total += cart[i].itemPrice;
    i++;
  }
  return total;
}

function removeFromCart(item) {
  let i = 0;
  while(i < cart.length){
    if(cart[i].itemName == item){
      cart.splice(i, 1)
      return cart;
    }
    i++;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var str =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return str;
}
