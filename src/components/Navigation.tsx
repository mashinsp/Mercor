import React from 'react';


const NavigationBar = () => {

  const HandleClick = (e: any) =>{
    e.preventDefault();
    // can handle click relative to the requirements
  }

  return (
    <nav className="fixed top-6 w-full bg-transparent z-10 flex justify-between items-center">
      <button className='hover:cursor-pointer bg-transparent ml-20'>
        <img 
          src={require('./utils/Vector.png')} 
          alt="Left Logo" 
          onClick={HandleClick}/>
      </button>
      <div className="space-x-4">
        <button className="nav-button">Sign In</button>
        <button className="nav-button">Legal</button>
        <button className="nav-button">Licenses</button>
        <button className="nav-button">Security</button>
        <button className="nav-button">Career</button>
        <button className="nav-button">Press</button>
        <button className="nav-button">Support</button>
        <button className="nav-button">Status</button>
      </div>
      <button className='hover:cursor-pointer bg-transparent mr-20'>
        <img 
          src={require('./utils/eyebutton.png')} 
          alt="Right Logo" 
          onClick={HandleClick}/>
      </button>
    </nav>
  );
};

export default NavigationBar;
