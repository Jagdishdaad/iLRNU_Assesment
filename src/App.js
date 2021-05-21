import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./AppStyles";
import Homepage from "./Homepage";
import UserPage from "./UserPage/UserPage";

function App() {
  const classes = styles();
  return (
    <div className={classes.homepage}>
      <Router>
        <Switch>
          <Route path="/UserPage">
            <UserPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
