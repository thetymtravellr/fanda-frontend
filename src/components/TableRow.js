import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const TableRow = ({ item, index }) => {
    
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQ) => prevQ + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQ) => prevQ - 1);
    } else {
      return;
    }
  };

  const price = (quantity * Number(item.price)).toFixed(2);

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
          <button onClick={decreaseQuantity} className="text-xl font-bold">
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
          <button onClick={increaseQuantity} className="text-xl font-bold">
            <HiPlus />
          </button>
        </div>
      </td>
      <td className="w-40 text-center">{price}</td>
    </tr>
  );
};

export default TableRow;
