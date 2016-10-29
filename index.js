var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]//adds cart[i][item] to t; same as t = t + cart[i][item], which is the price of the item at array location i
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');//this will not work if interpolate item as ${item}
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var itemText = [];
    var itemPrice = [];
    var cartArray = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
//      debugger;
      itemText.push(Object.keys(cart[i])[0]);//an array holding the items
      itemPrice.push([cart[i][item]]);//an array holding the prices
      cartArray.push(` ${itemText[i]} at $${itemPrice[i]}`);//an array holding text strings of each item and price
      }
    }
    var cartArrayString = cartArray.join()//converts the array to text
    console.log(`In your cart, you have${cartArrayString}.`);
    return cart;
  }
  else {
    console.log('Your shopping cart is empty.')
    }
}

function removeFromCart(itemToRemove) {
  var itemToRemoveArray = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (cart[i].hasOwnProperty(itemToRemove)) {
            itemToRemoveArray.push(itemToRemove)//to hold instances of the itemToRemove
            cart.splice(i, 1);//if you use delete cart[i] it will delete the object but replace it with undefined -- this keeps the array index
            //intact but leaves something in the array so that for this test you do not return an empty array as required.
            //array.splice(index, number of items to remove) completely removes the array elements starting at the index.
            return cart;
          }
      }
    }
    if (itemToRemoveArray.length < 1) {
      console.log('That item is not in your cart.');//if the array is empty, itemToRemove was not found in the array
    }
}

function placeOrder(cardNumber) {
  var cardNumberArray = [];
  cardNumberArray.push(cardNumber);
  if (cardNumberArray > 0) {//if there is a number in the array 
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
    }
  if (cardNumberArray = "undefined") {//if a number is not passed to the array it will be undefined
    console.log('We don\'t have a credit card on file for you to place your order.');
    cart = [];
    return cart;
    }
}
