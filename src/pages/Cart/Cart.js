import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
import TableFooter from "../../components/TableFooter";
import TableRow from "../../components/TableRow";
import { getStoredCart } from "../../utilities/db";
export const CartContext = createContext({});

const Cart = () => {
  const { products } = useSelector((state) => state.allProducts);
  const cart = getStoredCart();
  const cartItems = products?.filter(({ _id }) =>
    cart?.some((x) => x.id === _id)
  );

  const allPrice = {};
  const [priceObj, setPriceObj] = useState({});
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ allPrice, setPriceObj, setTotal, total }}>
      <div className="min-h-[50vh] max-w-6xl mx-auto my-8">
        <div className="w-full">
          <div className="w-full flex justify-between border-b pb-4">
            <h1 className="text-3xl">Shopping Cart</h1>
            <h1 className="text-3xl">{cartItems?.length} Item</h1>
          </div>
          <div className="mt-4">
            {cartItems?.length > 0 ? (
              <>
                <div class="overflow-x-auto">
                  <table class="table w-full">
                    <thead className="">
                      <tr className="text-center">
                        <th className="text-left">Product Details</th>
                        <th className="">Quantity</th>
                        <th className="">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems?.map((item, index) => (
                        <TableRow key={item._id} item={item} index={index} />
                      ))}
                    </tbody>
                    <TableFooter />
                  </table>
                </div>
                <div className="w-full flex justify-end">
                  <button className="btn-custom bg-blue-500 text-white border-blue-500">
                    Proceed To Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="text-2xl grid place-content-center min-h-[25vh]">
                <h3>Nothing Added To Cart</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default Cart;
