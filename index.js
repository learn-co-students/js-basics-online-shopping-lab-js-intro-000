var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

const addToCart = (itemName) => {
  let cartObject = {};
  let randomPrice = Math.floor(Math.random() * 100 + 1);

  cartObject["itemName"] = itemName;
  cartObject["itemPrice"] = randomPrice;
  cart.push(cartObject);

  return `${itemName} has been added to your cart.`;
}

const viewCart = () => {
  if (cart.length === 0) return "Your shopping cart is empty.";

  let items = [];
  let endStr = 'and ';
  let endItem = cart[cart.length-1]["itemName"];
  let endPrice = cart[cart.length-1]["itemPrice"];

    for (let i = 0; i < cart.length-1; i++) {
      let item = cart[i]["itemName"];
      let price = cart[i]["itemPrice"];
      items.push(`${item} at $${price}`);
    }
    if (cart.length === 1){
      return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`;
    } else {
      endStr += `${endItem} at $${endPrice}`;
      return `In your cart, you have ${items.join(", ")}, ${endStr}.`;
    }
  }

const total = ()  => {
  let totalValue = 0;

  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i].itemPrice;
  }
  return totalValue;
}

const removeFromCart = (item) => {
    for (let i = 0; i < cart.length; i++) {
      let myObj = cart[i]["itemName"];

      if (myObj === item) {
        cart.splice(i, 1);
        return cart;
    }
  }
  return 'That item is not in your cart.';
}

const placeOrder = (creditCard) => {
   if (typeof creditCard === 'undefined') {
     return 'Sorry, we don\'t have a credit card on file for you.';
   } else {
     let currentTotal = total();
     cart = [];
     return `Your total cost is $${currentTotal}, which will be charged to the card ${creditCard}.`;
   }
}
