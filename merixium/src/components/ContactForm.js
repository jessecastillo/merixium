import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss'
import { Button } from './Button';

function ContactForm() {
  const [state, handleSubmit] = useForm("xaykajlg");
  if (state.succeeded) {
      return <p>Thanks for messaging!</p>;
  }
  return (
      <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email" className='emailEntry'>
        Excited to hear from you!
      </label>
      <label for="firstName">First Name</label>
      <input className='firstName' 
      id="firstName"
      type="firstName"
      name="firstName"
      placeholder='First name...'
      />
      <label for="lastName">Last Name</label>
      <input className='lastName'
      id="lastName"
      type="lastName"
      name="lastName"
      placeholder='Last name...'
      />
      <label for="emailField">Email Address</label>
      <input className='emailField'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    <label for="fields">Message</label>
      <textarea className='fields'
        id="message"
        name="message"
        placeholder='Type your message...'
      />
      <h1>Break</h1>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
  
}

export default ContactForm;