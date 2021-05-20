import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Resume from './Component/Resume/Resume';
import Portfolio from './Component/Portfolio/Portfolio';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <Router className="App">
        <Switch>
          {/* <Route path="/Home">
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
