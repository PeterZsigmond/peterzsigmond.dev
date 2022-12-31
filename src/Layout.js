import { Outlet, NavLink } from "react-router-dom";
import './Layout.scss';

function Layout() {
  return (
    <div>
      <div className="sidebar">
        
        <p className="title"><NavLink to="/">peterzsigmond.dev</NavLink></p>
        
        <div className="menu">
          <div className="element about">
            <NavLink to="/" activeClassName="active">
              <i className="icon bi-person"></i>
              <p>About</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/projects" activeClassName="active">
              <i className="icon bi-ui-checks"></i>
              <p>Projects</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/contact" activeClassName="active">
              <i className="icon bi-envelope"></i>
              <p>Contact</p>
            </NavLink>
          </div>
          <div className="element">
            <NavLink to="/cheatsheet" activeClassName="active">
              <i className="icon bi-file-code"></i>
              <p>Cheatsheet</p>
            </NavLink>
          </div>
        </div>

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
