import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { setProducts } from "../../store/actions/productsActions";

const NewArrival = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const data = await axios.get("https://quiet-refuge-20911.herokuapp.com/products");
    dispatch(setProducts(data?.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const newArrival = [...products].reverse()

  return (
    <section className="my-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-3/5 px-6 order-2 md:order-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-8">
          {newArrival?.length > 0 &&
            newArrival
              ?.slice(0,6)
              .map((product) => <Card key={product.code} product={product} />)}
        </div>
      </div>
      <div className="md:w-2/5 text-center order-1 md:order-2">
        <h1 className="text-5xl font-normal mb-12 md:mb-4">#new_arrival</h1>
        <img
          className="w-2/3 mx-auto hidden md:block"
          src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </section>
  );
};

export default NewArrival;
