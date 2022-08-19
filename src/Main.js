import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import Invoices from "./Invoice/Invoice";

export default function Main() {
  const [readAmmount, setReadAmmount] = useState(0);

  // useEffect(() => {
  //   console.log(readAmmount);
  // }, [readAmmount]);

  const handleReadAmmount = (amount) => {
    setReadAmmount((readAmmount) => readAmmount, amount);
  };

  return (
    <Router basename="/">
      <div>
        <nav>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Switch>
          <Route path="/invoices">
            <Invoices readAmmount={readAmmount} />
          </Route>
          <Route path="/">
            <App handleReadAmmount={handleReadAmmount} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
