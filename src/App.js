import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Component/Navbar';
import CreateBlogForm from './Component/CreateBlogForm';
import Home from './Component/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Container className="mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateBlogForm} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
