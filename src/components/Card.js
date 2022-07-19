import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
console.log(product);
  const [added, setAdded] = useState(false);
  const checkCart = () => {
    const getCart = localStorage.getItem("shopping-cart");

    if (getCart) {
      const storedCart = JSON.parse(getCart);
      const checkProduct = Object.keys(storedCart).find(
        (item) => product._id === item
      );
      if (checkProduct) setAdded(true);
    }
  };

  useEffect(() => {
    checkCart();
  });

  const { id,imageUrl } = product
  console.log(imageUrl);

  return (
    
    <div className="h-80 w-56 overflow-hidden group relative">
      <Link to={`/product/${id}`}>
      <div className="h-64">
        <img
          className="h-full w-full object-cover"
          src={`https://${imageUrl}`}
          alt=""
        />
      </div>
      </Link>
      <div className="mt-2 h-full px-4 text-center w-full text-sm">
        {/* <p className="">{product?.name}</p> */}
        <p className="font-semibold">
          {/* ${product?.price?.formattedValue} */}
        </p>
      </div>
    </div>
  );
};

export default Card;
