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
 cart.push({"itemName":[item], "itemPrice":Math.floor(Math.random()*100)+1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length==0){
    return 'Your shopping cart is empty.'
  }
  var str=`In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`
  if(cart.length==1){
    return `${str}.`
  }
  for(let i=1;i<cart.length;i++){
    str=`${str}${i<cart.length-1?`, ${cart[i].itemName} at \$${cart[i].itemPrice}`:`, and ${cart[i].itemName} at \$${cart[i].itemPrice}.`}`
  }
  return str
}

function total() {
  // write your code here
  var p=0
  for(let i=0;i<cart.length;i++){
    p+=cart[i].itemPrice
  }
  return p
}

function removeFromCart(item) {
  // write your code here
  let i=0
  while(i<cart.length){
    if(cart[i].itemName===item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
