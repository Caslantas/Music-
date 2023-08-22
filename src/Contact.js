import React, { useState } from 'react';

const Contact = ({onClose}) => {
   const[input,setİnput]=useState("")
   
  
   const handleSubmit = (e) => {
      e.preventDefault();
      
   };

   return (
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <h2>İletişim</h2>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label htmlFor="firstName">First Name:</label>
               <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={input}
                  onChange={(e)=>setİnput(e.target.value)}
               />
            </div>
            <div className="form-group">
               <label htmlFor="lastName">Last Name:</label>
               <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={input}
                  onChange={(e)=>setİnput(e.target.value)}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={input}
                  onChange={(e)=>setİnput(e.target.value)}
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="message">Message:</label>
               <textarea
                  id="message"
                  name="message"
                  value={input}
                  onChange={(e)=>setİnput(e.target.value)}
                  required
               />
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>
      </div>
   );
}

export default Contact;
