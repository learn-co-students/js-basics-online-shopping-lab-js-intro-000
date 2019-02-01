var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
let price = Math.floor(Math.random() * 101);
let item = {itemName: name,
            itemPrice: price  };
  cart.push(item)
  return `${item["itemName"]} has been added to your cart.`
}

function viewCart() {
  let response = "In your cart, you have";
  let list = [];
  let last_item = "and";

    if (cart.length > 0) { // length of my cart is greater than 0 then do the following

      for (var i = 0; i < cart.length; i++) { // start counting through eah element and then keep doing it by incrementing one to it.
        if (cart.length === 1){ // length of my cart equals one then i need you to renturn my response which is In the cart you have, plus my item with its name with that items price
          return response + ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`;
        }
        else if (i === cart.length -1 ) { // counter equals the last item return the statement stored in a variable which is a storage that says " and with the items name and its price"
          last_item = `, and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
        } else { // if none of these are true than just spit up the regular statement of item along with its price
          let list_of_items = ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`;
          list.push(list_of_items)
        }
      }
    }else { // meaning if there is no item on the cart just print out the statement below.
      return "Your shopping cart is empty."
    }
  return response + list + last_item + '.';
}

function total() {
  let sum =0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i]["itemPrice"];

  }
  return sum
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }

  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber != undefined) {
      let checkOut = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
      cart.splice(0,cart.length);
      return checkOut;
  }   else {
      return "Sorry, we don't have a credit card on file for you.";
  }

}
