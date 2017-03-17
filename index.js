/*
var meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti'
}

for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}
*/
var cart = [];
var setCart = function(items){
  cart = items;
}

var total = function(){
  var subTotal = 0;
  for (var i = 0; i <cart.length; i++){
      subTotal = subTotal + cart[i];
  }
  return subTotal;
}

var getCart = function(){
  return cart;
}

var addToCart = function(items){
    var itemPrice = 0;
    itemPrice = Math.floor(Math.random);
    var myObj = '';
    myObj = {items: itemPrice};
    cart.push(myObj);
    console.log(myObj);
    return cart;
}
/*
for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}
*/
var viewCart = function(){
    for (var price in cart){
      console.log('In your cart, you have , ${cart[price]}, ${price}' )
    }
}

var removeFromCart = function(items){
    removeItem(item, cart)

}
