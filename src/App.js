import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import Container from "../src/components/primitives/Container";
import Header from '../src/components/Header';

import Home from "../src/pages/Home";
import Footer from '../src/components/Footer';
import Characters from "../src/pages/Characters";
import Seasons from "../src/pages/Seasons";
import Episodes from "../src/pages/Episodes"

function App() {
  return (
    <>
    <Router>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/characters'> 
            <Characters />
          </Route>
          <Route exact path='/seasons'>    
            <Seasons />
          </Route>
          <Route exact path='/episodes'>
            <Episodes />
          </Route>
        </Switch>
        <Footer />
       </Router>
    </>
  );
}

export default App;
