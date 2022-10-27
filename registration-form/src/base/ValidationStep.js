import React from 'react';

const ValidationStep = ({ validity, validationName }) => {

  return (
    <li key={validationName}>
      <p>
        { validity ? 
          (<i className="fas fa-check"></i>) 
          : (<i className="fas fa-times"></i>) } 
          <span>{validationName}</span>
      </p>
    </li>
  );
};

export default ValidationStep;
