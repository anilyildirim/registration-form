import React from 'react';

const Header = ({ titleText }) => {

  return (
    <header className="header">
      <h1>{ titleText }</h1>
    </header>
  );
};

export default Header;