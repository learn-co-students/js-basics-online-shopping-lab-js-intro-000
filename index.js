var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var newitem = { itemName : `${item}`, itemPrice : Math.floor(Math.random()*100) }
    cart[cart.length] = newitem
   return (`${item} has been added to your cart.`);

  }


function viewCart() {
var tempcart = []

var l = cart.length
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)

  }
  else{for (let i = 0, l = cart.length-1; i < l; i++){
      tempcart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
      tempcart.push(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
      return (`In your cart, you have ${tempcart.join(', ')}`)

  }
}

function total() {
  var total = 0
  for (let i=0, l = cart.length; i<l; i++){
  total = total + cart[i].itemPrice;
  }
  return(total)
}

function removeFromCart(item) {
  for (let i=0, l = cart.length; i<l; i++){
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return (cart)
    }
  }
if (item != cart[item]){
      return ('That item is not in your cart.')}
  }

  function placeOrder(cardNumber) {

    if (typeof(cardNumber) === "undefined"){
      return "Sorry, we don't have a credit card on file for you."
    } else {
      
      var sum = total()
      cart=[]
      return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
    }
    // write your code here
  }
