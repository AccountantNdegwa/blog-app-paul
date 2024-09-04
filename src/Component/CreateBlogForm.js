import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateBlogForm() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author"
        />
      </Form.Group>
      <Form.Group controlId="formTitle" className="mt-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
      </Form.Group>
      <Form.Group controlId="formBody" className="mt-3">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          name="body"
          value={formData.body}
          onChange={handleChange}
          rows={3}
          placeholder="Enter body"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Save Blog
      </Button>
    </Form>
  );
}

export default CreateBlogForm;
