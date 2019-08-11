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
 item = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`;
}

function customerLine(cart) {
  let newCart = [];
  for (let i = 0; i < cart.length; i++) {
    newCart[i] = `${cart[i].itemName} at $${cart[i].itemPrice}`;
  };
  return newCart.slice(0,-1).join(', ') + ', and ' + newCart.slice(-1);
};

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    return `In your cart, you have ${customerLine(cart)}.`;
  };
};

function total() {
  // write your code here
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  };
  return totalPrice;
};

function removeFromCart(item) {
  // write your code here
  // let removeItem = cart.map(function(item) { return item.itemName; }).indexOf('item');
  for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item) {
          return cart.splice(i, 1);
        };
    };
  return "That item is not in your cart.";
};

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let outputCart = [`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`, cart.splice(0, cart.length)];
    return outputCart[0];
  };
};

//console.log(addToCart('biscuits'));
//console.log(addToCart('mangoes'));
//console.log(addToCart('tomatoes'));
//console.log(addToCart('cookies'));
//console.log(viewCart());
//console.log(total());

//console.log(removeFromCart('tomatoes'));
//console.log(cart);

//console.log(placeOrder(934523));
//console.log(cart);
