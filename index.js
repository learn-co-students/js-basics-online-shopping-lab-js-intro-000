//initialize cart as empty array
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart () {
    return cart;
}

//Generate price for item.
function addToCart (item) {
    //Generate a price between 0 and 100;
    var price = Math.floor((Math.random() * 100)+ 1);

    //Add item and price to cart.
    cart.push({[item]:price});

    //confirm the item has been added
    console.log(item + " has been added to your cart.");

    //display the contents of the cart.
    return cart;
}

function viewCart (){

    //Check to see if any items are in the cart.
    if (cart.length === undefined || cart.length === 0){
        console.log("Your shopping cart is empty.");
    } else {


        //create an array to hold items at prices text for easy display
        const itemsPrices = [];

        //now let's grab all the items from the cart with their prices and put them in the itemsPrices array
        for (let index = 0; index < cart.length; index++) {
          let itemPrice = cart[index];
          let item = Object.keys(itemPrice)[0];
          let price = itemPrice[item];

          itemsPrices.push(`${item} at \$${price}`);
        }
        console.log(`In your cart, you have ${itemsPrices.join(', ')}.`);
      }

}

function removeFromCart(item){
  let inCart = false;

  for(let index = 0; index < cart.length; index++) {
    if(cart[index].hasOwnProperty(item)){
      cart = cart.slice(0, index).concat(cart.slice(index + 1))
      console.log(cart);
      inCart = true;
    }
  }

  if(!inCart) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    //confirm total and cardNumber
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

    //empty the cart
    cart = [];
  }


}
