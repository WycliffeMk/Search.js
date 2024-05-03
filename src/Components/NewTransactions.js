import React from "react";

function NewTransactions() {
  return (
    <div className="new">
      <form className="form">
        <div className="fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default NewTransactions;