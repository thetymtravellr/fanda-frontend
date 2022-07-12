import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

const ItemsByCategory = () => {
  const { title } = useParams();
  const [products, setProducts] = useState([]);

  const fetchByCategory = async () => {
    const res = await axios.get(`http://localhost:8080/category/${title}`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchByCategory();
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl my-8">Category: {title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        {products.length > 0 &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ItemsByCategory;
