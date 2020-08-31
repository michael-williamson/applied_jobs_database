import React from 'react';
import './App.css';

import FormMain from './components/formComponents/FormMain';
import TableMain from './components/tableComponents/TableMain';

function App() {
  return (
    <div className="App">
      <div className="ui header">
        <h1>Job Database</h1>
      </div>
      <FormMain/>
      <TableMain/>
    </div>
  );
}

export default App;
