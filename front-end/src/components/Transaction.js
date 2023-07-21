import React from "react";
import { Link } from "react-router-dom";


function Transaction ({ transaction , index }) {
  return (
    <tr className="Transaction">
      <td>
        {transaction.amount ? (
          <span> 💸 </span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.name}</Link>
      </td>
    </tr>
  );
}
export default Transaction;