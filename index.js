var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push(Object.assign({} , {itemName: item}, {itemPrice: Math.floor(Math.random() * Math.floor(100))}))
 return `${item} has been added to your cart.`
}

function viewCart(){
  let fullCart = []
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1){
    fullCart.push(` ${cart[0].itemName} at $${cart[0].itemPrice}.`)
    }else {
    for(let i =0; i < cart.length; i++){
      if (i+1 === cart.length){
        fullCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
        } else {
      fullCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }}

  }
  return 'In your cart, you have' + fullCart
}


function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  let i = -1
  while (i < cart.length -1){
    i++
    if (item === cart[i].itemName){
      return cart.splice(i,1)
    }
  }
  return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  if(cardNumber == null){
    return ('Sorry, we don\'t have a credit card on file for you.')
} else {
    var cost = total()
    cart = []
    return (`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
}
}
