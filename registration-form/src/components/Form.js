import React, { useState } from 'react';
import Button from '../base/Button';

const Form = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [charNumValidity, setCharNumValidity] = useState(false);
  const [lowercaseValidity, setLowercaseValidity] = useState(false);
  const [uppercaseValidity, setUppercaseValidity] = useState(false);
  const [numberValidity, setNumberValidity] = useState(false);
  const [specialCharValidity, setSpecialCharValidity] = useState(false);

  const [passwordValidity, setPasswordValidity] = useState(false);

  const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  function validatePassword(password) {
    // Check if the password has uppercase letter
    if (password.toLowerCase() !== password) { 
      setUppercaseValidity(true) 
    } else {
      setUppercaseValidity(false);
      console.log('uppercase error');
    }
  

  // Check if the password has lowercase letter
    if (password.toUpperCase() !== password) {
      setLowercaseValidity(true)
    } else {
      setLowercaseValidity(false);
      console.log('lowercase error');
    }

    // Check if the password has a number
    if (/\d/.test(password)) {
      setNumberValidity(true)
    } else {
      setNumberValidity(false);
      console.log('number error');
    }

    // Check if the password has a special character
    if (regex.test(password)) {
      setSpecialCharValidity(true)
    } else {
      setSpecialCharValidity(false);
      console.log('special char error');
    }

    // Check if the password has at least 8 characters
    if (password.length >= 8) {
      setCharNumValidity(true);
    } else {
      setCharNumValidity(false);
      console.log('number of chars error');
    }

    // Check if all validations passed
    (uppercaseValidity && lowercaseValidity && charNumValidity && numberValidity && specialCharValidity ) ? setPasswordValidity(true)
    : setPasswordValidity(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);
    setPassword(password);
    validatePassword(password);
  }

  return (
    <form id="login-form" name="form" className="registration-form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        onChange={(e) => setUsername(e.target.value)}  
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <ul>
        <li>
          <p>{charNumValidity ? (<i class="fas fa-check"></i>) : (<i class="fas fa-times"></i>)} <span>8+ characters</span> </p>
        </li>
        <li>
          <p>{lowercaseValidity ? (<i class="fas fa-check"></i>) : (<i class="fas fa-times"></i>)} <span>lowercase letter</span>   </p>
        </li>
        <li>
          <p>{uppercaseValidity ? (<i class="fas fa-check"></i>) : (<i class="fas fa-times"></i>)} <span>uppercase letter</span></p>
        </li>
        <li>
          <p>{numberValidity ? (<i class="fas fa-check"></i>) : (<i class="fas fa-times"></i>)} <span>number</span> </p>
        </li>
        <li>
          <p>{specialCharValidity ? (<i class="fas fa-check"></i>) : (<i class="fas fa-times"></i>)}<span>special character</span> </p>
        </li>
      </ul> 

      <Button buttonType={'submit'} disabled={!passwordValidity} />
    </form>
  );
};

export default Form;
