 
 import React from 'react';
 import logo from './assets/logo.png';
 import user from './assets/user.png';

export const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <img src={logo} alt="Brand Logo" className="h-8" />
      <div className="flex items-center">
        <span className="mr-2">Username</span>
        <img src={user} alt="User Avatar" className="h-8 w-8 rounded-full" />
      </div>
      
    </nav>
  );
};

export default NavigationBar;
