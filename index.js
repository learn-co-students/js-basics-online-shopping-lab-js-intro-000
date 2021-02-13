var cart=[]
function addToCart(name){
  var item={
    itemName: name,
    itemPrice:Math.floor(Math.random() * Math.floor(100))
  }
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
  }


function viewCart(){
var cartString='In your cart, you have'
if (cart.length===1){
  cartString=`${cartString} ${cart[0].itemName} at $${cart[0].itemPrice}.`
}
else{
for(let i=0;i<cart.length;i++){
    if(cart.length-1===i){
    cartString=`${cartString} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  } else {
    cartString=`${cartString} ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
}}
if (cart.length===0){
  return 'Your shopping cart is empty.'
}
return cartString
  }


function total(){

}
function removeFromCart(){

}
function placeOrder(){

}

function setCart(c) {
  cart = c;
  return cart;
}

function getCart() {
 return cart;
}
