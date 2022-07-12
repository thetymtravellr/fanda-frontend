import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { setProducts } from "../../store/actions/productsActions";

const NewArrival = () => {

  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get("http://localhost:8080/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-8">
      <h1 className="text-3xl mb-4">New Arrival</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {products.length > 0 &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
      <div className="w-full text-center mt-10">
        <Link className="" to="/">
          <button className="btn-primary border-blue-400  text-blue-400 hover:bg-blue-500 hover:border-blue-500 bg-transparent">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
