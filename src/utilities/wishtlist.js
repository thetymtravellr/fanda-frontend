// use local storage to manage wishlist data
const addToWishlist = (id) => {
  let wishlist = [];
  let added;

  //get the shopping wishlist from local storage
  const storedList = localStorage.getItem("shopping-wishlist");
  if (storedList) {
    wishlist = JSON.parse(storedList);
  }
  added = wishlist.find((item) => item === id);
  // add quantity
  if (added) {
    return;
  } else {
    wishlist.push(id)
  }
  localStorage.setItem("shopping-wishlist", JSON.stringify(wishlist));
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

export { addToWishlist, getStoredCart, removeFromDb, deleteShoppingCart };

