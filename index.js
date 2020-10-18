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
 let obj = { itemName: item };
 obj.itemPrice = Math.floor(Math.random() * (100 - 1) + 1);

 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    let string = 'In your cart, you have ';

    for (let i = 0; i < cart.length; i++) {
      let plus = `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;

      if (i !== 0) {
        string += ', '

        if (i === cart.length - 1) {
          string += 'and ';
        }
      }

      string += plus;
    }

    return string + '.';
  }
}

function total() {
  // write your code here
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseInt(cart[i].itemPrice);
  }

  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  let found = false;

  for (let i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === item) {
      found = true;
      // remove from cart
      setCart(getCart().slice(0, i).concat(getCart().slice(i + 1, getCart().length)));
      break;
    }
  }

  if (!found) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    let t = total();
    setCart([]);
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  }
}
