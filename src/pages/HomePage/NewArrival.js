import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const NewArrival = () => {
  return (
    <section className="my-8">
      <h1 className="text-3xl mb-4">New Arrival</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full text-center mt-10">
        <button className="btn-primary border-blue-400  text-blue-400 hover:bg-blue-500  hover:border-blue-500">
          <Link className="" to="/">
            See More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrival;
