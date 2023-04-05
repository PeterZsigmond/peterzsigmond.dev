import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import './Layout.scss';

function Layout() {

  const version = "1.0.1";

  const [menuHidden, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(current => !current);
  };

  const hideMenu = () => {
    if(!menuHidden) {
      setMenuState(true);
    }
  };

  return (
    <div>
      <div className={"sidebar" + (menuHidden ? ' hidden' : '')}>
        
        <p className="title" onClick={hideMenu}><Link to="/">peterzsigmond.dev</Link></p>
        
        <div className="menu">
          <div className="element about" onClick={hideMenu}>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-person"></i>
              <p>About</p>
            </NavLink>
          </div>
          <div className="element" onClick={hideMenu}>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-check2-square"></i>
              <p>Projects</p>
            </NavLink>
          </div>
          <div className="element" onClick={hideMenu}>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-envelope"></i>
              <p>Contact</p>
            </NavLink>
          </div>
          <div className="element" onClick={hideMenu}>
            <NavLink to="/cheatsheet" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-file-code"></i>
              <p>Cheatsheet</p>
            </NavLink>
          </div>
        </div>

        <img src={require("../../Images/github/github.png")}
             alt="GitHub"
             className="github"
             onClick={() => 
              window.open("https://github.com/PeterZsigmond", "_blank")
             }/>

      </div>

      <div className={"main" + (menuHidden ? '' : ' hidden')} onClick={hideMenu}>

        <div className="menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <Outlet />

        <footer>
          <p className="copyright">Peter Zsigmond</p>
          <p className="version">(v{version})</p>
        </footer>

      </div>
    </div>
  );
}

export default Layout;
