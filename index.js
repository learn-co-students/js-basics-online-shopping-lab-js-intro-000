var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1
  const itemObj = {itemName: `${item}`, itemPrice: price}
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0 && cart.length <= 2){

    let count = 0;
    let output = 'In your cart, you have '

    do {
      output +=`${cart[count].itemName} at $${cart[count].itemPrice}, and `
      count++
    } while (count < cart.length)

    return `${output.slice(0, -6)}.`
  }

  else if (cart.length >= 3){

    let output = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `

  for(let i = 1 ; i < cart.length - 1 ; i++){
    output +=`${cart[i].itemName} at $${cart[i].itemPrice}, `
    }

    return output += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }

return 'Your shopping cart is empty.'
}

function total() {
  let total = 0;

  for (let indx in cart){
    total += cart[indx].itemPrice
  }
  return total
}

function removeFromCart(item) {

  for (let obj in cart){

    if (cart[obj].itemName === item){
      cart.splice(obj, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {

  if (typeof cardNumber === 'number'){

    let total = 0;

    for (let indx in cart){
      total += cart[indx].itemPrice
    }

    cart.splice(0, cart.length)
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  }

  return 'Sorry, we don\'t have a credit card on file for you.'
}
