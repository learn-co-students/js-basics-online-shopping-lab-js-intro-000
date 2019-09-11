var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var item = new Object();
  item.itemName = itemName;
  item.itemPrice = Math.floor(Math.random() * 100);

  cart.push(item);
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  if (!cart.length) {
    return `Your shopping cart is empty.`;
  }

  var cartPreview = [];
  for (let i = 0; i < cart.length; i++) {
    cartPreview.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`);
  }

  if (cartPreview.length === 1) {
      return `In your cart, you have ${cartPreview}.`;
    } else {
      return `In your cart, you have ${cartPreview.slice(0, cartPreview.length-1).join(", ")}, and ${cartPreview.slice(cartPreview.length-1, cartPreview.length)}.`;
  }
}

function total() {
  var priceList = [];

  for (let i = 0; i < cart.length; i++) {
    priceList.push(cart[i].itemPrice);
  }

  var total = priceList.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return total;
}

function removeFromCart(itemName) {
  var itemInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === `${itemName}`) {
      cart.splice(i, 1);
      itemInCart = true;
    }
  }

  if (itemInCart !== true) {
    return `That item is not in your cart.`;
  }
}


function placeOrder(cardNumber) {

 var totalCost = total();

 if (!cardNumber) {
   return `Sorry, we don't have a credit card on file for you.`
 } else {
   cart.length = 0;
   return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`
 }
}
