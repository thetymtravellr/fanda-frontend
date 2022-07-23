import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { categoryProduct } from "../../store/actions/productsActions";

const ItemsByCategory = () => {
  const { title } = useParams();
  const products = useSelector((state) => state.productsByCategory.productsByCategory);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get(`https://quiet-refuge-20911.herokuapp.com/category/${title}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(categoryProduct(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto text-center">
      {products.length > 0 ? (
        <>
          <h1 className="text-4xl my-8 ">Category: {title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-4xl font-bold my-12"> Nothing Found </p>
      )}
    </div>
  );
};

export default ItemsByCategory;
