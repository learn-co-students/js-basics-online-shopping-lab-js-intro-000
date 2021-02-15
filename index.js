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
  var outputSentence='In your cart, you have'

  for(let i=0;i<cart.length;i++){

if (cart.length===1){
  outputSentence=`${outputSentence} ${cart[0].itemName} at $${cart[0].itemPrice}.`
}else{
    if(cart.length-1===i){
      outputSentence=`${outputSentence} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }else
    {
      outputSentence=`${outputSentence} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
  }
}

  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  return outputSentence
}


function total(){
var totalNumber=0
for(let i=0;i<cart.length;i++){
  totalNumber= totalNumber + cart[i].itemPrice
}

return totalNumber
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
