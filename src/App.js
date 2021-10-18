import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Menubar from './pages/Menubar/Menubar';


function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/service">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
