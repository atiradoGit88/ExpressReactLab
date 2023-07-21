import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  // let index = useParams().index
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => navigate(`/not-found`));
  }, [index, navigate, API]);
  const deleteTransaction = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((c) => console.warn("catch", c));
  };
  const handleDelete = () => {
    deleteTransaction();
  };
  return (
    <>
      <article className="container transaction-details">
        <h3>
          {transaction.date} - By{" "}
          {transaction.name}
        </h3>
        <h5>{transaction.form}</h5>
        <h6>
          <span>From : </span>
          {transaction.from}
        </h6>
        <p>{transaction.amount}</p>
      </article>
      <div className="showNavigation">
        <div>
          <Link to={`/transactions`}>
            {" "}
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/transactions/${index}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TransactionDetails;