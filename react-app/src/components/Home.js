import React, { useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Home(prop) {

    const [question, setQuestion] = useState('What would you like to have?');

    
    const sendMessage = () =>{
      setQuestion('Are you leaving?');
    }
    
    const [message, setMessage] = useState(" ");
    const submitHandler = (event)=>{
      event.preventDefault();
      alert(message);
      
    }


    // Learning useMemo() basics
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // const squaredNum = squareNum(number)  -- Value squareNum is assigned to squaredNum and it was getting reassigned everytime the code re-renders. Hence, useMemo() is used  
    const squaredNum = useMemo(() => {
      return squareNum(number);   //until the number is not changed it is not going to call squareNum() and will be assigning value based on the previously entered value(cached value).
    }, [number]);        //We have to declare array of dependencies (in this e.g. [number] is the dependency). It means the squareNum() function will be called whenever the array of dependency changes.

    const onChangeHandler = (e) =>{
      setNumber(e.target.value)
    }
    const counterHandler = ()=>{
      setCounter(counter + 1);
    }


  return (
    <div>
      <h1>Hello {prop.name}!</h1>
      <h5>{question}</h5>
      <Button variant='dark' onClick={sendMessage}>Click me!</Button>

    {/* Code to print value inserted by the user in input field */}
      <form onSubmit={submitHandler} style={{marginTop:'10px'}}>
        <label style={{margin:'0 5px 0 0'}}>Message: </label>
        <input type="text" placeholder='John Doe' value={message} onChange={(e)=>{setMessage(e.target.value)}} style={{marginRight:'10px'}}/>
        <h1>Message: {message}</h1>
        <input type="submit" value="Submit" variant="dark" />
      </form>

      {/* UseMemo() hook basics */}
      <form>
        <label >Enter the number</label> <br />
        <input type="number" value={number} onChange={onChangeHandler} /><br />
        <h3>Squared output: {squaredNum} </h3>
        <Button variant='dark' onClick={counterHandler}>Calculate increment counter</Button>
        <h3>Counter: {counter} </h3>
      </form>
      
      
    </div>
  );
}
function squareNum(number){
  console.log("square num will run!")
  return Math.pow(number, 2);
}
