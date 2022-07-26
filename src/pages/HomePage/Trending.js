import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { setProducts } from "../../store/actions/productsActions";

const Trending = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const data = await axios.get('https://quiet-refuge-20911.herokuapp.com/products');
      dispatch(setProducts(data?.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-2/5 text-center">
        <h1 className="text-5xl font-normal mb-4">#trending</h1>
        <img
          className="w-2/3 mx-auto hidden md:block"
          src="https://images.unsplash.com/photo-1658139021064-9e32d25b4cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="w-3/5 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-8">
          {products?.length > 0 &&
            products?.slice(0,6).map((product) => (
              <Card key={product.code} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
