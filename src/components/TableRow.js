import React, { useContext, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { CartContext } from "../pages/Cart/Cart";

const TableRow = ({ item, index }) => {
  const {priceObject, setPriceObj} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1);
  const price = Number((Number(quantity) * Number(item.price)).toFixed(2));
  priceObject[index] = price;

  const handlePrice = (props) => {
    if (props === 0) {
      setQuantity((prevQ) => prevQ + 1);
    }
    if (props === 1) {
      if (quantity > 1) {
        setQuantity((prevQ) => prevQ - 1);
      } else {
        return;
      }
    }
    setPriceObj(priceObject);
  };

  return (
    <tr>
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
      <td className="">
        <div className="flex space-x-2 items-center justify-center">
          <button onClick={() => handlePrice(1)} className="text-xl font-bold">
            <HiMinus />
          </button>
          <div className="w-16 h-10 border-2 rounded">
            <input
              className="w-full h-full text-center outline-none font-medium"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              name=""
              id=""
            />
          </div>
          <button onClick={() => handlePrice(0)} className="text-xl font-bold">
            <HiPlus />
          </button>
        </div>
      </td>
      <td className="w-40 text-center">{price}</td>
    </tr>
  );
};

export default TableRow;
