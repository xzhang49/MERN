import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>  
          <Route path="/dashboard">
            <Dashboard />
          </Route>
      </Router>
    </div>
  )
}

export default App;
