var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
                  //object, key, value
function addToCart(item) {                   //object type is getCart
    var ran_price = Math.floor(Math.random() * 100) +1 ;
    var new_item = {
      itemName : item,
      itemPrice : ran_price,
    }
    cart.push(new_item);
    return new_item.itemName + ' has been added to your cart.';
  }

function viewCart() {
  // write your code here
  var arr = [];

  for(let i = 0; i < cart.length; i++){
    arr.push(cart[i].itemName + ' at $' + cart[i].itemPrice)
  }
    if (cart.length===0){
      return "Your shopping cart is empty."
    }
    else if(cart.length===1){

      return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
    }
    else if(cart.length===2){
      return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName
      + " at $" + cart[1].itemPrice + ".";
    }
    else{
      let lastItem = arr.pop();
      return 'In your cart, you have '  + arr.join(', ') + ', and ' + lastItem + '.';
    }
}

function total() {
  // write your code here
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++){
    totalValue += cart[i].itemPrice;
  }
  return totalValue;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){                      //if the item name is in the cart array list
      cart.splice(i, 1);                               //remove the 1st item from the cart
      return cart;                                     //return the new result
    }
  }
  return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  // write your code here
  let totalValue = 0;           //
  totalValue = total();
  cart = [];

  if (cardNumber){                        //
        return ("Your total cost is " + "$" + total() + ", " + "which will be charged to the card " + cardNumber + ".")
  } else {
      return ("Sorry, we don't have a credit card on file for you.")
  }


}
viewCart()
total()
