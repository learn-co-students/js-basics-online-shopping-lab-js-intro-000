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
 var items = {};
 var price = Math.floor(Math.random()*Math.floor(101));
 items["itemName"] = item;
 items["itemPrice"] = price;
 cart.push(items);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var leng = cart.length;
  if (leng == 0){
    return "Your shopping cart is empty.";
  }
  else{
    var list_item = [];
    for (var i = 0; i < leng - 1; i++){
        list_item.push(cart[i]["itemName"] + " at $" + cart[i]["itemPrice"])
    }
    var new_string = ("In your cart, you have " + list_item.join(", "));
    if (leng != 1){
      new_string += ", and " + cart[leng-1]["itemName"]+ " at $" + cart[leng-1]["itemPrice"] +".";
    }
    else{
      new_string +=cart[0]["itemName"] + " at $" + cart[0]["itemPrice"]+".";
    }
    return new_string;
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    sum += cart[i]["itemPrice"]
  }
  return sum;
};

function removeFromCart(item) {

  // write your code here
  var check = false;
  for (var i = 0; i < cart.length; i++){
    if (cart[i]["itemName"]==item){
      check = true;
      cart.splice(i, 1);
    }
  }
  if (check === false){
    return "That item is not in your cart.";
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var result = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return result;
  }
}
