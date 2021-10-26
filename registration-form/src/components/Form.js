import React, { useState } from 'react';
import Button from '../base/Button';
import ValidationStep from '../base/ValidationStep';

const Form = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [charNumValidity, setCharNumValidity] = useState(false);
  const [lowercaseValidity, setLowercaseValidity] = useState(false);
  const [uppercaseValidity, setUppercaseValidity] = useState(false);
  const [numberValidity, setNumberValidity] = useState(false);
  const [specialCharValidity, setSpecialCharValidity] = useState(false);

  const [passwordValidity, setPasswordValidity] = useState(false);

  const regex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  function validatePassword(password) {
    // Check if the password has uppercase letter
    (password.toLowerCase() !== password) ? setUppercaseValidity(true) :
    setUppercaseValidity(false);

    // Check if the password has lowercase letter
    (password.toUpperCase() !== password) ? setLowercaseValidity(true) : setLowercaseValidity(false);

    // Check if the password has a number
    (/\d/.test(password)) ? setNumberValidity(true) : setNumberValidity(false);

    // Check if the password has a special character
    (regex.test(password)) ? setSpecialCharValidity(true) : setSpecialCharValidity(false);

    // Check if the password has at least 8 characters
    (password.length >= 8) ? setCharNumValidity(true) : setCharNumValidity(false);

    // Check if all validations passed
    (uppercaseValidity && lowercaseValidity && charNumValidity && numberValidity && specialCharValidity ) ? setPasswordValidity(true)
    : setPasswordValidity(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);
    validatePassword(password);
    passwordValidity && setPassword(password);
    console.log('Entered valid password :>> ', password);
  }

  return (
    <div className="registration-form">
      <form id="login-form" name="form" className="registration-form__inner" onSubmit={(e) => handleSubmit(e)}>
        <ul className="registration-form__row registration-form__row--inputs">
          <li>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              onChange={(e) => setUsername(e.target.value)}  
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => validatePassword(e.target.value)}
            />
          </li>
        </ul>
        <div className="registration-form__row registration-form__row--validation">
          <ul className="registration-form__validators-list">
            <ValidationStep validity={charNumValidity} validationName="8+ characters"/>
            <ValidationStep validity={lowercaseValidity} validationName="lowercase letter"/>
            <ValidationStep validity={uppercaseValidity} validationName="uppercase letter"/>
            <ValidationStep validity={numberValidity} validationName="number"/>
            <ValidationStep validity={specialCharValidity} validationName="special character"/>
          </ul> 

          <Button buttonType={'submit'} validity={passwordValidity} />
        </div>
      </form>
    </div>
  );
};

export default Form;
