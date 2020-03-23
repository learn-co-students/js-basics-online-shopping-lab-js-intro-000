var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart(){
    let cartStatement = `In your cart, you have `
    if(cart.length === 0){
        return 'Your shopping cart is empty.'
    }
    else if(cart.length === 1){
        cartStatement = cartStatement + `${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    }
    else if(cart.length === 2){
        cartStatement = cartStatement + `${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`
    }
    else {
        for (i = 0; i < cart.length - 1; i++){
            cartStatement = cartStatement + `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `
        }
        cartStatement = cartStatement + `and ${cart[cart.length -1]["itemName"]} at $${cart[cart.length -1]["itemPrice"]}.`
    }
    return cartStatement
}
  // write y

function total() {
  let cartTotal = 0
  for (i = 0; i < cart.length; i++){
    cartTotal += cart[i]["itemPrice"]
  }
  return cartTotal
}

function removeFromCart(item) {
  let thereOrNot = 0
    let i = 0
    while ( i < cart.length){
        if (cart[i]["itemName"] === item){
            thereOrNot = 1
            cart.splice(i,1)
            return cart
        }
        else {
            i++
        }
    }
    if (thereOrNot === 0){
        return "That item is not in your cart."
    }
    else{
    }
}

  // write your code here
}

function placeOrder(cardNumber) {
    if (cardNumber === undefined){
        return "Sorry, we don't have a credit card on file for you."
    }
    else {
        cart.splice(0)
        return `Your total cost is $${total()}, which will be charged to the cart ${cardNumber}.`
    }
  }
