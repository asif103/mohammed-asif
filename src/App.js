import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import BgParticle from './Components/inc/BgParticle';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <Router>
      <BgParticle></BgParticle>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route exact path="/blog">
          <Blogs></Blogs>
        </Route>
        <Route path="*">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
