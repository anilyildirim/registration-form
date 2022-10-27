import React from 'react';

const Button = ({ buttonType, validity, buttonText }) => {
  return (
    <button className="button" type={ buttonType } disabled={ !validity } aria-disabled={ !validity }>
      { buttonText }
    </button>
  );
};

export default Button;
