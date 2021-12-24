import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import StudentsDetail from './Components/StudentsDetail/StudentsDetail';


function App() {

  return (
    <Router>
      <Switch>

      <Route path exact="/">
          <Home/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path ="/about/:id">
          <StudentsDetail/>
        </Route>

        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
      
    </Router>
    
  );
}


export default App;
