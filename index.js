var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)+1})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var numItem=getCart().length

  if (numItem!=0) {
      var listItem = "In your cart, you have "
      for (let i=0;i<numItem;i++){
          if ( i==0)
              listItem += `${cart[i].itemName} at $${cart[i].itemPrice}`
          else if (i==numItem-1) {
              listItem += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
          } else
              listItem += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      listItem +='.'
      return listItem
  } else return "Your shopping cart is empty."
}

function total() {
  var totalprice=0
  for (let i=0;i<cart.length;i++)
    totalprice += cart[i].itemPrice
  return totalprice
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  var foundItem=false
  var allItems = cart.length
  var i=0

  if (allItems == 0) {
    return "That item is not in your cart."
  } else {
    while (i<allItems) {
      if (cart[i].itemName===item) {
        foundItem=true
        break
      } else i++

    }
    if (foundItem) {
       cart.splice(i,1)
       return cart
    } else return "That item is not in your cart."

  }

}

function placeOrder(cardNumber) {
  // write your code here
  if ( arguments.length == 0 ){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalprice=total()
    cart.length=0
    return `Your total cost is $${totalprice}, which will be charged to the card ${cardNumber}.`
    }
}
