var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(newObj)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length===0){
    return "Your shopping cart is empty."
  } else{
    let cartInfo="In your cart, you have"
    for (let i=0;i<cart.length;i++){
      if(cart.length===1){
        cartInfo =cartInfo + ` ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else if (i+1===cart.length){
        cartInfo= cartInfo + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
        cartInfo = cartInfo + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
    return cartInfo
  }
}


function total() {
  var totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].itemPrice
    /* Or you can define a var before, like var price = cart[i].itemPrice, then
    write totalCost = totalCost + price. That would be acceptable too, but
    would create another variable. Could be seen as more organized? Also
    this loops over all the things in the cart. Also you can write totalCost =
    totalCost + cart[i].itemPrice like this totalCost+= cart[i].itemPrice, its
    shorter notation for the same thing.*/
  }
  return totalCost
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you."
} else {
  var totalCost = total()
  cart = [];
}
return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}

// helper functions
function getRandomInt(min, max) {
}

function generateCartItem(itemName) {

}
