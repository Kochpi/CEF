import "../style/Card.css"


function Card({ image, title, description, tech }) {
    return (
        <div className="col-md-4 mb-4 mt-5">
            <div className="card-custom h-100 border-0 rounded-3">

                <img
                src={image}
                className="card-img-top"
                alt={title}
                />

                <div className="card-body text-center mt-4">
                    <h2 className="card-title mt-4">{title}</h2>
                    <p className="card-text mt-4">{description}</p>

                    <button className="btn-custom">
                        Voir le site
                    </button>
                </div>

                <div className="card-footer mt-4 text-muted text-center">
                    {tech}
                </div>
            </div>
        </div>
    )
}
export default Card;