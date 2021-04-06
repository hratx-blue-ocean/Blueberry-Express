import React from 'react';
import { NavLink } from "react-router-dom";

export const Nav = () => (
  <div className="inline-block">
    <NavLink
      className="text-blue-600 text-xl inline hover:underline"
      to="/teacherhome"
      activeStyle={{
        fontWeight: "bold",
      }}
    >
      Dashboard
    </NavLink>
    <NavLink
      className="text-blue-600 text-xl inline ml-5 hover:underline"
      to="/calendar"
      activeStyle={{
        fontWeight: "bold",
      }}
    >
      Calendar
    </NavLink>
    <NavLink
      className="text-blue-600 text-xl inline ml-5 hover:underline"
      to="/userprofile"
      activeStyle={{
        fontWeight: "bold",
      }}
    >
      My Profile
    </NavLink>
  </div>
);

