import React from 'react';

const Button = ({ buttonType }) => {

  const handleClick = () => {
    
  };

  return (
    <button className="button" onClick={handleClick} type={ buttonType }>
      Submit
    </button>
  );
};

export default Button;
