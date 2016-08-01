var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else {
    let log = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++){
      let item = cart[i];
      for (var itemName in item){
        if (i !== cart.length - 1){
          log += `${itemName} at $${item[itemName]}, `;
        } else {
          log += `${itemName} at $${item[itemName]}.`;
        }
      }
    }
    console.log(log);
  }
}

function removeFromCart(item){
    for (var i = 0; i < cart.length; i++){
      let currentItem = cart[i];
      if (currentItem[item]){
        cart.splice(i, 1);
        return cart;
      }
    }

    console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}


function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
