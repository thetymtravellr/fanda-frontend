import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  
  // const [added, setAdded] = useState(false);
  // const checkCart = () => {
  //   const getCart = localStorage.getItem("shopping-cart");

  //   if (getCart) {
  //     const storedCart = JSON.parse(getCart);
  //     const checkProduct = Object.keys(storedCart).find(
  //       (item) => product._id === item
  //     );
  //     if (checkProduct) setAdded(true);
  //   }
  // };
  // useEffect(() => {
  //   checkCart();
  // });

  const { _id, name, price, images } = product;
  const image = images[0]?.url
 
  return (
    
    <div className="h-80 w-56 overflow-hidden group relative">
      <Link to={`/product/${_id}`}>
      <div className="h-64">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt=""
        />
      </div>
      </Link>
      <div className="mt-2 h-full px-4 text-center w-full text-sm">
        <p className="">{name}</p>
        <p className="font-semibold">
          $ {price}
        </p>
      </div>
    </div>
  );
};

export default Card;


/* 
name 
price
images
categories
sellingAttributes
logoPicture 
variantSizes
categoryName
rgbColors
brandName
*/