import React, { useState } from 'react';
import CreateBlogForm from './CreateBlogForm';
import HomePage from './HomePage';

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div>
      <CreateBlogForm addBlog={addBlog} />
      <HomePage blogs={blogs} />
    </div>
  );
}

export default App;
