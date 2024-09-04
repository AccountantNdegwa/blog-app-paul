import React from 'react';

function Home({ blogs }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.body}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

export default Home;
