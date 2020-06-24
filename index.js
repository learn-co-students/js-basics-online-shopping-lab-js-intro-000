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
 cart.push({itemName:item,itemPrice:Math.floor(100*(Math.random()))});
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartList='In your cart, you have'
  if(cart.length!==0){
    if(cart.length !== 1){
        for (let i=0;i<cart.length;i++){
    if(i!==cart.length-1){
      cartList = `${cartList} ${cart[i].itemName} at $${cart[i].itemPrice},`
    } else{
      cartList = `${cartList} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }}else{
    cartList = `${cartList} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
return cartList;
}else{
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  var cartValue=0
  for(let i=0;i<cart.length;i++){
    cartValue += cart[i].itemPrice
  }
  return cartValue
}

function removeFromCart(item) {
  // write your code here
  var sign =-1
  for(let i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
      sign = i
    }
  }
  if (sign !== -1){
    cart.splice(sign,1)
    return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
   var finalTotal = total()
   cart=[]
   return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
 }else{
   return 'Sorry, we don\'t have a credit card on file for you.'
 }
  }
