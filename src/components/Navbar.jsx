import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Navbar = () => {

const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light nav-color navbar-bg py-4">
			<div className="container-fluid p-2 mb-1">
				<Link to="/" className="custom-link">
					<span className="h1 nav-color p-2">Star Wars</span>
				</Link>
				
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-muted">No favorites</li>
						) : (
							store.favorites.map((fav, index) => (
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
									{fav}
									<button 
										className="btn btn-sm btn-outline-danger ms-2"
										onClick={() => dispatch({ type: 'handle_favorites', payload: fav })}
									>
										<i className="fas fa-trash"></i>
									</button>
								</li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};