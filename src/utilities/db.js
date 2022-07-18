const handleAddToCart = (id, checkCart) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  shoppingCart[id] = 1;
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  checkCart()
};

export { handleAddToCart };

