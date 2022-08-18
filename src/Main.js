import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import Invoices from "./Invoice/Invoice";

export default function Main() {
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
            <Invoices />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
