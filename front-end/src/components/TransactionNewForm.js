import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import React from "react";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm(props) {
  let navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const addTransaction = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };

  return (
    <div className="Date">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="Date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
        />


        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          onChange={handleTextChange}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          step="1"
          name="amount"
          value={transaction.amount}
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="Where did the charge come from?"
        />
       
        <br />
        <input type="submit" />
      </form>
      <Link to="/transactions">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TransactionNewForm;