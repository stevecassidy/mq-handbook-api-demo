import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import './App.css';
import CourseList from './components/CourseList'
import Course from './components/Course'


function App() {

  return (
    <div className="App">
     <Router>
       <div>
         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/courses">Courses</Link></li>
           </ul>
         </nav>


        <Switch>
          <Route path="/courses/:id"><Course /></Route>
          <Route path="/courses"><CourseList /></Route>
          <Route path="/"><p>This is the home page!</p></Route>
        </Switch>

        </div>
     </Router>
    </div>
  );
}

export default App;
