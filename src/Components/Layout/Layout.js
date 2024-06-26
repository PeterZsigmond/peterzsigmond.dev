import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import './Layout.scss';

function Layout() {

	const version = "1.1.1";

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
						<NavLink to="/Projects" className={({ isActive }) => isActive ? "active" : ''}>
							<i className="icon bi-check2-square"></i>
							<p>Projects</p>
						</NavLink>
					</div>
					<div className="element" onClick={hideMenu}>
						<NavLink to="/Contact" className={({ isActive }) => isActive ? "active" : ''}>
							<i className="icon bi-envelope"></i>
							<p>Contact</p>
						</NavLink>
					</div>
					<div className="element" onClick={hideMenu}>
						<NavLink to="/Cheatsheet" className={({ isActive }) => isActive ? "active" : ''}>
							<i className="icon bi-file-code"></i>
							<p>Cheatsheet</p>
						</NavLink>
					</div>
				</div>

				<div className="github" onClick={() => window.open("https://github.com/PeterZsigmond", "_blank")}>
					<img
						src={require("../../Images/github/github.png")}
						alt="GitHub"
					/>
				</div>

			</div>

			<div className={"main" + (menuHidden ? '' : ' hidden')} onClick={hideMenu}>

				<div className="menu-button" onClick={toggleMenu}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>

				<Outlet />

				<footer>
					<p className="copyright">peterzsigmond.dev</p>
					<p className="version">{version}</p>
				</footer>

			</div>
		</div>
	);
}

export default Layout;