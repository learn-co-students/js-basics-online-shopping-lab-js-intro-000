var cartTest = ["vanilla", "watermelon", "yams" ]


function removeFromCart(itemName) {
  const selection = itemName
  const i = cart.findIndex(indexName => indexName === `${ selection}`);
  cart.splice(i,0)
  console.log(i)
}