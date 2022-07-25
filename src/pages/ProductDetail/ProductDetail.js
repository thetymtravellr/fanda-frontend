import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  HiArrowNarrowLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart
} from "react-icons/hi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { addToDb } from "../../utilities/db";
import { addToWishlist } from "../../utilities/wishtlist";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await axios.get(`https://quiet-refuge-20911.herokuapp.com/product/${id}`);
      setProduct(data?.data);
    };
    fetchProduct();
  }, [id]);

  const { images, name, price, variantSizes, rgbColors, brandName } = product;
  const image = images?.length > 0 && images[0]?.url;

  const cartObj = () => {
    if(user){
      if (activeSize !== null && activeColor !== null) {
        const data = {
          name,
          activeSize: variantSizes[activeSize],
          activeColor: rgbColors[activeColor],
          id,
        };
        addToDb(data);
      } else {
        setMessage("Please Add Size & Color");
        setError(true);
      }
    } else {
      navigate("/login")
    }
  };

  return (
    <div className="max-w-6xl min-h-[50vh] mx-auto flex flex-col md:flex-row justify-center items-center my-8 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 md:left-0 top-0 text-3xl hover:bg-gray-100 p-2 rounded-full"
      >
        <HiArrowNarrowLeft />
      </button>
      <div className="md:w-1/2">
        <img className="md:w-1/2 mx-auto" src={image} alt="" />
      </div>
      <div className="md:pl-8 mt-8 md:mt-0 md:w-1/2">
        <h1 className="text-lg bg-blue-500 w-fit text-white px-2">
          {brandName}
        </h1>
        <h1 className="text-3xl">{name}</h1>
        <div className="mt-6">
          <p className="text-sm font-bold">Price</p>
          <p className="text-xl font-medium">US {price}</p>
        </div>
        <div className="mt-6">
          <p className="text-lg font-bold">Size</p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {variantSizes?.map((size, index) => (
              <button
                className={` border-2 font-roboto-condensed py-2 px-6 rounded uppercase duration-300 active:scale-95  hover:shadow ${
                  activeSize === index ? " border-blue-500" : "border-gray-300"
                }`}
                onClick={() => {
                  setActiveSize(index);
                  setError(false);
                  setMessage("");
                }}
              >
                {size.filterCode}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 md:text-left text-center">
          <p className="text-lg font-bold">Size</p>
          <div className="flex justify-center md:justify-start space-x-3">
            {rgbColors?.map((color, index) => (
              <button
                style={{
                  backgroundColor: color,
                }}
                className={`border-2 h-6 w-6 rounded-full uppercase duration-300 active:scale-95 hover:shadow  ${
                  activeColor === index ? " border-blue-500" : "border-gray-300"
                }`}
                onClick={() => {
                  setActiveColor(index);
                  setError(false);
                  setMessage("");
                }}
              ></button>
            ))}
          </div>
        </div>
        {error && <p className="text-center md:text-left">{message}</p>}
        <div className="flex justify-center md:justify-start space-x-3 mt-8">
          <button
            onClick={cartObj}
            className="btn-custom bg-blue-500 border-blue-500 tooltip tooltip-primary text-white"
            data-tip="Add to cart"
          >
            <HiOutlineShoppingCart className="text-xl" />
          </button>
          <button
            onClick={() => addToWishlist(id)}
            className="btn-custom bg-blue-500 border-blue-500 tooltip tooltip-primary text-white"
            data-tip="add to wishlist"
          >
            <HiOutlineHeart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
