import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap/';

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const ContactsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //tikrinti laukus
    if (name.length < 3) {
      alert('Name can not be blank!')
      return
    }
    if (email === '') {
      alert('Email can not be blank!')
      return
    }
    if (message.length < 3) {
      alert('Message area can not be blank!')
      return
    }
    //siusti i firestore data
    try {
      const docRef = await addDoc(collection(db, 'clientsRequests'), {
        name: name,
        email: email,
        client_message: message,
        created: new Date(),
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Email address</FormLabel>
          <FormControl
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Message</FormLabel>
          <FormControl
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactsForm
