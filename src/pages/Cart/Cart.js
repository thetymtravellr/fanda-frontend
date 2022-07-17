import React from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const Cart = () => {
  return (
    <div className="min-h-[50vh] max-w-6xl mx-auto my-8">
      <div className="w-full">
        <div className="w-full flex justify-between border-b pb-4">
          <h1 className="text-3xl">Shopping Cart</h1>
          <h1 className="text-3xl">3 Item</h1>
        </div>
        <div className="mt-4">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead className="">
                <tr>
                  <th>Product Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex space-x-2 items-center">
                      <button className="text-xl font-bold">
                        <HiMinus />
                      </button>
                      <div className="w-16 h-10 border-2 rounded">
                        <input
                          className="w-full h-full text-center outline-none font-medium"
                          type="number"
                          name=""
                          id=""
                        />
                      </div>
                      <button className="text-xl font-bold">
                        <HiPlus />
                      </button>
                    </div>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
