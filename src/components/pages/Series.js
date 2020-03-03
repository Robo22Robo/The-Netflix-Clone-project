import React from 'react'
import SeriesCard from '../SeriesCard'
import database from "../../database"


export default function Series() {

  return (
    <div className="container">
      <p>Choose your Series</p>
      <div className="row">
        {database.map(serie => (
          <div key={serie.id} className="col center">
            <SeriesCard  serie={serie} />
          </div>
        ))}
      </div>
    </div>

  )
}
