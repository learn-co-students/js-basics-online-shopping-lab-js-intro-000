var cart = [];

function randomGen(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min

}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = randomGen(1,100)
 var obj = {itemName: item, itemPrice : price }
 getCart().push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {


  var cartList = "In your cart, you have"
  var cartLength = Object.keys(cart).length

  if (cartLength === 0)
  {
    cartList = "Your shopping cart is empty."
}else if (cartLength > 1) {
  for(var i = 0; i<(cartLength -1); i++)
  {
    cartList += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  cartList += ` and ${cart[cartLength-1].itemName} at $${cart[cartLength-1].itemPrice}.`
} else {
  cartList += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
}
return cartList
}

function total() {

  var total = 0
  for (var i = 0; i<Object.keys(cart).length; i++)
  {
    total += cart[i].itemPrice
  }
  return total
  debugger
}

function removeFromCart(item) {
  var done = false
  var count
  for (var i = 0; i<Object.keys(cart).length; i++)
  {
    if (cart[i].itemName === item)
    {
      done = true
      count=i
    }
  }
  if (done===true)
  {
    cart.splice(count, 1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  setCart([])
  var totalCost = total()
  if (cardNumber === undefined){
  return "Sorry, we don't have a credit card on file for you."
}else{
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}

}
