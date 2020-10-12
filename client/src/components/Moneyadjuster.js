import React, { Fragment, useEffect } from "react";

const Moneyadjuster = ({ email, setEmail, amount, setAmount }) => {
  useEffect(() => {
    if (amount < 0) {
      setAmount(0);
    }
  });
  return (
    <Fragment>
      <h4>Sending money to {email}</h4>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Add</th>
            <th>Subtract</th>
            <th>Confirm</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          <tr>
            <td>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  className="form-control input-number"
                  aria-label="Amount (to the nearest dollar)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  max="10000000000"
                  min="0"
                />
              </div>
            </td>
            <td>
              <button
                type="button"
                className="quantity-right-plus btn btn-success btn-number"
                data-type="plus"
                data-field=""
                onClick={() => setAmount(parseInt(amount) + 1)}
              >
                <i class="fas fa-plus"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                className="quantity-left-minus btn btn-danger btn-number"
                data-type="minus"
                data-field=""
                onClick={() => setAmount(parseInt(amount) - 1)}
              >
                <i class="fas fa-minus"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                datafield=""
                onClick={() => console.log("dosomething")}
              >
                Confirm
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Moneyadjuster;
