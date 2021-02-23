var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var ite = item
  var rice = Math.floor(Math.random()*100)+1
  var newarr = {itemName:`${item}`, itemPrice: rice}
  cart.push(newarr)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart[0]== undefined) {return 'Your shopping cart is empty.'}
  else if (cart[1]==undefined) {
    var ite = cart[0]['itemName']
    var pri = cart[0]['itemPrice']
    return `In your cart, you have ${ite} at $${pri}.`
  }
  else if (cart[2]==undefined) {
    var pri1 = cart[0]['itemPrice']
    var ite1 = cart[0]['itemName']
    var pri2 = cart[1]['itemPrice']
    var ite2 = cart[1]['itemName']
    return `In your cart, you have ${ite1} at $${pri1}, and ${ite2} at $${pri2}.`
  }
  else {
    var state = `In your cart, you have `
    for (i = 0;i<cart.length;i++) {
      var i = i
      var pri = cart[i]['itemPrice']
      var ite = cart[i]['itemName']
      state = state + ite +' at $' + pri
      if (i<cart.length-2) {state = state + ', '}
      else if (i<cart.length-1) {state = state + ', and '}
      else {state= state + '.'}
    }
    return state
  }
}

function total() {
  var total = 0
  for (i=0;i<cart.length;i++) {
    var i = i
    total = total + cart[i]['itemPrice']
  }
  return total
}

function removeFromCart(item) {
  var item = item
  var items = []
  for (i=0;i<cart.length;i++) {
    var i=i
    var ite = cart[i]['itemName']
    items.push(ite)
  }
  var n = items.includes(item)
  if (n==false) {return 'That item is not in your cart.'}
  if (n==true) {
    var ind = items.indexOf(item)
    cart.splice(ind,1)
    return cart
  }
}

function placeOrder(cardNumber) {

  if (cardNumber== undefined ) {return "Sorry, we don't have a credit card on file for you."}
  else {
    var tot = total()
    cart = []
    return `Your total cost is $${tot}, which will be charged to the card ` + cardNumber + '.'

  }
}
