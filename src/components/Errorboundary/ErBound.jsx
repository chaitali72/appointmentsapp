import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function ErBound() {
  
const TextRef = React.createRef();
const textInputRef = React.useRef(null);

const TextHandler = () => {
TextRef.current.focus()


   
}

const textInputHandler = () => {
    textInputRef.current.focus()
}
    return (
    <div>
        <h1>using createRef</h1>
        <input type="text" placeholder="Enter Name" ref={TextRef}/>
        <button type="submit" onClick={TextHandler} color="red">Click me to focus input</button>
        <h3>using UesRef method</h3>
        <input type="text" placeholder='enter something' ref={textInputRef}></input>
        <button type="submit" onClick={textInputHandler}>Click USeref to get focus</button>
    </div>
  )
}
