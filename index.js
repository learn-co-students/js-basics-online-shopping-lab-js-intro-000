var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem= {itemName: item, itemPrice: Math.random()*10}
  cart.push(newItem)
  return `${item} has been added to your cart.`
}


function viewCart() {
  var inCart = ''
  if (cart.length===0) {
    return "Your shopping cart is empty."

  } else if (cart.length===1){
    var oneItem= `${cart[0].itemName} at $${cart[0].itemPrice}`
    return 'In your cart, you have ' + oneItem +'.'

  } else {
    for (let i=0; i<(cart.length-1); i+=1) {
      inCart += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    var lastItem= `and ${cart[-1].itemName} at $${cart[-1].itemPrice}`
    var showCart= 'In your cart, you have ' + inCart + lastItem + '.'

  }
  return showCart
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
