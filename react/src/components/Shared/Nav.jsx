import React from 'react';
import { NavLink } from "react-router-dom";

export const Nav = () => (
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
  </div>
);

