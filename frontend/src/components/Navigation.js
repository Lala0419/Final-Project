import React from 'react';

function Navigation() {
  const logo = "/facebookcover.png"

  return (
    <nav>
      <img className='logo__image' src={logo} />

      <div className='btn-row'>
        <button>Phone Number</button>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Free Estimate</button>
      </div>
    </nav>
  );
}

export default Navigation;