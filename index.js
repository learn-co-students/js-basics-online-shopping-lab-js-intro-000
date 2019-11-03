let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newObj = {
    itemName: [item],
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(newObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    let itemString = ""
    for (let i = 0; i < cart.length; i++) {
      // check if AND is needed if there's more than 1 item in cart and if it's the last item.
      if (cart.length > 1 && i == cart.length - 1) {
        itemString += 'and ';
      }
      itemString += `${cart[i].itemName} at $${cart[i].itemPrice}`
      // check if comma is needed if there's more than 1 item in cart and if it's not the last item.
      if (cart.length > 1 && i !== cart.length - 1) {
        itemString += ', ';
      }
    } return `In your cart, you have ${itemString}.`
  }
}

function total() {
  let priceTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    priceTotal += cart[i].itemPrice;
  } return priceTotal;
}

function removeFromCart(item) {
  let itemBool = false;
  for (let i = 0; i < cart.length; i++) {
    // check if current item is equal to current index.
    if (item == cart[i].itemName) {
      //if it matches, remove the item, and evaluate itemBool to true.
      cart.splice(i, 1)
      itemBool = true;
    }
  }
  // if true, return cart without item. if false, return not in cart.
  return itemBool ? cart : 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    let sentence = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return sentence;
  }
}
