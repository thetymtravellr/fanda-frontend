import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStoredWishlist } from "../../utilities/wishtlist";

const Wishlist = () => {
  const { products } = useSelector((state) => state.allProducts);
  const wishlist = getStoredWishlist();
  const wishlistItems = products?.filter((item) => wishlist.includes(item._id));

  return (
    <div className="min-h-[50vh] max-w-6xl mx-auto my-8 px-8">
      <div className="w-full">
        <div className="w-full flex justify-between border-b pb-4">
          <h1 className="text-3xl">Wishlist</h1>
          <h1 className="text-3xl">{wishlistItems.length} Item</h1>
        </div>
        <div className="mt-4">
          {wishlistItems?.length > 0 && (
            <>
              <div class="overflow-x-auto">
                <table class="table w-full">
                  <thead className="">
                    <tr className="text-center">
                      <th className="text-left">Product Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems?.map((item, index) => (
                      <tr key={item._id}>
                       <Link to={`/product/${item._id}`}>
                       <td>
                          <div class="flex items-center space-x-3">
                            <div class="avatar">
                              <div class="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.images[0].url}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">{item.name}</div>
                            </div>
                          </div>
                        </td>
                       </Link>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
