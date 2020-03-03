import React from 'react'
import img from './images/john.jpg';
import {
    BrowserRouter as Router,
    NavLink
} from 'react-router-dom'


const SeasonsCard = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="Johny" />
            <div className="card-body">
                <h5 className="card-title">{props.season.title}</h5>
                <p className="card-text">{props.season.description}</p>
            </div>
            <div className="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Seasons
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink className="dropdown-item" activeClassName="active" to="/episode">season1</NavLink>
                <NavLink className="dropdown-item" activeClassName="active" to="/episode">season2</NavLink>
                <NavLink className="dropdown-item" activeClassName="active" to="/episode">season3</NavLink>
                </div>
            </div>
        </div>
    )
}
export default SeasonsCard