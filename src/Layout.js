import { Outlet, Link } from "react-router-dom";
import './Layout.scss';

function Layout() {
  return (
    <div>
      <div className="sidebar">
        <p className="title">peterzsigmond.dev</p>

        <div className="menu">
          <div className="element">
            <Link to="/">
              <img src="" />
              <p>About</p>
            </Link>
          </div>
          <div className="element">
            <Link to="/projects">
              <img src="" />
              <p>Projects</p>
            </Link>
          </div>
          <div className="element">
            <Link to="/contact">
              <img src="" />
              <p>Contact</p>
            </Link>
          </div>
          <div className="element">
            <Link to="/cheatsheet">
              <img src="" />
              <p>Cheatsheet</p>
            </Link>
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
