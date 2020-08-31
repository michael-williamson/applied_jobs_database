import React from 'react';
import {Router, Route, Switch,Redirect} from 'react-router-dom';
import history from './history';
import './App.css';

import FormMain from './components/formComponents/FormMain';
import TableMain from './components/tableComponents/TableMain';

function App() {
  return (
    <div className="App">
      <div className="ui header">
        <h1>Job Database</h1>
      </div>
      <Router history={history}>
        <Route path="/form" component={FormMain}/>
        <Route path="/table" component={TableMain}/>
      </Router>
    </div>
  );
}

export default App;
