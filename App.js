import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Fantasy from './components/Books/Fantasy';
import Genres from './components/Genres';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/fantasy" component={Fantasy} />
        <Route path="/science" component={Science} />
        <Route path="/finance" component={Finance} />
        <Route path="/genres" component={Genres} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
