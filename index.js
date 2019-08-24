var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 function addToCart(item) {
 var entry = {};
 var num = (Math.random() * 99) + 1;
 var price = Math.ceil(num)
 var lit1;
 Object.assign(entry, {["itemName"]: item, ["itemPrice"]: price});
 cart.push(entry);
 lit1 = item + " has been added to your cart.";
 return lit1
}

function viewCart() {
var lit2;
var occ = 0;
var common = cart.length - 2
  if (cart.length === 0) {
    lit2 = "Your shopping cart is empty." }
  else  if (cart.length === 1) {
    lit2 = "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice +"." }
  else { lit2 = "In your cart, you have "
    while (occ <= common) {
        lit2 = lit2 + cart[occ].itemName + " at $" + cart[occ].itemPrice + ", ";
        occ = occ + 1}
    lit2 = lit2 + "and " + cart[occ].itemName + " at $" + cart[occ].itemPrice + "."}
  return lit2
}

function total() {
var tot = 0
  for (let occ = 0; occ < cart.length; occ++) {
     tot = tot + cart[occ].itemPrice}
  return tot
}

function removeFromCart(item) {
  var lit3;
  var occ = 0;
  while (occ <= (cart.length - 1) && item != cart[occ].itemName) {
     occ = occ + 1}
  if (occ === cart.length) {
     lit3 = "That item is not in your cart.";
     return lit3}
  else { cart = [...cart.slice(0,occ), ...cart.slice(occ+1)];
    return cart}
}

function placeOrder(cardNumber) {
var lit4;
var check = cardNumber;
console.log(check);
  if (check === undefined) {
    lit4 = "Sorry, we don't have a credit card on file for you."
  } else {
    var tot = total();
    var lit4 = "Your total cost is $" + tot + ", which will be charged to the card " + cardNumber + ".";
    cart = []
  }
  return lit4
}
