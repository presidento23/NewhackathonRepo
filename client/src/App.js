import React, { Fragment, useState } from "react";
import "./App.css";
import PaymentSend from "./components/Paymentsend";
import MoneyAdjuster from "./components/Moneyadjuster";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
function App() {
  const [email, setEmail] = useState("");
  const [found, setFound] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <HashRouter>
      <Fragment>
        <h1 className="text-center mt-5">Mailpay</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <PaymentSend
                {...props}
                email={email}
                setEmail={setEmail}
                found={found}
                setFound={setFound}
              />
            )}
          />
          {found ? (
            <Route
              path="/Pay"
              render={(props) => (
                <MoneyAdjuster
                  {...props}
                  email={email}
                  setEmail={setEmail}
                  amount={amount}
                  setAmount={setAmount}
                />
              )}
            />
          ) : (
            <Redirect to={PaymentSend} />
          )}
        </Switch>
      </Fragment>
    </HashRouter>
  );
}

export default App;
