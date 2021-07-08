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
}

function viewCart() {
  // write your code here
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

function addToCart(itemName) {
  cart.push({[itemName]: randomPrice()});
  for (var key in cart[cart.length-1]) {
    logNewItem(key);
  }
  return cart;
}

function randomPrice() {
  return Math.floor(Math.random()*100);
}

function logNewItem(item) {
  console.log(`${item} has been added to your cart.`);
}

function getCart() {
  return cart;
}

function viewCart() {
  console.log(shoppingCartSummary());
}

function shoppingCartSummary() {
  if (cart.length === 0) return `Your shopping cart is empty.`;
  return `In your cart, you have ${cart.map(item => nameAndPrice(item)).join(", ")}.`;
}

function nameAndPrice(item) {
  return Object.keys(item).map(itemName => `${itemName} at $${item[itemName]}`);
}

function removeFromCart(itemName) {
  var filteredCart = cart.filter(item => itemDoesNotContainName(item, itemName));
  if (filteredCart.length === cart.length) console.log(`That item is not in your cart.`);
  setCart(filteredCart);
}

function itemDoesNotContainName(item, itemName) {
  return typeof item[itemName] === "undefined";
}

function placeOrder(creditCardNumber) {
  Order(creditCardNumber).place();
}

function Order(creditCardNumber) {
  function validCCNumber(creditCardNumber) {
    return (typeof creditCardNumber === "number");
  }

  function ValidOrder(creditCardNumber) {
    this.creditCardNumber = creditCardNumber;
  }
  ValidOrder.prototype = {
    constructor: ValidOrder,
    place: function() {
      printOrderSummary(this.creditCardNumber);
      emptyCart();

      function printOrderSummary(creditCardNumber) {
        console.log(getOrderSummary(creditCardNumber));
      }

      function getOrderSummary(creditCardNumber) {
        return `Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`
      }

      function emptyCart() {
        setCart([]);
      }
    }
  }

  function InvalidOrderDueToInvalidCC() {}
  InvalidOrderDueToInvalidCC.prototype = {
    constructor: InvalidOrderDueToInvalidCC,
    place: function() {
      console.log(messageForOrderFailedDueToInvalidCC());

      function messageForOrderFailedDueToInvalidCC() {
        return `We don't have a credit card on file for you to place your order.`;
      }
    },
  }

  return validCCNumber(creditCardNumber) ? new ValidOrder(creditCardNumber) : new InvalidOrderDueToInvalidCC();
}
