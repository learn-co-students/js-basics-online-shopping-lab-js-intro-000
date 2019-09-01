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
 let obj = generateCartItem(item)

  cart.push(obj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let cart = getCart();
  if(cart.length > 0){
    if(cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else{
      let preMessage = `In your cart, you have`
      let itemList = [];
      for(let i = 0; i < cart.length-1; i++){
        itemList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
      }
      itemList.push(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`);
      return `${preMessage} ${itemList.join(', ')}.`
    }

  }else{
    return `Your shopping cart is empty.`
  }
}

function total() {
  // write your code here
  let cart = getCart();
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let cart = getCart();
  let isInYourCart = false;
  for(let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      cart.splice(i, 1);
      isInYourCart = true;
      break;
    }
  }

  if(isInYourCart){
    return cart;
  }else{
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return `Sorry, we don\'t have a credit card on file for you.`
  }
  let sumToCharge = total()
  setCart([])
  return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
}

function generateCartItem(itemName){
  return {
    itemName: itemName,
    itemPrice: Math.floor(Math.random() * 100)
  }
}
