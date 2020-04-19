var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
  cart.push(itemObj);
  return itemObj.itemName + ' has been added to your cart.';
}

function viewCart() {
  if(cart.length === 0){
  	return 'Your shopping cart is empty.';
  } else if (cart.length === 1){
  	return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2){
  	return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if(cart.length === 3){
  	return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  let myTotal = [];
	let finalTotal = 0;
  	for(let i = 0; i < cart.length; i++){
  		myTotal.push(cart[i].itemPrice);
 			finalTotal += myTotal[i];
   	}
   return finalTotal;
}
//let myTotal = total();

function removeFromCart(item) {
  let itemName = [];

   for(var i = 0; i < cart.length; i++){
     itemName.push(cart[i].itemName)
     }

   let index = itemName.indexOf(item);

   if(index > -1){
      cart.splice(index, 1)
      return cart
   } else {
     return `That item is not in your cart.`
   }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart = []
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
}
