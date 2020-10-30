import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/'>
            <Home></Home>

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
