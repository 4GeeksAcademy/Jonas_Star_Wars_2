import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light main-body">
			<div className="container">
				<Link to="/" className="custom-link">
					<span className="navbar-brand mb-0 h1 main-body">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn-favorite">Favorite</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};