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
  var obj = { itemName:item,
              itemPrice: Math.floor(Math.random() * 100)+1
            }
    cart.push(obj)
    return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var result = "In your cart, you have "
  if(cart.length < 1) return "Your shopping cart is empty."
  for (var i = 0; i < cart.length; i++) {
     if(cart.length === 1) result += `${cart[i].itemName} at $${cart[i].itemPrice}.`
     else if(i === (cart.length - 1)) result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
     else result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }

  return result
}

function total() {
  // write your code here
  var totalValue = 0
  for(let i = 0; i < cart.length; i++){
    totalValue +=cart[i].itemPrice
  }

  return totalValue
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
     if(cart[i].itemName === item) {
        cart.splice(i,i)
        return cart
     }
  }

  return "That item is not in your cart."
}

function placeOrder() {
  // write your code here
  if(arguments.length === 0) return "Sorry, we don't have a credit card on file for you."
  else{var cost = total()
   cart.splice(0)
  return `Your total cost is $${cost}, which will be charged to the card ${arguments[0]}.`
  }
}
