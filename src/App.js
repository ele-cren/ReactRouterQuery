import React from 'react';
import Appartements from './Containers/Appartements/Appartements'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UserProvider } from './Contexts/UserContext'

function App() {
  return (
    <UserProvider value={ { name: "Erw" } }>
      <Router>
        <Route exact path="/" component={ Appartements } />
        <Route path="/appartement/:id" />
      </Router>
    </UserProvider>
  )
}

export default App;