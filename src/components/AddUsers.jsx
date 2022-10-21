import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddUsers = () => {
  const initialFormData = Object.freeze({
    ownername: "",
    petname: "",
    date: "",
    notes: ""
  });
  const [formData, updateFormData] = React.useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // ... submit to API or something
    
  };
  return (
    <div> 
      <form className='add-form' >
    <div className='info-section'>
      <label htmlFor="name"> Owner Name:</label>
      <input id="ownername" 
      type="text"
     ownername='ownername'
     onChange={handleChange}
     />
    </div>
    <div className='info-section'>
      <label htmlFor="email">Pet Name:</label>
      <input id="petname"
       type="text"
       petname="petname"
       onChange={handleChange}
    />
    </div>
    <div className='info-section'>
      <label htmlFor="date">Appointment Date:</label>
      <input id="date" type="date" value={Date} 
      onChange={handleChange}
     />
    </div>
    <div className='info-section'>
      <label htmlFor="message">Notes:</label>
      <input 
      type="textarea"  
      rows={5}
      cols={5}  notes= "notes"
      onChange={handleChange}
   />
    </div>
    <div className='buttons'>
    <button type="submit" onClick={handleSubmit} >Add Info</button>
    <button type='clear'>Clear</button>
    </div>
  </form>
  </div>
  )
}
