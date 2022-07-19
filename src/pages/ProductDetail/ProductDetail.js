import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  HiArrowNarrowLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart
} from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const fetchProducts = async () => {
    const options = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/products/v3/detail',
      params: {id: id, lang: 'en-US', store: 'US', sizeSchema: 'US', currency: 'USD'},
      headers: {
        'X-RapidAPI-Key': '7a76966befmsha088dbee620d8c8p19e884jsn8f37c0f1d90c',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    }

  useEffect(() => {
      fetchProducts();
  }, []);
  console.log(product);
  const { name, description, price, media } = product;
  const thumbnail = media?.images[0]?.url;
  console.log(thumbnail);

  return (
    <div className="max-w-6xl min-h-[50vh] mx-auto flex justify-center items-center my-8 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-0 top-0 text-3xl hover:bg-gray-100 p-2 rounded-full"
      >
        <HiArrowNarrowLeft />
      </button>
      <div className="w-1/2">
        <img className="w-1/2 mx-auto" src={`https://${thumbnail}`} alt="" />
      </div>
      <div className="pl-8 w-1/2">
        <h1 className="text-3xl">{name}</h1>
        <small className="bg-blue-400 text-white py-1 px-2 rounded-lg text-xs">
          {/* {category?.length > 1 ? category[0] : } */}
        </small>
        <div className="mt-6">
          <p className="text-sm font-bold">Description</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="mt-6">
          <p className="text-sm font-bold">Price</p>
          <p className="text-xl font-medium">US ${price?.current?.text}</p>
        </div>
        <div className="flex justify-center space-x-3 mt-6">
          <button
            className="btn-custom tooltip tooltip-primary text-white"
            data-tip="Add to cart"
          >
            <HiOutlineShoppingCart className="text-xl" />
          </button>
          <button
            className="btn-custom tooltip tooltip-primary text-white"
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
