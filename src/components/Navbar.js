// components/Navbar.js
// import React, { useImperativeHandle } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';
import me from "../images/me.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        <img src={me} alt="No load :(" className="navbar-image" />
        <p>Phillip Brush</p>
      </Link>
      <ul>
        <CustomLink to="/"> Home </CustomLink>
        <CustomLink to="/Projects"> Projects </CustomLink>
        <CustomLink to="/WorkExperience"> Work Experience </CustomLink>
        <CustomLink to="/About"> About </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
