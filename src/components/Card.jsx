export const Card = ({data}) => {

    return (
        <div className="col-md-3 col-lg-2">
            <div className="card m-1">
                <img src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name:{data.name}</h5>
                    <p className="card-text">
                        loading...
                    </p>
                    <button>
                        Ver más...
                    </button>
                           
                </div>
            </div>
        </div>
    )
}