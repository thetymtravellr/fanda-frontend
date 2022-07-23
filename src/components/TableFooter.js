import React, { useContext } from "react";
import { CartContext } from "../pages/Cart/Cart";

const TableFooter = () => {
  const {allPrice, setTotal, total} = useContext(CartContext);
  let sum = 0
  for(const value in allPrice){
    sum += allPrice[value];
  }
  setTotal(sum)

  return (
    <>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>Total: {sum.toFixed(2)}</th>
        </tr>
      </tfoot>
    </>
  );
};

export default TableFooter;
