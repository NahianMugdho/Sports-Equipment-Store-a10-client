import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Authprovider';
import ThemeToggle from './ThemeToggle';
import { Tooltip } from 'react-tooltip'

const Navbar = ({ cartItems }) => {
  const {user,logOut}=useContext(AuthContext);
 
    const links = <>
    <li className=''><NavLink to="/"  className={({ isActive }) =>
      isActive ? "text-black font-bold" : "text-black"
    }>
    
    
    <a data-tooltip-id="my-tooltip" data-tooltip-content="Home">
 Home
</a>
    
    
    
    
    </NavLink></li>
     <li className=''><NavLink to="/equipments"  className={({ isActive }) =>
      isActive ? "text-black font-bold" : "text-black"
    }>
    
      <a data-tooltip-id="my-tooltip" data-tooltip-content="  Equipments">
      Equipments
</a>
      
      
      
      </NavLink></li>

<li className=''><NavLink to="/addData"  className={({ isActive }) =>
      isActive ? "text-black font-bold" : "text-black"
    }>
      
      
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Add Equipments">
      Add Equipments
</a>
      
      
      </NavLink></li>
     <li className=''>
     <NavLink to="/cartEquip" className={({ isActive }) => (isActive ? "text-black font-bold" : "text-black")}>
     <a data-tooltip-id="my-tooltip" data-tooltip-content="My Equipments">
My Equipments
</a>
        </NavLink>
    </li>   
    <a data-tooltip-id="my-tooltip" data-tooltip-content="Theme Changer">
    <div className="ml-4">
      <ThemeToggle />
    </div>
</a>
  
    </>
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div><img src="https://i.ibb.co.com/f268hFh/icons8-cricket-48.png" alt="" /> </div>
    <a className="btn btn-ghost text-xl font-mono ">EquiSports</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {links}
   
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && user?.email? <button onClick={logOut} className='btn'>Log-Out </button>:<a className="btn"><NavLink to="/login">Log In</NavLink> </a>
    }
    
  </div>
</div>
<Outlet /> 
<Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;