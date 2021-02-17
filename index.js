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
function removeFromCart(nameOfItemRemoved){
var cartLength=cart.length
for (let i = 0; i < cart.length; i++){
  if(cart[i].itemName===nameOfItemRemoved){
    cart.splice(i,1)
}

  }
  if(cartLength===cart.length){
    return "That item is not in your cart."
  }
return cart
}
function placeOrder(creditCardNumber){
  if(creditCardNumber===undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  var totalPrice=total()
  cart=[]
return`Your total cost is $${totalPrice}, which will be charged to the card ${creditCardNumber}.`
}


function setCart(c) {
  cart = c;
  return cart;
}

function getCart() {
 return cart;
}
