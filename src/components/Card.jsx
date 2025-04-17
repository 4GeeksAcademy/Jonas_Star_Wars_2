
import { Link } from "react-router-dom"

export const Card = ({data, type}) => {

    return (
        <div className="col-md-3 col-lg-2">

            <div className="card m-1">
                <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/${type}/${data.uid}.jpg?raw=true`} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>

                    <div className="d-flex">
                    <Link to={`/${type}/${data.uid}`}>
                    <button className="btn btn-secondary">
                        Ver más...
                    </button>
                    </Link>

                    <button className="btn btn-outline-danger d-flex ms-auto">
                        <i className="fas fa-heart"></i>
                    </button>                   
                    </div>
                    
                           
                </div>
            </div>

        </div>
    )
}