import React from "react";
import { useSelector } from "react-redux";
import TableRow from "../../components/TableRow";
import { getStoredCart } from "../../utilities/db";

const Cart = () => {

  const { products } = useSelector((state) => state.allProducts);
  const cart = getStoredCart();

  const cartItems = products?.filter((item) => cart.includes(item._id));

  return (
    <div className="min-h-[50vh] max-w-6xl mx-auto my-8">
      <div className="w-full">
        <div className="w-full flex justify-between border-b pb-4">
          <h1 className="text-3xl">Shopping Cart</h1>
          <h1 className="text-3xl">3 Item</h1>
        </div>
        <div className="mt-4">
          {cartItems?.length > 0 && (
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead className="">
                  <tr>
                    <th>Product Details</th>
                    <th className="text-center">Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems?.map((item) => (
                   <TableRow key={item._id} item={item}/>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
