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
 let min = 1;
 let max = 100;
 let newItem = { itemName: item, itemPrice: Math.floor(Math.random() * (max - min + 1) + min), };
 cart.push(newItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
 let newList = [];

 if (cart.length > 0 && cart.length < 2) { //one item cart 
   for(let i = 0; i < cart.length; i++) {
  	 newList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
   }
 //newList.push(`${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`)
 return `In your cart, you have ${newList.join()}.`;
   } else if (cart.length > 1) {
  for(let i = 0; i <= cart.length-2; i++) {
  	newList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    newList.push(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`)
    return `In your cart, you have ${newList.join(', ')}.`;
  } else {
 	return "Your shopping cart is empty.";
   }
}

function total() {
  // write your code here
  let priceTotal = 0
 for(let i = 0; i < cart.length; i++) {
    let priceTotal = 0 + cart[i].itemPrice
  }
  return priceTotal 
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
