import React from 'react';
import Appartements from './Containers/Appartements/Appartements'
//React router nécessaire pour utilisation params url
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Appartements } />
    </Router>
  )
}

export default App;