import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function TransactionEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  console.log(index);
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: " ",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.log(error);
        // navigate(`/not-found`)
      });
  }, [index, navigate, API]);


  const handleSubmit = (event) => {
    event.preventDefault();
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

export default TransactionEditForm;