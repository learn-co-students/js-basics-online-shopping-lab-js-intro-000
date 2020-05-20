var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
      var price=1+Math.floor(Math.random()*100)
      cart.push({"itemName":`${itemName}`, "itemPrice":price})
      return`${itemName} has been added to your cart.`
 // write your code here
}

function viewCart() {
// if empty
  if (cart.length===0){
    return "Your shopping cart is empty."
  }
  //if one item
    if(cart.length===1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  // if two item
  if(cart.length===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
}
  //if more than 2
  if (cart.length>2){
    var list =`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for(var i=1; i<cart.length-1; i++){
    list += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
  }
    list += `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return list
  }
}

function total() {
var sum = 0
  for(var i=0; i<cart.length; i++){
sum = sum + cart[i].itemPrice
  }
return sum
}


function removeFromCart(item) {
  for(var i=0; i<getCart().length; i++){
    if (getCart()[i].itemName === item){
      getCart().splice(i,1);
      break;}
      }
      return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  if (cardNumber == null||""){
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var charge = total();
    cart=[]
    return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`;
        //for(var i=0; i<getCart().length; i++){
        }
}


function generateItem(itemName){
  return{
    itemName:itemName,
    itemPrice:1+Math.floor(Math.random()*100)

}
}

function generatePrice(){
  var price=Math.floor(Math.random()*100)
}
