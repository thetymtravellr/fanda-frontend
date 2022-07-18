import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get(`http://localhost:8080/product/${id}`)
        .catch((err) => {
          console.log(err);
        });
      setProduct(res.data);
    };
    fetchProducts();
  }, [id]);
  const {
    _id,
    thumbnail,
    category,
    description,
    images,
    price,
    rating,
    sold,
    stock,
    title,
  } = product;
  console.log(title);
  return (
    <div className="max-w-6xl min-h-[50vh] mx-auto flex items-center my-8 relative">
      <button onClick={() => navigate(-1)} className="absolute left-0 top-0 text-3xl hover:bg-gray-100 p-2 rounded-full">
        <HiArrowNarrowLeft />
      </button>
      <div>
        <img className="w-1/2" src={thumbnail} alt="" />
      </div>
      <div className="pl-8">
        <h1 className="text-3xl">{title}</h1>
        <small className="bg-blue-400 text-white py-1 px-2 rounded-lg text-xs">
          {category?.length > 1 ? category[0] : category}
        </small>
        <div className="mt-6">
          <p className="text-sm font-bold">Description</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="mt-6">
          <p className="text-sm font-bold">Price</p>
          <p className="text-xl font-medium">US ${price}</p>
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
