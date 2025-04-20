
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Card = ({data, type}) => {
const {store, dispatch} = useGlobalReducer()
const isFavorite = store.favorites.includes(data.name);

return (
        <div className="col-md-3 col-lg-2">

            <div className="card m-1">
                <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${type}/${data.uid}.jpg?raw=true`} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>

                    <div className="d-flex">
                    <Link to={`/${type}/${data.uid}`}>
                    <button className="btn btn-secondary">
                        See more...
                    </button>
                    </Link>


                    <button 
                        className={`btn ms-auto ${isFavorite ? 'btn-outline-secondary' : 'btn-outline-secondary'} d-flex`} 
                        onClick={() => dispatch({type: 'handle_favorites', payload: data.name})}
                    >
                        <i className={store.favorites.includes(data.name) ? "fas fa-heart" : "far fa-heart"}></i>

                    </button>
                  
                    </div>
                    
                           
                </div>
            </div>

        </div>
    )
}