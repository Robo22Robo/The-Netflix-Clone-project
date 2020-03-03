import React, { useState, useEffect } from 'react'
import database from "../../database"
import Episode from "../ Episode"
import { useParams } from 'react-router-dom'


const Season = () => {
  const [season, setSeason] = useState()
  const param = useParams()
  useEffect(() => {
    const serieDb = database.find(serie => serie.id === param.serieId)

    const seasonDb = serieDb && serieDb.seasons.find(season => season.id === param.seasonId)
    setSeason(seasonDb)

  }, [])

 //console.log(season)

  return (
    <div>
      {season && <Episode season={season} />}
    </div>
  )
}
export default Season




