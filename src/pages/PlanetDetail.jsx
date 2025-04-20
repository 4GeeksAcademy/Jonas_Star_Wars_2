import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPlanet } from "../services/APIservices"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const PlanetDetail = () => {

    const params = useParams()
    const [data, setData] = useState({})
    const { store, dispatch } = useGlobalReducer()
    const isFavorite = store.favorites.includes(data.name);

    useEffect(() => {
        getPlanet(params.uid, setData)
    }, [params.uid]

    )

    return(
        <div className="container p-2 d-flex" >
            <div className="card d-flex justify-content-center p-3" style={{ maxHeight: "85vh", maxWidth: "380px", width: "100%" }}>
                <div className="card col-12">
                    
                    <img  src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${params.uid}.jpg?raw=true`} 
                    alt="" 
                    className="p-3"
                    />
                    
                    <div className="card-body">
                        <h1 className="card-title">{data.name}</h1>
                        <p className="mb-1 mt-2"><span className="attributes">Diameter: </span> <strong>{data.diameter}</strong></p>
                        <p className="mb-1"> <span className="attributes">Climate: </span> <strong>{data.climate}</strong> </p>
                        <p className="mb-1"> <span className="attributes">Terrain: </span> <strong>{data.terrain}</strong> </p>
                        <p className="mb-1"> <span className="attributes">Population: </span> <strong>{data.population}</strong> </p>        
                        
                        <div className="d-flex mt-4">
                            <Link to={`/`}>
                                <button className="back-home button btn btn-secondary ">
                                Back Home
                                </button>
                            </Link>    
                            
                            <button 
                                className={`btn ms-auto ${isFavorite ? 'btn-outline-secondary' : 'btn-outline-secondary'}`} 
                                onClick={() => dispatch({type: 'handle_favorites', payload: data.name})}
                            >
                                <i className={store.favorites.includes(data.name) ? "fas fa-heart" : "far fa-heart"}></i>
                            </button>
                        </div>               
                    </div>               
                </div>
            </div>
        </div>
    )
}