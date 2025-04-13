import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="card-body text-left mt-1 main-body">
			<div className="mb-1">
				<h5>Personajes</h5>

				<div className="d-flex flex-wrap gap-2">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://picsum.photos/300/200?random=1"
							className="card-img-top"
							alt="Imagen aleatoria"
						/>
						<div className="card-body">
							<h5 className="card-title">Luke Skywalker</h5>
							<p className="card-text">Gender: male</p>
							<p className="card-text">Hair: blonde</p>
							<p className="card-text">Eye-Color: blue</p>
							<a href="#" className="btn btn-primary">
							Learn more!
							</a>
							<button className="btn btn-primary">Fav</button>
						</div>
					</div>

					<div className="card p-2">Personaje 2</div>
					<div className="card p-2">Personaje 3</div>
					<div className="card p-2">Personaje 4</div>
				</div>
			</div>


			<div className="mb-1">
				<h5>Vehículos</h5>
				<div className="d-flex flex-wrap gap-2">
					<div className="card p-2">Vehículo 1</div>
					<div className="card p-2">Vehículo 2</div>
					<div className="card p-2">Vehículo 3</div>
					<div className="card p-2">Vehículo 4</div>
				</div>
			</div>

			<div className="mb-1">
				<h5>Planetas</h5>
				<div className="d-flex flex-wrap gap-2">
					<div className="card p-2">Planeta 1</div>
					<div className="card p-2">Planeta 2</div>
					<div className="card p-2">Planeta 3</div>
					<div className="card p-2">Planeta 4</div>
				</div>
			</div>
			
		</div>

	);
}; 