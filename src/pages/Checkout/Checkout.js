import React from "react";

const Checkout = () => {
  const getCart = localStorage.getItem("shopping-cart");
  const cart = JSON.parse(getCart);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <form>
            <div>
                <label htmlFor="">Name on Card</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Card Number</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">Name on Card</label>
                <input type="text" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
