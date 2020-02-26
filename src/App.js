import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import { Layout } from 'antd';

const App = (props) => {
  return (
    <Router>
      <div>
      <Layout>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account/login" component={LoginForm} />
          <PrivateRoute path="/about" component={About} />
        </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
