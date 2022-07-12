import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const NewArrival = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [products])
  
  return (
    <section className="my-8">
      <h1 className="text-3xl mb-4">New Arrival</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {
          products.length > 0 && products.map(product => <Card key={product.id} product={product}/>)
        }
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
