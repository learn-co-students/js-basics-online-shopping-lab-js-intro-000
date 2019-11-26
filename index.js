var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  var element = {}
  element['itemName'] = item;
  element['itemPrice'] = value;
  cart.push(element);

  var rslt = `${item} has been added to your cart.`;
  return rslt;
}

function viewCart() {
 var temp = "";

  if (cart.length == 0){
    return "Your shopping cart is empty."
  }

  if (cart.length == 1){
    var item = cart[0].itemName;
    var value  = cart[0].itemPrice;
    temp += `${item} at $${value}.`
    var result = `In your cart, you have ${temp}`
    return result;
  }


  if (cart.length >= 2){
    for (let i = 0; i <= cart.length-1;i++){
      var item = cart[i].itemName;
      var value  = cart[i].itemPrice;
      if (i < cart.length-1){
        temp += `${item} at $${value}, `
      }
      if (i == cart.length-1){
          temp += `and ${item} at $${value}.`
      }
    }//end for
    var result = `In your cart, you have ${temp}`
    return result;
  }//end if
}

function total() {
  var total = 0;
  for (let i = 0; i <= cart.length-1;i++){
    var value  = cart[i].itemPrice;
    total = total + value;
  }//end for

  return total;
}

function removeFromCart(item) {
  var found = cart.findIndex(x => x.itemName ===item);

  if (found == -1){
    return "That item is not in your cart."
  }

  if (found > -1){
    cart.splice(found,1);
    return cart;
  }
}//end function

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var total = 0;
    for (let i = 0; i <= cart.length-1;i++){
      var value  = cart[i].itemPrice;
      total = total + value;
    }//end for

    cart = []
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }//end if

}
