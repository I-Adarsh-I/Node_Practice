import React, { useEffect, useMemo, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Home(prop) {

    const [question, setQuestion] = useState('What would you like to have?');

    
    const sendMessage = () =>{
      setQuestion('Are you leaving?');
    }
    
    const [message, setMessage] = useState(" ");
    const [printMsg, setPrintMsg] = useState(" ");
    const submitHandler = (event)=>{
      event.preventDefault();
      // console.log(message);      
      setPrintMsg(message);
    }


    // Learning useMemo() basics
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // const squaredNum = squareNum(number)  -- Value squareNum is assigned to squaredNum and it was getting reassigned everytime the code re-renders. Hence, useMemo() is used  
    const squaredNum = useMemo(() => {
      return squareNum(number);   //until the number is not changed it is not going to call squareNum() and will be assigning value based on the previously entered value(cached value).
    }, [number]);        //We have to declare array of dependencies (in this e.g. [number] is the dependency). It means the squareNum() function will be called whenever the array of dependency changes.


    // Learning useEffect() basics

    useEffect(() =>{
      // the code we want to run
      console.log(`The count is ${counter}`)
      // setTimeout(() => {
      //   setCounter((counter) => counter + 1);
      // }, 1000);

      // Cleanup function -- optional return function
      return () =>{
        console.log('I am being cleaned up');
      }
    },[counter]);

  return (

    <div>
      {/* UseState() hook */}
      <h1>Hello {prop.name}!</h1>
      <h5>{question}</h5>
      <Button variant='dark' onClick={sendMessage}>Click me!</Button>

      <div className="divider" style={{width:'100%', border:'1px solid lightgray', margin:'15px 0 15px 0'}}></div>


    {/* Code to print value inserted by the user in input field */}
      <form onSubmit={submitHandler} style={{marginTop:'10px'}}>
        <label style={{margin:'0 5px 0 0'}}>Message: </label>
        <input type="text" placeholder='John Doe' value={message} onChange={(e)=>{setMessage(e.target.value)}} style={{marginRight:'10px'}}/>
        <h1>Message: {printMsg}</h1>
        <Button onClick={submitHandler}>submit</Button>
      </form>
      <div className="divider" style={{width:'100%', border:'1px solid lightgray', margin:'15px 0 15px 0'}}></div>

      {/* UseMemo() hook basics */}
      <form>
        <label>Enter the number</label> <br />
        <input type="number" value={number} name='number' onChange={(e) =>{setNumber(e.target.value)}} /><br />
        <h3>Squared output: {squaredNum} </h3>
        <Button variant='dark' onClick={() =>{setCounter(counter+1)}}>Calculate increment counter</Button>
        <h3>Counter: {counter} </h3>
      </form>
      
      
    </div>
  );
}
function squareNum(number){
  console.log("square num will run!")
  return Math.pow(number, 2);
}
