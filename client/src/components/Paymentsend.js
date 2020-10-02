import React, { Fragment, useState } from "react";

const PaymentSend = () => {
  const [email, setEmail] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email };
      const response = await fetch("http://localhost:5000/check", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Mailpay</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-success"> Send</button>
      </form>
    </Fragment>
  );
};

export default PaymentSend;
