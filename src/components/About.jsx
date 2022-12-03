import React from 'react'
import { useState } from 'react'
import ErBound from './Errorboundary/ErBound';

export default function About(props) {
const[count,setCounter] = useState(0);

    let [inputValue, setInputValue] = useState("");
    let inputData = React.createRef();

const handleSubmit = e => {
alert(`data : ${inputData.current.value}`);


}

    let updateInput = e => {
    setInputValue(e.target.value);
    };
    
   const addCount = () => {
    setCounter(++count)
    console.log(count)
   }
   const prevCount = () => {
    setCounter(--count)
    console.log(count);
   }

  return (

    <div>
        <ErBound/>
        <h2>functional components demo</h2>
        <p>Numbers of count clicks: {count}</p>
<button onClick={addCount}>Add Count: </button>
<div></div>
<br/>
<button onClick={prevCount} > Previous Count: </button>
<div>
    <h1>controled compoennts</h1>
    <form>
    <input type="text" value={inputValue} onChange={updateInput} />
  
    </form>

</div>
<div>
    <h2>Uncrolled components using Ref: </h2>
<form onSubmit={handleSubmit}>
    <input type="text" ref={inputData}></input>
    <button type="submit" >Submit Data</button>
</form>
</div>
    </div>

  )
}

