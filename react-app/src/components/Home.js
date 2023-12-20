import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Home(prop) {

    const [question, setQuestion] = useState('What would you like to have?');

    const sendMessage = () =>{
        setQuestion('Are you leaving?');
    }

    const [name, setName] = useState(" ");
    const submitHandler = (event)=>{
        event.preventDefault();
        alert('Form submitted')
    }
  return (
    <div>
      <h1>Hello {prop.name}!</h1>
      <h5>{question}</h5>
      <Button variant='dark' onClick={sendMessage}>Click me!</Button>

      <form onSubmit={submitHandler}>
        <label htmlFor="name" style={{margin:'15px 0 5px 0'}}>Enter your name</label>
        <br />
        <input type="text" placeholder='John Doe' value={name} onChange={(e)=>{setName(e.target.value)}} style={{marginBottom:'20px'}}/>
        <br />
        <input type="submit" value="Submit" variant="primary" />
      </form>
    </div>
  )
}
