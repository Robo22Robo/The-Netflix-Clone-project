import { useReducer } from 'react'
import NetflixContext from './netflixContext'
import NetflixReducer from './netflixReducer'
import {
    NETFLIX_USERS
} from '../types'


const NetflixState = (props) => {
    const initialState = {
        users: []
    }


const [state, dispatch] = useReducer(NetflixReducer, initialState)
return (
< NetflixContext.Provider
   value = {{
  users: state.users
 }}
>
 
 </NetflixContext.Provider >
  )
 }

export default NetflixState