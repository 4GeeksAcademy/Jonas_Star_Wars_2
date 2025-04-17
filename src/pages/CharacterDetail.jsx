import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacter } from "../services/APIservices"
import { Link } from "react-router-dom"

export const CharacterDetail = () => {

    const params = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getCharacter(params.uid, setData)
    }, [params.uid]

    )

    return(
        
            <div className="card col-12 p-3 m-3">
                <div>
                    Imagen
                </div>
                <div className="card-body">
                    <h1 className="card-title">{data.name}</h1>
                    <p className="mb-1 mt-3"><span className="attributes">Gender: </span> <strong>{data.gender}</strong></p>
                    <p className="mb-1"> <span className="attributes">Hair Color: </span> <strong>{data.hair_color}</strong> </p>
                    <p className="mb-1"> <span className="attributes">Height (cm): </span> <strong>{data.height}</strong> </p>
                    <p className="mb-1"> <span className="attributes">Eye Color: </span> <strong>{data.eye_color}</strong> </p>        
                    
                    <div className="d-flex ">
                    <Link to={`/`}>
                        <button className="back-home button btn btn-secondary ">
                        Back Home
                        </button>
                    </Link>    
                    
                    <button className="btn btn-outline-danger ms-auto">
                        <i className="fas fa-heart"></i>
                    </button>
                           


                    </div>
                   
                </div>
                
            </div>
            
     
    )
}