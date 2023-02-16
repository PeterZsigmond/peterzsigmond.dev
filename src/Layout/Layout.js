import { Outlet, Link, NavLink } from "react-router-dom";
import './Layout.scss';

function Layout() {
  return (
    <div>
      <div className="sidebar">
        
        <p className="title"><Link to="/">peterzsigmond.dev</Link></p>
        
        <div className="menu">
          <div className="element about">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-person"></i>
              <p>About</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-ui-checks"></i>
              <p>Projects</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-envelope"></i>
              <p>Contact</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/cheatsheet" className={({ isActive }) => isActive ? "active" : ''}>
              <i className="icon bi-file-code"></i>
              <p>Cheatsheet</p>
            </NavLink>
          </div>
        </div>

        <img src={require("../img/github/github.png")}
             alt="GitHub"
             className="github"
             onClick={() => 
              window.open("https://github.com/PeterZsigmond", "_blank")
             }/>

      </div>

      <div className="main">

      <Outlet />

        <footer>
          <p className="copyright">Peter Zsigmond, 2023</p>
          <p className="version">(v0.0.1)</p>
        </footer>

      </div>
    </div>
  );
}

export default Layout;
