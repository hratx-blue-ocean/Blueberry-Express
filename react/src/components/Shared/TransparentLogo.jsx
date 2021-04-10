import React from 'react';
import { Link } from "react-router-dom";

export const TransparentLogo = () => (
  <Link to="/">
    <div className="flex items-center nav-image">
      <img className="logo-image" src='assets/transparent_logo_2.png'/>
      <p className="company-name text-white -ml-4">Blueberry Express</p>
    </div>
  </Link>

  //
);