var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const itemAndPrice = {
    [item]: Math.floor(Math.random() * (100 - 1)) + 1
  }

  //log what item will be added to the cart arrays
  console.log(`${item} has been added to your cart.`)

  // Needs to return name and value - { itemName: itemPrice }
  cart.push(itemAndPrice)

  return cart
}

function viewCart() {

  if (cart.length > 0) {
    var objList = {}
    var objCount = 0
    var msg = "In your cart, you have"
    var message = ''
    var prodArr = []

    // extract objs from array and put in new obj, cant remember why i did this
    for (var i = 0, l = cart.length; i < l; i++) {
     var extractObjs = Object.assign({}, cart[i])

      Object.keys(extractObjs).forEach(function(key) {
        objList[key] = extractObjs[key]
      });

    }

    for(var itemsList in objList) {
      if(objList.hasOwnProperty(itemsList)){
        prodArr.push(`${itemsList} at $${objList[itemsList]}`)
        objCount++
      }
    }

    switch ( objCount > 0 ) {
      case objCount === 1:
        message = `In your cart, you have ${prodArr[0]}.`;
        break;
      case objCount === 2:
        message = `In your cart, you have ${prodArr[0]} and ${prodArr[1]}.`;
        break;
      case objCount === 3:
        message = `In your cart, you have ${prodArr[0]}, ${prodArr[1]}, ${prodArr[2]}.`;
        break;
      default:
        message = `In your cart, you have ${objCount} items.`
    }

  } else {
    console.log("Your shopping cart is empty.")
  }

console.log(message)
}

function total() {
  var objTotal = {}
  var totalCost = 0
  var priceArr = []
  // extract objs from array and put in new obj, cant remember why i did this
  for (var i = 0, l = cart.length; i < l; i++) {
    var extractObjs = Object.assign({}, cart[i])

    Object.keys(extractObjs).forEach(function(key) {
      objTotal[key] = extractObjs[key]
    });
  }

  for(var itemPrice in objTotal){
    if(objTotal.hasOwnProperty(itemPrice)){
      priceArr.push(objTotal[itemPrice])
    }
  }

 for (var i = 0; i < priceArr.length; i++) {
   console.log(totalCost += priceArr[i])
 }

return totalCost
}

function removeFromCart(item) {
  cart.pop()
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var t = total()
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
