import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light nav-color navbar-bg">
			<div className="container-fluid p-2 mb-1">
				<Link to="/" className="custom-link">
					<span className="mb-0 h2 nav-color">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn bg-secondary btn-favorite-list">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};