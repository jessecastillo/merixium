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
      <label for="firstName" className='label1'>First Name</label>
      <input className='firstName' 
      id="firstName"
      type="firstName"
      name="firstName"
      placeholder='First name...'
      />
      <label for="lastName" className='label2'>Last Name</label>
      <input className='lastName'
      id="lastName"
      type="lastName"
      name="lastName"
      placeholder='Last name...'
      />
      <label for="emailField" className='label3'>Email Address</label>
      <input className='emailField'
        id="email"
        type="email" 
        name="email"
        placeholder='Email...'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label for="fields" className='label4'>Your Message</label>
      <textarea className='fields'
        id="message"
        name="message"
        placeholder='Type your message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button className='btn' type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
  
}

export default ContactForm;