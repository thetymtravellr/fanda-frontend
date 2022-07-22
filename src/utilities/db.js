// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = [];
  let added;

  const storedList = localStorage.getItem("shopping-cart");
  if (storedList) {
    shoppingCart = JSON.parse(storedList);
  }
  added = shoppingCart.find((item) => item === id);
  // add quantity
  if (added) {
    return;
  } else {
    shoppingCart.push(id);
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };

