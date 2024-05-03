import React from "react";


function TransactionsList() {
  return (
    <table className=" Table">
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionsList;