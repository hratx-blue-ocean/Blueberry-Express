import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext, logout } from '../../auth';

export const Nav = () => {
  const context = useContext(AuthContext);

  return (
  <div className="inline-block px-7 py-5 text-white">
    <NavLink
      className="text-lg inline"
      to="/teacherhome"
      activeStyle={{
        fontWeight: "bold",
        textDecoration: 'underline'
      }}
    >
      Dashboard
    </NavLink>
    <NavLink
      className="text-lg inline ml-5"
      to="/calendar"
      activeStyle={{
        fontWeight: "bold",
        textDecoration: 'underline'
      }}
    >
      Calendar
    </NavLink>
    <NavLink
      className="text-lg inline ml-5"
      to="/userprofile"
      activeStyle={{
        fontWeight: "bold",
        textDecoration: 'underline'
      }}
    >
      My Profile
    </NavLink>
    <a
      className="text-lg inline ml-5 cursor-pointer"
      onClick={logout}
    > Log Out</a>
  </div>
)};

