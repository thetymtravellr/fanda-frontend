import React, { useContext } from "react";
import { CartContext } from "../pages/Cart/Cart";

const TableFooter = () => {
  const {priceObject, setTotal, total} = useContext(CartContext);
  let sum = 0
  for(const value in priceObject){
    sum += priceObject[value];
  }
  setTotal(sum)
  return (
    <>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>Total: {total.toFixed(2)}</th>
        </tr>
      </tfoot>
    </>
  );
};

export default TableFooter;
