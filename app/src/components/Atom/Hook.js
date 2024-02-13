import React, { useState } from 'react';


function HookForm(){
    
  const [inputs, setinputs] = useState({
    email : "",
    email_etc : ""
   });
   const {
    email,email_etc
   } = inputs;
  const valueChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }



}


export default HookForm;