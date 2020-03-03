import React from 'react'
import {
    BrowserRouter as Router,
    NavLink
} from 'react-router-dom'


const SeriesCard = (props) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.serie.image} className="card-img-top" alt="Johny" />
            <div className="card-body">
                <h5 className="card-title">{props.serie.title}</h5>
                <p className="card-text">{props.serie.description}</p>

            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Seasons
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {props.serie.seasons.map((season,index) => (
                        <NavLink className="dropdown-item" activeClassName="active" to={`/serie/${props.serie.id}/season/${season.id}`}>season {index + 1}</NavLink>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default SeriesCard