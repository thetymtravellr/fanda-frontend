// use local storage to manage cart data
const addToDb = (data) => {
  const shoppingCart = [];

  const storedList = localStorage.getItem("shopping-cart");
  if (storedList) {
    const list = JSON.parse(storedList);
    shoppingCart.push(...list);
  }
  let added = shoppingCart?.find((item) => item.id === data.id);
  if (added) {
    return;
  } else {
    shoppingCart.push(data);
  }
  
  console.log(shoppingCart);
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

