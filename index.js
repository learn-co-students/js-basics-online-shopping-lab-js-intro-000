var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {
   itemName: item,
   itemPrice: getRandomInt(99) + 1
 }// add to cart called 1 1 object at index 0
 cart.push(newItem)
 return `${item} has been added to your cart.`
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function viewCart() {
  if(cart.length === 1 ){
    var itemObject1 = cart[0]
    return `In your cart, you have ${itemObject1['itemName']} at $${itemObject1['itemPrice']}.`
  }// returing a string that uses data from the object.

  else if(cart.length === 2){
    var itemObject1 = cart[0]
    var itemObject2 = cart[1]
    return `In your cart, you have ${itemObject1['itemName']} at $${itemObject1['itemPrice']}, and ${itemObject2['itemName']} at $${itemObject2['itemPrice']}.`
  }
  else if (cart.length >= 3) {
  var itemStrings = []
  for(var i = 0; i < cart.length; i++ ){
      var itemObject = cart[i]
    if(i === cart.length-1){ // are we on the last index on this array
      itemStrings.push(`and ${itemObject['itemName']} at $${itemObject['itemPrice']}.`) // last one to add "and"
    }
    else {
      var string = `${itemObject['itemName']} at $${itemObject['itemPrice']}`
      itemStrings.push(string)
    }
  }
return  "In your cart, you have " +  itemStrings.join(', ')
}
else if(cart.length === 0){
  return `Your shopping cart is empty.`
}
}

function total() {
      var totalAmt = 0
  for(var i = 0; i < cart.length; i++){
  totalAmt += cart[i].itemPrice // What we are doing is we are taking the prices in the cart iterating thru them, and then adding them up and storing them in totalAmt
  }
  return totalAmt
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if( cart[i].itemName === item){ // iterates thru the objects,
    return cart.splice(i, 1)
  }
    }
    return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber){ // is cardNumber a truthy value .. Test will push in placeholder
    var Msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`//empty out cart?
    setCart([])// call set cart, array becomes c var as an empty array. Destructive method, changing the whole cart. 
    return Msg
  }
  return "Sorry, we don't have a credit card on file for you."
}
