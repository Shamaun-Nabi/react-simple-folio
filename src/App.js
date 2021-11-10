import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "remixicon/fonts/remixicon.css";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    // Remove this area and start your code
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>

    // Remove this area and start your code
  );
}

export default App;
