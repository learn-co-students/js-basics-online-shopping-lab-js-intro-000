var cart = [{ cat : 1}, {dog: 2}, {fish: 3}, {otter: 5}];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100+1);
   cart.push({itemName: item, itemPrice : price} );
   return `${item} has been added to your cart.`

}

function viewCart() {
  if (cart === 0) {
    console.log("Your shopping cart is empty.")
  }
  var newarray = [];
   for (var i = 0; i < cart.length; i++) {
     var keys = Object.keys(cart[i])[0]
     newarray.push(keys + "at $" + cart[i][keys])


   }
     var mystring = "In your cart, you have "
      if (newarray.length === 1) {
        mystring += newarray + "."
      } else if (newarray.length === 2) {
        mystring += (newarray[0] + " and " + newarray[1] + ".")
      } else if (newarray.length > 2) {
        var lastelement = newarray.pop()
        var other_item = newarray.join(", ")
        mystring += (other_item + ", and " + lastelement + ".")
      }
        console.log(mystring)
  }






function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
