var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var cartItem =
  {itemName:item,
  itemPrice: Math.floor((Math.random()* 10)+ 1)
}
cart.push(cartItem)
return `${item} has been added to your cart.`
}

function viewCart() {
var itemsAndPrices = []

  for (var i = 0; i <= cart.length - 1; i ++){
  var itemAndPrice = []
    Object.entries(cart[i]).forEach(([key, value]) => itemAndPrice.push(value))
  	itemsAndPrices.push(itemAndPrice);
    }

var itemContents = []

  if (itemsAndPrices.length <= 2){
    for (var i = 0; i <= itemsAndPrices.length -1; i ++){
    itemContents.push(`${(itemsAndPrices[i])[0]} at $${(itemsAndPrices[i])[1]}`)
    }
  }else {
    for (var i = 0; i <= itemsAndPrices.length -1; i ++){
    itemContents.push(` ${(itemsAndPrices[i])[0]} at $${(itemsAndPrices[i])[1]}`)
    }
  }


    if (itemContents.length === 0){
    return "Your shopping cart is empty."
    } else if (itemContents.length === 1) {
    return `In your cart, you have ${itemContents}.`
  } else if (itemContents.length === 2){
    return [`In your cart, you have ${itemContents.slice(0, itemContents.length - 1)}, and ${itemContents.slice(-1)}.`]
    } else if (itemContents.length >= 3){
    return [`In your cart, you have${itemContents.slice(0, itemContents.length - 1)}, and${itemContents.slice(-1)}.`]
    }
}


function total() {
  var itemsAndPrices = []

  for (var i = 0; i <= cart.length - 1; i ++){
  var itemAndPrice = []
    Object.entries(cart[i]).forEach(([key, value]) => itemAndPrice.push(value))
  	itemsAndPrices.push(itemAndPrice);
    }

var sum = 0

  for (var i = 0; i <= itemsAndPrices.length -1; i ++){
  sum += (itemsAndPrices[i])[1]
  }
return sum
}


function removeFromCart(item){
var counter = 1
var notDeleted = "not deleted"
        for (var i = 0; i <= cart.length - 1; i ++){
                Object.entries(cart[i]).forEach(([key, value]) => {

                   if (item === value){
                     return cart.splice(i, 1)
                  } else if (counter === 2*(cart.length)){
                      return notDeleted = "That item is not in your cart."

                  } else {
                    counter += 1
                  }
                })
        }
  if (notDeleted === "That item is not in your cart."){
  return notDeleted
  }
}


function placeOrder(cardNumber) {
if (typeof cardNumber === 'undefined'){
  return 'Sorry, we don\'t have a credit card on file for you.'
} else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }
}
