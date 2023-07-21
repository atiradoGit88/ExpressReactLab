import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";
const API = process.env.REACT_APP_API_URL;


function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;