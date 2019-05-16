var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100)+1});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0) {
    return 'Your shopping cart is empty.';
  } else {
    let str='In your cart';
    for(let i=0;i<cart.length;++i) {
      if(i===0) {
        str+=', you have ';
      } else if(i===cart.length-1) {
        str+=', and ';
      } else {
        str+=', ';
      }
      str+=`${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    str+='.';
    return str;
  }
}

function total() {
  return cart.reduce((sum,item)=>sum+item.itemPrice,0);
}

function removeFromCart(item) {
  let index = -1;
  for(let i=0;i<cart.length;++i) {
    if(cart[i].itemName===item) {
      index = i;
    }
  }
  if (index===-1) {
    return 'That item is not in your cart.';
  }
  return cart.splice(index,1);
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  let str=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return str;
}
