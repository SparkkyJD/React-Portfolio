import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'hidden', ...formData }),
    })
      .then(() => {
        // Replace this with your custom success handling
        console.log('Form submitted successfully');
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto h-[75vh]">
      <h2 className="text-5xl font-semibold m-20 flex justify-center">Contact Me</h2>

      <form name="hidden" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
