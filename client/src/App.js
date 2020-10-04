import React, { Fragment, useState } from "react";
import "./App.css";
import PaymentSend from "./components/Paymentsend";
import MoneyAdjuster from "./components/Moneyadjuster";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";
function App() {
  const [email, setEmail] = useState("");
  const [found, setFound] = useState(false);

  return (
    <HashRouter>
      <Fragment>
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
            <Route path="/Pay" component={MoneyAdjuster} />
          ) : (
            <Redirect to={PaymentSend} />
          )}
        </Switch>
      </Fragment>
    </HashRouter>
  );
}

export default App;
