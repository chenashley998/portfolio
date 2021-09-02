import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      </Switch>
     
    </Router>
    
  
  );
}

const Navbar = () => {
  return ( 
    <nav>
        <ul id="navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
   );
}
 

const Home = () => {
  return ( 
    <h1>
      Homepage
    </h1>
   );
}

const About = () => {
  return ( 
    <h1>
      About Page
    </h1>
   );
}

const Contact = () => {
  return ( 
    <h1>
      Contact Page
    </h1>
   );
}

export default App;
