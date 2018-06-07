var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var curItem={'itemName':item, 'itemPrice':Math.floor(Math.random()*100)}
 cart.push(curItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0){
    str= 'Your shopping cart is empty.'
  }
  else {
    var str=`In your cart, you have `;
    if (cart.length===1){
       str=str + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`}
     else {
       for (var i=0; i<cart.length-1; i++){
      str=str + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `}
    str=str+`and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  }}
  return str
}

function total() {
  var sum=0
  for (let i=0; i<cart.length; i++){
    sum=sum+cart[i]['itemPrice']
  }
  return sum
}

function removeFromCart(item) {
  var rem='NA'
  for (let i=0; i<cart.length; i++){
    if (cart[i]['itemName']===item){
      rem=i
      cart.splice(rem,1)
      return cart
    }
  }
  if (rem='NA'){
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  var tot=total()
  cart=[]
  if (typeof cardNumber==='undefined'){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
