var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart( item ) {
  var itemDetails = getItemDetails( item )
  getCart().push( itemDetails );

  return `${ itemDetails.itemName } has been added to your cart.`
}

function getItemDetails( itemInfo ) {
  return {
    itemName: itemInfo,
    itemPrice: Math.floor( Math.random() * 100 ) + 1
  }
}

function viewCart() {
  return getCart().length < 1 ? "Your shopping cart is empty." : listCartItems();
}

function listCartItems() {
  var cartMessage = 'In your cart, you have '

  if ( getCart().length >=  1 ) {
    cartMessage += `${ getCart()[ 0 ].itemName } at $${ getCart()[ 0 ].itemPrice }`
  }
  if ( getCart().length >= 2 ) {
    var middleCartMessage = '';

    for ( var i = 1; i < getCart().length - 1; i++ ) {
      middleCartMessage += `, ${ getCart()[ i ].itemName } at $${ getCart()[ i ].itemPrice }`
    }
    cartMessage += `${ middleCartMessage}, and ${ getCart()[ i ].itemName } `
    cartMessage += `at $${ getCart()[ i ].itemPrice }`
  }

  return `${ cartMessage }.`;
}

function total() {
  var totalCost = 0;

  for (var i = 0; i < getCart().length; i++) {
    totalCost += getCart()[ i ].itemPrice;
  }

  return totalCost;
}

function removeFromCart( item ) {
  var itemToRemove;

  if ( item ) {
    for ( var i = 0; i < getCart().length; i++ ) {
      if ( getCart()[ i ].itemName === item ) {
        itemToRemove = getCart()[ i ];
        var index = getCart().indexOf( itemToRemove );
        cart.splice( index, 1 )
      }
      else {
        return "That item is not in your cart."
      }
    }
    return cart;
  }
}

// function removeFromCart(item) {
  // var itemToRemove = findItem( item );
  // return itemToRemove ? removeItem( itemToRemove ) : "That item is not in your cart."
// }

// function findItem(item) {
//   var itemToRemove;
//
//   if ( item ) {
//     for ( var i = 0; i < getCart().length; i++ ) {
//       if ( getCart()[ i ].itemName === item ) {
//         itemToRemove = getCart()[ i ];
//       }
//     }
//   }
//
//   return itemToRemove;
// }
//
// function removeItem(itemToRemove) {
//   var index = getCart().indexOf(itemToRemove);
//   getCart().splice(index, 1)
// }

function placeOrder(cardNumber) {
  // write your code here
}
