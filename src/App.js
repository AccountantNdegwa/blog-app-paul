import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Component/Navbar';
import CreateBlogForm from './Component/CreateBlogForm';
import Home from './Component/Home';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    console.log('addBlog function called with:', newBlog); // Log when addBlog is called
    setBlogs([...blogs, newBlog]);
  };

  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Container className="mt-4">
          <Switch>
            <Route exact path="/">
              <Home blogs={blogs} />
            </Route>
            <Route path="/create">
              <CreateBlogForm addBlog={addBlog} />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
