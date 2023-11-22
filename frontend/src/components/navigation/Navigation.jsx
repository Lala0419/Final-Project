import React from 'react';

import './Navigation.scss'


function Navigation() {
  const logo = "/facebookcover.png"

  return (

    <div className='nav'>

      <div className='nav-left'>
        <img className='nav-img' src={logo} alt='Logo for Property Brothers' />
      </div>

      <div className='nav-right'>
        <button className='nav-button'>Phone Number</button>
        <button className='nav-button'>Home</button>
        <button className='nav-button'>About</button>
        <button className='nav-button'>Services</button>
        <button className='nav-button'>Free Estimate</button>
      </div>

    </div>
    
  );
}

export default Navigation;