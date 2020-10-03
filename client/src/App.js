import React, { Fragment } from "react";
import "./App.css";
import PaymentSend from "./components/Paymentsend";
import MoneyAdjuster from "./components/Moneyadjuster";
function App() {
  return (
    <Fragment>
      <PaymentSend />
      <MoneyAdjuster />
    </Fragment>
  );
}

export default App;
