import React from 'react';

const Button = ({ buttonType, validity }) => {

  const handleClick = () => {
    
  };

  return (
    <button className="button" onClick={handleClick} type={ buttonType } disabled={!validity} aria-disabled={!validity}>
      Submit
    </button>
  );
};

export default Button;
