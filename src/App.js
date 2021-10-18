import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Menubar from './pages/Menubar/Menubar';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetails />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
