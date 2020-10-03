import React, { Fragment, useEffect, useState } from "react";

const PaymentSend = () => {
  const [email, setEmail] = useState("");
  const [found, setFound] = useState(false);

  const fetchData = async () => {
    try {
      const body = { email };
      const response = await fetch("http://localhost:5000/check", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const responseData = await response.json();
      if (responseData === "Email Found") {
        setFound(true);
      } else {
        setFound(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [found]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Mailpay</h1>
      <h6 className="text-center mt-3">Enter an Email to send a payment</h6>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-success"> Send</button>
      </form>
      <p className="text-center mt-2">
        <small>
          {email.length > 0
            ? found
              ? "Email was found"
              : "Email was not found"
            : ""}
        </small>
      </p>
    </Fragment>
  );
};

export default PaymentSend;
