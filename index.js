var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor((Math.random() * 100)) })
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
                        }
  else {
         var viewItems = []

         for (let i = 0; i < cart.length; i++){
         if (i === cart.length - 1 && i != 0 )
         {
         viewItems.push(`and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
         }
         else{
              viewItems.push(`${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
             }
       }
    return `In your cart, you have ${viewItems.join(', ')}.`
  }
}

function total() {
  let all = 0
  for (let i = 0; i < cart.length; i++){
    all += cart[i]['itemPrice']
  }
  return all
}

function removeFromCart(item) {
         var removed = []
         for ( let i = 0; i < cart.length; i++){

          if (cart[i]['itemName'] === item)
          {
          removed.push(cart.splice(i,1))
          return cart
          }
      }
          if (removed.length === 0)
          {
          return "That item is not in your cart."
          }
}

function placeOrder(cardNumber) {
  if (cardNumber){
    const sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
  else {
  return "Sorry, we don't have a credit card on file for you."
 }
}
