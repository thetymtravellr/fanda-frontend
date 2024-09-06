import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trending = () => {
  const { products } = useSelector((state) => state.allProducts);
  // const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const data = await axios.get('https://quiet-refuge-20911.herokuapp.com/products');
  //   dispatch(setProducts(data?.data))
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <section className="my-8 ">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="text-center relative">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1658139021064-9e32d25b4cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <Link to="/store" className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <h2 className="text-3xl font-normal mb-4 text-white">Trending</h2>
            </Link>
          </div>
          <div className="text-center">
            <img
              className=""
              src="https://images.unsplash.com/photo-1658139021064-9e32d25b4cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <h2 className="text-3xl font-normal mb-4">New Arrivals</h2>
          </div>
          <div className="text-center">
            <img
              className=""
              src="https://images.unsplash.com/photo-1658139021064-9e32d25b4cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <h2 className="text-3xl font-normal mb-4">Popular</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
