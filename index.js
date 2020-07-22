var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( {itemName: item, itemPrice: Math.floor(Math.random() * 101)} );
  return( `${item} has been added to your cart.`);
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateStatement()
}

function total() {
 
  const allPrice = []
  for (let i = 0; i < getCart().length; i++){
    allPrice.push(parseInt(`${getCart()[i].itemPrice}`))
  }

  const cartTotal = allPrice.reduce(function(a, b) {
    return a + b
  }, 0 )

  return(cartTotal)

}

function removeFromCart(item) {
  
    var itemToRemove = searchCartForItemToRemove(item)
    return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
  }


function placeOrder(cardNumber) {

  // if no cardNumber, retrun "Sorry, we don't have a credit card on file for you."
  // if cardNumber, empty cart array, return "Your total cost is ${totalCartCost}, which will be charged to the card ${cardNumber}"

  return cardNumber ? orderIsGood(cardNumber) : noCardNumber() 

}

// helper methods

function orderIsGood(cardNumber) {

  const allPrice = []
  for (let i = 0; i < getCart().length; i++){
    allPrice.push(parseInt(`${getCart()[i].itemPrice}`))
  }
  const cartTotal = allPrice.reduce(function(a, b) {
    return a + b
  }, 0 )

  cart = []
  
  return( `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)

}

function noCardNumber(){
  return "Sorry, we don't have a credit card on file for you."
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}

function generateStatement() {
  let cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    let middleCartItemsDescription = ''
    for (let i = 1; i < getCart().length - 1; i++ ) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartDescription}.`
}