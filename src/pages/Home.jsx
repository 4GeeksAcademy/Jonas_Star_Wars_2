import { useState } from "react";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {
	const {store, dispatch} = useGlobalReducer()
	console.log ("charactes desde el Home", store.characters);

	return(
		<div className="container-fluid">

			<div className="container-characters mt-4">
				<h2>Characters</h2>
				<div className="container-scroll d-flex overflow-x-scroll">
					{
						store.characters.map(character => {
							return (
								<Card key={character.uid} data={character}/>   

							)
						})
					}

				</div>
			</div>

		</div>

	);
};








// export const Home = () => {

//   const {store, dispatch} =useGlobalReducer()

//   const [isFav, setIsFav] = useState(false);
//   const toggleFav = () => setIsFav(!isFav);

// 	return (
		
// 		<div className="container-fluid text-left mt-1 main-body-color">
			
// 			{/* FILA DE TARJETAS */}
// 			<div className="mb-3 p-2">
// 				<h5>Characters</h5>

							
// 				<div className="d-flex flex-wrap gap-2">
					
// 					{/* TARJETAS TIPO*/}
// 					<div className="card card-tipo">
// 						<img
// 							src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
// 							className="card-img-top fixed-img"
// 							alt="Imagen aleatoria"
// 						/>
// 						<div className="card-body">
// 							<h5 className="card-title">Luke Skywalker</h5>
// 							<p className="card-text mb-1"><span className="field">Gender: </span>male</p>
// 							<p className="card-text mb-1"><span className="field">Hair Color: </span>blonde</p>
// 							<p className="card-text mb-3"><span className="field">Eye-Color: </span>blue</p>

// 							<div className="d-flex mt-2">
// 								<div className="profile-btn">
// 									<a href="#" className="btn btn-secondary">
// 									Profile
// 									</a>
// 								</div>
// 								<div className="fav-button d-flex ms-auto">
// 								<button
//                   					className={`btn ${isFav ? "btn-warning" : "btn-secondary"}`}
//                   					onClick={toggleFav}
//                 				>
// 									<i className="fa-solid fa-heart"></i>
// 								</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="card p-2">Personaje 2</div>
// 					<div className="card p-2">Personaje 3</div>
// 					<div className="card p-2">Personaje 4</div>
// 				</div> {/* FIN DE FILA DE TARJETAS */}
// 			</div>


// 			<div className="mb-3 p-2">
// 				<h5>Vehicles</h5>
// 				<div className="d-flex flex-wrap gap-2">
// 					<div className="card p-2">Vehículo 1</div>
// 					<div className="card p-2">Vehículo 2</div>
// 					<div className="card p-2">Vehículo 3</div>
// 					<div className="card p-2">Vehículo 4</div>
// 				</div>
// 			</div>

// 			<div className="mb-1 p-2">
// 				<h5>Planets</h5>
// 				<div className="d-flex flex-wrap gap-2">
// 					<div className="card p-2">Planeta 1</div>
// 					<div className="card p-2">Planeta 2</div>
// 					<div className="card p-2">Planeta 3</div>
// 					<div className="card p-2">Planeta 4</div>
// 				</div>
// 			</div>
			
// 		</div>

// 	);
// }; 