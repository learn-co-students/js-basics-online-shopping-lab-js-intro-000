var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var newObj = {
    itemName: itemName,
    itemPrice: Math.floor(Math.random() * (100 - 1 + 1) + 1)
  }
  cart.push(newObj);
  return itemName + " has been added to your cart."
  }

function viewCart() {
  var a = [];
cart.forEach(function(obj){
    a.push(obj.itemName);
})
  var b = [];
  cart.forEach(function(obj){
    b.push(obj.itemPrice);
  })
  var newCart = []
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${a['0']} at $${b['0']}.`;
  }
  else  {
    for (let i = 0; i < (cart.length - 1); i++) {
      newCart.push(` ${a[i]} at $${b[i]}`)
    }
    return `In your cart, you have` + newCart + `, and ${a[cart.length-1]} at $${b[cart.length-1]}.`
  }
}

function total() {
  var price = [];
  cart.forEach(function(obj){
    price.push(obj.itemPrice);
  })
  let sum = (a, b) => a + b;
  return price.reduce(sum)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      console.log(cart);
    }
}
      return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else if (typeof cardNumber === "number"){
    let cartPrice = [total()]
    cart.splice(0);
    return `Your total cost is $${cartPrice}, which will be charged to the card ${cardNumber}.`
  }
}
