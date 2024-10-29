import React from 'react'
import {  useAppContext } from '../context/AppContextProvider'
import appActions from '../context/appACtions';

const Home = () => {
    const {state, dispatch} = useAppContext()
    console.log(state);
    
  return (
    <div>
        <h1>Home</h1>
        <button onClick={() => {dispatch({type:appActions.USERLOGIN})}}>Log In</button>
    </div>
  )
}

export default Home