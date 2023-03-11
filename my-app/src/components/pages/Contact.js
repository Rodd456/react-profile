import React from 'react';

const contactCss = `
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.contact-form label {
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #3f51b5;
  box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
}

.contact-form input:invalid,
.contact-form textarea:invalid {
  outline: none;
  border-color: red;
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.2);
}

.contact-form button[type="submit"] {
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  background-color: #303f9f;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
}

.footer a {
  text-decoration: none;
  font-size: 18px;
  color: #333;
}

.footer a:hover {
  color: #3f51b5;
}`;

export default function Contact() {
  return (
    <div>
      <style type='text/css'>{contactCss}</style>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <footer className="footer">
        <a href="https://github.com/Rodd456">GitHub</a>
      </footer>
    </div>
  )
}
