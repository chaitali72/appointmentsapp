import React,{useState} from 'react'
import Child from './Child';
export default function Prent() {

 let [counter,setCounter] = useState(0);
const handleClick =() => {
    setCounter(counter++)
}
  return (
    <div>Parent
        <h2>Number of Counts: {counter}</h2>
    <button onClick={handleClick} type="submit">click</button>
    <Child counterValue={counter}/>
    </div>

  )
}
