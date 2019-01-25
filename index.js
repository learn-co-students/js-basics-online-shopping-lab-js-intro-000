var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {
                    itemName : item,
                    itemPrice : Math.ceil(Math.random() * 100)
                  };
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  var message = "";
  if (cart.length === 0) {
    message = "Your shopping cart is empty."
  } else {
    message = "In your cart, you have "
  }
  for (let i = 0; i < cart.length; i++) {
    message += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i < cart.length -2) {
      message += ", ";
    } else if (i == cart.length -2) {
      message += ", and ";
    } else {
      message += ".";
    }
  }
  return message;
}

function total() {
  var tot = 0;
  for (let i = 0; i < cart.length; i++) {
    tot += cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  var message;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return viewCart();
    }
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (! cardNumber) {
    return("Sorry, we don't have a credit card on file for you.")
  } else {
    var tot = total();
    setCart([]);
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
