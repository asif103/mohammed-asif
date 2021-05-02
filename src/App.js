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
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
        <Route path="/blog">
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
