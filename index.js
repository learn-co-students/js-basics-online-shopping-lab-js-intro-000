var cart = [];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=getRandomInt(100)+1
  var obj=new Object()
  obj.itemName=item
  obj.itemPrice=price
  cart.push(obj)
  return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
  var str=""
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  else if( cart.length===1){
    str=`${cart[0].itemName} at \$${cart[0].itemPrice}.`
    return `In your cart, you have ${str}`
  }
  else{
    var newArr= new Array()
    for (var i = 0; i<cart.length; i++){
      if(i===cart.length-1){
        str=` and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
    }
    else{
      str=` ${cart[i].itemName} at \$${cart[i].itemPrice}`
    }
    newArr[i]=str
    }
    return "In your cart, you have" +newArr
  }

}

function total() {
  var i = 0
  for (var l=0; l<cart.length; l++){
    i=i+cart[l].itemPrice
  }
  return i
}

function removeFromCart(item) {
  var val = ""
  var deleted = false
  for(var i=0; i<cart.length; i++){
    val=cart[i].itemName
    if(item==val){
      cart.splice(i, 1, cart[i+1])
      cart.length=cart.length-1
      deleted = true
      }
    }
    if (deleted===true){
      return cart
    }
    else{
      return "That item is not in your cart."
    }
}

function placeOrder(cardNumber) {
  if(cardNumber){
    var str= `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
    cart= new Array()
    return str

  }
  else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
