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
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRouter';
import About from './About/About';
import Contact from './Contact/Contact';



function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Menubar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
